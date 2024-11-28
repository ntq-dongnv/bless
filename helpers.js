const fs = require("fs");
const { createClient } = require("@supabase/supabase-js");
const { default: axios } = require("axios");
const { HttpsProxyAgent } = require("https-proxy-agent");

require("dotenv").config();

function createAxios(proxy, headers) {
  const proxyAgent = new HttpsProxyAgent(proxy);
  return axios.create({
    httpsAgent: proxyAgent,
    headers,
    validateStatus: function (status) {
      return true; // Luôn trả về true để ngăn Axios throw lỗi
    },
  });
}

function createAxiosWithSocks5(socks5, headers) {
  const agent = new SocksProxyAgent("socks://116.99.230.28:30149");
  return axios.create({
    httpAgent: agent,
    headers,
  });
}

async function checkProxyLive(proxy, timeout = 10000) {
  const proxyAgent = new HttpsProxyAgent(proxy);
  try {
    const response = await axios.get("https://api.ipify.org", {
      httpsAgent: proxyAgent,
      timeout: timeout,
    });
    return response.data;
  } catch (error) {
    // console.log(error);
    return false;
  }
}

function createSupabaseClient() {
  const supabaseUrl = "https://wdokmmnkxsjkegeuyqme.supabase.co";
  const supabaseAnonKey = process.env.SUPABASE_KEY;
  return createClient(supabaseUrl, supabaseAnonKey);
}

function imageToBase64(filePath) {
  try {
    // Đọc file ảnh
    const image = fs.readFileSync(filePath);
    // Chuyển đổi buffer thành chuỗi base64
    return Buffer.from(image).toString("base64");
  } catch (error) {
    console.error("Lỗi khi chuyển đổi ảnh sang base64:", error);
    return null;
  }
}

function base64ToImage(base64String, outputPath) {
  try {
    // Chuyển đổi chuỗi base64 thành buffer
    const buffer = Buffer.from(base64String, "base64");
    // Ghi buffer vào file
    fs.writeFileSync(outputPath, buffer);
    return outputPath;
  } catch (error) {
    console.error("Lỗi khi chuyển đổi base64 thành ảnh:", error);
    return false;
  }
}


function deleteDirectory(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.rmSync(directoryPath, { recursive: true, force: true });
    console.log(`Đã xóa thư mục: ${directoryPath}`);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


module.exports = {
  createAxios,
  sleep,
  checkProxyLive,
  createSupabaseClient,
  imageToBase64,
  base64ToImage,
  deleteDirectory,
  sleep
};

