const { chromium } = require("playwright");
const path = require("path");
const { getOTPFromEmail } = require("./imap");
const { deleteDirectory, sleep, createAxios } = require("./helpers");
const fs = require("fs");
const Logger = require("./logger");
process.env.NODE_NO_WARNINGS = "1";

async function verifyOtp(popup, email) {
  const maxRetries = 5;
  const delayMs = 10000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      Logger.info(`Thử verify OTP lần ${attempt}/${maxRetries}`);

      const otpCode = await getOTPFromEmail(email);
      Logger.info(`Đã lấy OTP: ${otpCode}`);

      // const otpCode = "123456";
      const otpInputs = await popup.$$('input[autocomplete="one-time-code"]');

      // Nhập từng số vào từng ô input
      for (let i = 0; i < otpInputs.length; i++) {
        await otpInputs[i].fill(otpCode[i]);
      }

      // Đợi response từ API verify OTP
      const response = await popup.waitForResponse(
        (response) =>
          response
            .url()
            .includes(
              "api.web3auth.io/passwordless-service/api/v3/auth/passwordless/verify"
            ),
        { timeout: 10000 }
      );

      // Thêm logging để kiểm tra response thô
      const responseText = await response.text();
      console.log("Response raw:", responseText);

      Logger.error(`Response: ${responseText}`);

      // Chỉ parse JSON nếu response là JSON hợp lệ
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.log("Không thể parse JSON:", parseError);
        throw parseError;
      }

      if (data.success) {
        return true;
      }

      // Nếu không thành công và còn lượt thử, đợi 3 giây
      if (attempt < maxRetries) {
        Logger.info(`Đợi ${delayMs}ms trước khi thử lại...`);
        await sleep(delayMs);
      }
    } catch (error) {
      if (
        error.message.includes("context or browser has been closed") ||
        error.message.includes("No resource with given identifier found")
      ) {
        return true;
      }
      Logger.error(`Lỗi ở lần thử ${attempt}: ${error.message}`);

      // Nếu còn lượt thử, đợi 3 giây
      if (attempt < maxRetries) {
        Logger.info(`Đợi ${delayMs}ms trước khi thử lại...`);
        await sleep(delayMs);
      }
    }
  }

  // Sau khi đã thử hết số lần cho phép
  console.log(`Đã thử ${maxRetries} lần nhưng không thành công`);
  return false;
}

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

async function login(email, proxy, refCode) {
  Logger.info(`Đăng nhập với email: ${email}`);

  // Tạo random userDataDir
  const randomString = Math.random().toString(36).substring(7);
  const userDataDir = `./_user_data/${randomString}`;

  // Tạo thư mục mới
  if (!fs.existsSync(userDataDir)) {
    fs.mkdirSync(userDataDir, { recursive: true });
  }

  // Thêm hàm kiểm tra IP
  async function checkIP(page) {
    await page.goto("https://api.ipify.org?format=json");
    const content = await page.content();
    const match = content.match(/"ip":"([^"]+)"/);
    if (match) {
      Logger.info(`IP hiện tại: ${match[1]}`);
    }
  }

  const pathToExtension = path.join(
    __dirname,
    "pljbjcehnhcnofmkdbjolghdcjnmekia"
  );
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: true,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
    proxy: {
      server: proxy,
      // username: "1mdwAFhoM",
      // password: "VkiELs",
    },
  });

  const page = await browser.newPage();

  // Kiểm tra IP trước khi truy cập trang chính
  await checkIP(page);

  await page.goto(`https://bless.network/dashboard?ref=${refCode}`);

  await page.fill('input[placeholder="m@example.com"]', email);

  // Đợi và xử lý popup window
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click('button:has-text("Login with Email")'),
  ]);

  // Đợi cho popup load xong
  await Promise.all([
    popup.waitForLoadState("networkidle"),
    popup.waitForLoadState("domcontentloaded"),
    popup.waitForLoadState("load"),
  ]);

  Logger.info(`Đang verify OTP cho email: ${email}`);
  await sleep(5000);
  await verifyOtp(popup, email);

  // Đợi cho đến khi popup đóng và chuyển hướng xong
  await popup.waitForEvent("close", { timeout: 60000 });

  Logger.info(`Đã verify email thành công: ${email}`);

  // Đợi cho trang chính load xong
  await Promise.all([
    page.waitForLoadState("networkidle", { timeout: 60000 }),
    page.waitForLoadState("domcontentloaded", { timeout: 60000 }),
    page.waitForLoadState("load", { timeout: 60000 }),
  ]);

  // Thêm hàm đợi và kiểm tra B7S_AUTH_TOKEN
  const authToken = await page.evaluate(() => {
    return new Promise((resolve) => {
      const checkToken = () => {
        const token = localStorage.getItem("B7S_AUTH_TOKEN");
        if (token) {
          resolve(token);
        } else {
          setTimeout(checkToken, 500); // Kiểm tra lại sau mỗi 500ms
        }
      };
      checkToken();
    });
  });

  const referrals = await page.evaluate(async (authToken) => {
    return (
      await fetch("https://gateway-run.bls.dev/api/v1/users/referrals", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
    ).json();
  }, authToken);

  const { exec } = require("child_process");

  exec(`rm -rf ${userDataDir}`, (err) => {
    if (err) {
      Logger.error(`Error while executing rm -rf: ${err}`);
    } else {
      Logger.info(`${userDataDir} has been deleted successfully!`);
    }
  });

  Logger.info(`Đã đăng nhập với email: ${email} thành công`);

  await browser.close();

  return {
    authToken,
    referrals,
  };

  // const extensionUrl = `chrome-extension://pljbjcehnhcnofmkdbjolghdcjnmekia/index.html`;
  // const extensionPage = await browser.newPage();
  // await extensionPage.goto(extensionUrl);

  // await extensionPage.evaluate(async () => {
  //   const getHardwareIdentifier = async () => {
  //     try {
  //       const [r, e] = await Promise.all([
  //           chrome.system.cpu.getInfo(),
  //           chrome.system.memory.getInfo(),
  //         ]),
  //         t = {
  //           cpuArchitecture: r.archName,
  //           cpuModel: r.modelName,
  //           cpuFeatures: r.features,
  //           numOfProcessors: r.numOfProcessors,
  //           totalMemory: e.capacity,
  //         };
  //       return btoa(JSON.stringify(t));
  //     } catch (r) {
  //       return console.error("Error getting hardware info:", r), null;
  //     }
  //   };
  //   const generateDeviceIdentifier = async () => {
  //     console.log("test");
  //     const r = await getHardwareIdentifier(),
  //       e = JSON.stringify({
  //         hardware: r,
  //       }),
  //       n = new TextEncoder().encode(e);
  //     return crypto.subtle.digest("SHA-256", n).then((i) =>
  //       Array.from(new Uint8Array(i))
  //         .map((a) => a.toString(16).padStart(2, "0"))
  //         .join("")
  //     );
  //   };
  // });
}

module.exports = {
  login,
};
