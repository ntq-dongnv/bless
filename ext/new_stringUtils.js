// Xác định global object (globalThis, window, global hoặc self)
const globalObject =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

// Helper function để xử lý ES module default export
function getDefaultExport(module) {
  return module &&
    module.__esModule &&
    Object.prototype.hasOwnProperty.call(module, "default")
    ? module.default
    : module;
}

// Helper function để tạo ES module wrapper
function createModuleWrapper(module) {
  if (module.__esModule) return module;

  let wrapper;
  const defaultExport = module.default;

  if (typeof defaultExport === "function") {
    wrapper = function Constructor() {
      return this instanceof Constructor
        ? Reflect.construct(defaultExport, arguments, this.constructor)
        : defaultExport.apply(this, arguments);
    };
    wrapper.prototype = defaultExport.prototype;
  } else {
    wrapper = {};
  }

  // Đánh dấu là ES module
  Object.defineProperty(wrapper, "__esModule", {
    value: true,
  });

  // Copy tất cả các properties từ module gốc
  Object.keys(module).forEach(function (key) {
    const descriptor = Object.getOwnPropertyDescriptor(module, key);
    Object.defineProperty(
      wrapper,
      key,
      descriptor.get
        ? descriptor
        : {
            enumerable: true,
            get: function () {
              return module[key];
            },
          }
    );
  });

  return wrapper;
}

// Constants cho API endpoints
const API_BASE_URL = "https://gateway-run.bls.dev/api/v1";
const IP_CHECK_URL = "https://tight-block-2413.txlabs.workers.dev";

// Lấy auth token từ chrome storage
async function getAuthToken() {
  return (await chrome.storage.local.get("authToken")).authToken;
}

// Đăng ký node mới
async function registerNode(nodeId, hardwareId) {
  const authToken = await getAuthToken();
  const url = `${API_BASE_URL}/nodes/${nodeId}`;
  const ipAddress = await getIpAddress();

  return (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        ipAddress,
        hardwareId,
      }),
    })
  ).json();
}

// Bắt đầu phiên làm việc cho node
async function startNodeSession(nodeId) {
  const authToken = await getAuthToken();
  const url = `${API_BASE_URL}/nodes/${nodeId}/start-session`;

  return (
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  ).json();
}

// Kết thúc phiên làm việc cho node
async function stopNodeSession(nodeId) {
  const authToken = await getAuthToken();
  const url = `${API_BASE_URL}/nodes/${nodeId}/stop-session`;

  return (
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  ).json();
}

// Ping để kiểm tra trạng thái node
async function pingNode(nodeId) {
  const authToken = await getAuthToken();
  const url = `${API_BASE_URL}/nodes/${nodeId}/ping`;

  return (
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  ).json();
}

// Lấy địa chỉ IP hiện tại
async function getIpAddress() {
  return (await (await fetch(IP_CHECK_URL)).json()).ip;
}

// Helper function để rút gọn chuỗi (ví dụ: "abcdef...xyz")
function truncateString(str, prefixLength = 6, suffixLength = 4) {
  const prefix = str?.slice(0, prefixLength + 2);
  const suffix = str?.slice(-suffixLength);
  return `${prefix}...${suffix}`;
}

// Chuyển đổi timestamp thành định dạng giờ
function formatTimeFromDate(timestamp) {
  return new Date(timestamp).toTimeString().split(" ")[0];
}

// Chuyển đổi số phút thành định dạng "Xd Yh Zm"
function formatDuration(minutes) {
  const totalMinutes = isNaN(minutes) || minutes < 0 ? 0 : Math.floor(minutes);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const mins = totalMinutes % 60;

  const padZero = (num) => num.toString().padStart(2, "0");

  let result = "";
  if (days > 0) result += `${days}d `;
  result += `${hours}h ${padZero(mins)}m`;

  return result;
}

// Exports
export {
  API_BASE_URL as G,
  formatDuration as a,
  createModuleWrapper as b,
  globalObject as c,
  startNodeSession as d,
  stopNodeSession as e,
  formatTimeFromDate as f,
  getDefaultExport as g,
  pingNode as p,
  registerNode as r,
  truncateString as s,
};
