const { login } = require("./bless");
const {
  fetchBlessAccountsForRegNode,
  updateBlessAccount,
  createNode,
  incrementNodeCount,
  getRandomBless,
} = require("./database");
const Logger = require("./logger");
const { changeIP, getProxyKeys } = require("./proxy/proxyfb");
const { status } = require("./status");
const _ = require("lodash");
const { exec } = require("child_process");

async function regNode(accounts, proxyKey) {
  //   const codes = [
  //     "1CCCN8",
  //     "XX064T",
  //     "XPCTV7",
  //     "P6ZR0O",
  //     "6LYI31",
  //     "BRBT90",
  //     "L8KSMJ",
  //     "P66KV1",
  //     "9BW1LZ",
  //     "434PIH",
  //     "3J7SM2",
  //     "7YEXV9",
  //     "JGP5CT",
  //     "VYTLLY",
  //     "KW6SRL",
  //     "B1SLDA",
  //     "UX0XK7",
  //     "4WPKAR",
  //     "8SRL2R",
  //     "PDS7W0",
  //     "04D707",
  //     "78SL72",
  //     "VL4OB3",
  //     "A8MY3J",
  //     "QUBXH2",
  //     "4N1E3X",
  //     "FCG2RB",
  //     "85C1FN",
  //     "8SRL2R",
  //     "EB2MBK",
  //     "AWB5X5",
  //     "TZHE88",
  //     "5GZC2X",
  //     "AWB5X5",
  //     "TZHE88",
  //     "5GZC2X",
  //     "AWB5X5",
  //     "TZHE88",
  //     "5GZC2X",
  //     "AWB5X5",
  //     "TZHE88",
  //     "5GZC2X",
  //     "AWB5X5",
  //     "TZHE88",
  //     "5GZC2X",
  //   ];

  for (const account of accounts) {
    if (!account) {
      console.log(`Không có account`);
      continue;
    }

    const MAX_NODES_PER_ACCOUNT = 5;
    const remainingNodes = MAX_NODES_PER_ACCOUNT - account.node_count;

    for (let i = 0; i < remainingNodes; i++) {
      const refCode = await getRefCode(account.status);

      try {
        const proxy = await changeIP(proxyKey);
        const { authToken, referrals, nodeData } = await login(
          account.email,
          proxy,
          refCode
        );

        await updateBlessAccount(account.email, {
          auth_token: authToken,
          ref_code: referrals.refCode,
          status: status.REGISTERED,
        });

        Logger.info(`Đang insert node cho email ${account.email}`);
        await createNode(account.email, nodeData);

        await incrementNodeCount(account.email);
      } catch (error) {
        Logger.error(error.message);
        await updateBlessAccount(account.email, {
          error: error.message,
        });
      }
    }
  }
}

async function getRefCode(accountStatus) {
  if (accountStatus === status.NOT_REGISTERED) {
    const blessRecrod = await getRandomBless();

    return blessRecrod.ref_code || "";
  }

  return "";
}

async function run() {
  const userDataDir = "./_user_data";
  await new Promise((resolve, reject) => {
    exec(`rm -rf "${userDataDir}"`, (error) => {
      if (error) {
        Logger.error(`Lỗi khi xóa thư mục ${userDataDir}: ${error}`);
        reject(error);
      } else {
        Logger.info(`Đã xóa thư mục ${userDataDir}`);
        resolve();
      }
    });
  });

  while (true) {
    console.log("Đang lấy proxy");
    const proxies = await getProxyKeys();
    console.log(`Hiện đang có ${proxies.length} proxies`);
    if (proxies.length === 0) {
      throw new Error("Không có proxy");
    }

    const accounts = await fetchBlessAccountsForRegNode();

    Logger.info(`Đang đăng ký ${accounts.length} account`);

    if (accounts.length === 0) {
      throw new Error("Không có account");
    }

    const chunkedAccounts = _.chunk(
      accounts,
      Math.ceil(accounts.length / proxies.length)
    );

    await Promise.allSettled(
      chunkedAccounts.map(async (chunk, index) => {
        const proxy = proxies[index];

        return await regNode(chunk, proxy);
      })
    );
  }
}

run();
