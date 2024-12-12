const fs = require("fs");
const axios = require("axios");
const { createAxios, sleep } = require("../helpers");

async function getProxyKeys() {
  try {
    // Đọc danh sách key từ file proxy_key.csv
    const keys = fs
      .readFileSync("proxy_keys.csv", "utf-8")
      .split("\n")
      .filter(Boolean);

    const proxyList = [];

    for (const key of keys) {
      try {
        // Gọi API để lấy proxy
        const response = await axios.get(
          `http://api.proxyfb.com/api/changeProxy.php?key=${key.trim()}`
        );
        if (response.data.success) {
          proxyList.push(key);
        }
      } catch (error) {
        console.log(error.response.data.message);
        if (
          error.response &&
          error.response.status === 400 &&
          error.response.data.message.includes("Bạn cần đợi thêm")
        ) {
          proxyList.push(key);
        }
      }
    }

    return proxyList;
  } catch (error) {
    console.error("Lỗi khi đọc file hoặc xử lý danh sách proxy:", error);
    return [];
  }
}

async function changeIP(proxyKey, force = false) {
  console.log("Đang change IP");

  let success = false;
  let proxy = null;

  while (!success) {
    try {
      const response = await axios.get(
        `http://api.proxyfb.com/api/changeProxy.php?key=${proxyKey}`
      );

      if (response.data.success) {
        success = true;
        proxy = response.data.proxy;
      } else {
        // Đợi 5 giây trước khi thử lại nếu không có thông báo cụ thể
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const waitTimeMatch =
          error.response.data.message.match(/(\d+(\.\d+)?)/);
        if (waitTimeMatch) {
          const waitTime = parseFloat(waitTimeMatch[0]) * 1000; // Chuyển đổi sang milliseconds
          console.log(`Đợi ${waitTime / 1000} giây để nhận IP mới...`);
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        } else {
          // Nếu không tìm thấy thời gian cụ thể, đợi 5 giây
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      } else {
        console.error("Lỗi khi thay đổi IP:", error.response.data.message);
        // Đợi 5 giây trước khi thử lại
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
  }

  if (success) {
    const axiosInstance = createAxios(`http://${proxy}`);
    const realIPResponse = await axiosInstance.get(
      "https://api.ipify.org?format=json"
    );
    const realIP = realIPResponse.data.ip;

    // Ghi IP mới vào file proxy_log.csv
    const logEntry = `${realIP}\n`;
    fs.appendFileSync("proxy_log.csv", logEntry, "utf8");
  }

  return `http://${proxy}`;
}

async function getProxy(apiKey) {
  try {
    const response = await axios.get(
      `http://api.proxyfb.com/api/getProxy.php?key=${apiKey}`
    );
    const data = response.data;

    return `http://${data.proxy}`;
  } catch (error) {
    if (
      error.response.data.message ===
      "Chưa có proxy để xem lại! Vui lòng change trước khi xem."
    ) {
      console.log("Không có proxy hiện tại. Đang thực hiện thay đổi IP...");
      const newProxy = await changeIP(apiKey);
      return newProxy; // Gọi lại hàm getProxy sau khi đã thay đổi IP
    } else {
      console.error("Không thể lấy proxy:", error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
}

// (async () => {
//   const proxyList = await getProxy("2438d35a8facdba0ef43048c62e4d8c9dda0");
//   console.log(proxyList);
// })();

module.exports = { getProxyKeys, changeIP, getProxy };
