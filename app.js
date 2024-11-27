const { chromium } = require("playwright");
const path = require("path");
const { getOTPFromEmail } = require("./imap");
const { deleteDirectory, sleep } = require("./helpers");

async function verifyOtp(popup) {
  const maxRetries = 5;
  const delayMs = 3000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`Thử lần ${attempt}/${maxRetries}`);

      const otpCode = await getOTPFromEmail("userfacebookga@gmail.com");
      console.log("otpCode", otpCode);

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
        console.log("Đợi 3 giây trước khi thử lại...");
        await sleep(delayMs);
      }
    } catch (error) {
      if (
        error.message.includes("context or browser has been closed") ||
        error.message.includes("No resource with given identifier found")
      ) {
        return true;
      }
      console.log(`Lỗi ở lần thử ${attempt}:`, error);

      // Nếu còn lượt thử, đợi 3 giây
      if (attempt < maxRetries) {
        console.log("Đợi 3 giây trước khi thử lại...");
        await sleep(delayMs);
      }
    }
  }

  // Sau khi đã thử hết số lần cho phép
  console.log(`Đã thử ${maxRetries} lần nhưng không thành công`);
  return false;
}

async function main() {
  const userDataDir = "./tmp";
  deleteDirectory(userDataDir);

  // Thêm hàm kiểm tra IP
  async function checkIP(page) {
    await page.goto("https://api.ipify.org?format=json");
    const content = await page.content();
    const match = content.match(/"ip":"([^"]+)"/);
    if (match) {
      console.log("IP hiện tại:", match[1]);
    }
  }

  const pathToExtension = path.join(
    __dirname,
    "pljbjcehnhcnofmkdbjolghdcjnmekia"
  );
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
    proxy: {
      server: "http://113.179.1.118:16524",
      username: "1mdwAFhoM",
      password: "VkiELs",
    },
  });

  const page = await browser.newPage();

  // Kiểm tra IP trước khi truy cập trang chính
  await checkIP(page);

  await page.goto("https://bless.network/dashboard/login");

  await page.fill(
    'input[placeholder="m@example.com"]',
    "userfacebookga@gmail.com"
  );

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

  await sleep(3000);
  await verifyOtp(popup);

  // Đợi cho đến khi popup đóng và chuyển hướng xong
  await popup.waitForEvent("close", { timeout: 60000 });

  // Đợi cho trang chính load xong
  await Promise.all([
    page.waitForLoadState("networkidle"),
    page.waitForLoadState("domcontentloaded"),
    page.waitForLoadState("load"),
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

  console.log("B7S_AUTH_TOKEN:", authToken);

  await sleep(1000);
  const extensionUrl = `chrome-extension://pljbjcehnhcnofmkdbjolghdcjnmekia/index.html`;
  const extensionPage = await browser.newPage();
  await extensionPage.goto(extensionUrl);

  await extensionPage.evaluate(async () => {
    const getHardwareIdentifier = async () => {
      try {
        const [r, e] = await Promise.all([
            chrome.system.cpu.getInfo(),
            chrome.system.memory.getInfo(),
          ]),
          t = {
            cpuArchitecture: r.archName,
            cpuModel: r.modelName,
            cpuFeatures: r.features,
            numOfProcessors: r.numOfProcessors,
            totalMemory: e.capacity,
          };
        return btoa(JSON.stringify(t));
      } catch (r) {
        return console.error("Error getting hardware info:", r), null;
      }
    };
    const generateDeviceIdentifier = async () => {
      console.log("test");
      const r = await getHardwareIdentifier(),
        e = JSON.stringify({
          hardware: r,
        }),
        n = new TextEncoder().encode(e);
      return crypto.subtle.digest("SHA-256", n).then((i) =>
        Array.from(new Uint8Array(i))
          .map((a) => a.toString(16).padStart(2, "0"))
          .join("")
      );
    };
  });
  //   await browser.close();
}

main().catch(console.error);
