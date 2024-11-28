const { login } = require("./bless");
const { fetchBlessAccounts, updateBlessAccount } = require("./database");
const Logger = require("./logger");
const { changeIP } = require("./proxy/proxyfb");
const { status } = require("./status");

async function main() {
  const codes = [
    "1CCCN8",
    "XX064T",
    "XPCTV7",
    "P6ZR0O",
    "6LYI31",
    "BRBT90",
    "L8KSMJ",
    "P66KV1",
    "9BW1LZ",
    "434PIH",
    "3J7SM2",
    "7YEXV9",
    "JGP5CT",
    "VYTLLY",
    "KW6SRL",
    "B1SLDA",
    "UX0XK7",
    "4WPKAR",
    "8SRL2R",
    "PDS7W0",
    "04D707",
    "78SL72",
    "VL4OB3",
    "A8MY3J",
    "QUBXH2",
    "4N1E3X",
    "FCG2RB",
    "85C1FN",
    "8SRL2R",
    "EB2MBK",
  ];

  // Tạo bản sao và trộn
  const shuffledCodes = [...codes].sort(() => Math.random() - 0.5);

  const accounts = await fetchBlessAccounts(status.NOT_REGISTERED);

  for (const [index, code] of shuffledCodes.entries()) {
    const account = accounts[index];
    if (!account) {
      console.log(`Không có account cho code thứ ${index + 1}: ${code}`);
      continue;
    }

    try {
      const proxy = await changeIP("432191faa67668a10a3d14351675526c876f");
      const { authToken, referrals } = await login(account.email, proxy, code);

      await updateBlessAccount(account.email, {
        auth_token: authToken,
        ref_code: referrals.refCode,
        status: status.REGISTERED,
        ref_by_code: code,
      });
    } catch (error) {
      Logger.error(error.message);
      await updateBlessAccount(account.email, {
        error: error.message,
      });
    }
  }
}

main();
