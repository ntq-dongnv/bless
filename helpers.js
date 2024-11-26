const fs = require("fs");

async function getHardwareIdentifier() {
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
}
async function generateDeviceIdentifier() {
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
}

function generateRandomDeviceId() {
  // Tạo mảng 32 bytes ngẫu nhiên (vì mỗi byte sẽ chuyển thành 2 ký tự hex)
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);

  // Chuyển đổi thành chuỗi hex
  return Array.from(randomBytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
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

module.exports = { deleteDirectory, sleep };
