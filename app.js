const { chromium } = require("playwright");
const axios = require("axios");

async function main() {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();
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
  await popup.waitForLoadState();

  await sleep(5000);
  const otpCode = await getOtp("userfacebookga@gmail.com");

  console.log("OTP:", otpCode);

  await page.waitForTimeout(3000);

  // Lấy tất cả các input trong form OTP
  const otpInputs = await popup.$$('input[autocomplete="one-time-code"]');

  // Nhập từng số vào từng ô input
  for (let i = 0; i < otpInputs.length; i++) {
    await otpInputs[i].fill(otpCode[i]);
  }

  // Đợi cho đến khi popup đóng và chuyển hướng xong
  await popup.waitForEvent("close");

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

  //   await browser.close();
}

main();

async function getOtp(email) {
  const { data } = await axios.get(
    `https://script.google.com/macros/s/AKfycbxoKOcqxlKtBJNz7KSF2Fvy7NgVjLR7VsNPfRVpe8l3vv9aFIBvH3jryiFKM3ve-t1Qew/exec?email=${email}`
  );

  return data.data.otp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
