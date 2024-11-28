class Logger {
  static LOG_LEVELS = {
    INFO: "\x1b[36m[INFO]\x1b[0m", // Màu xanh dương
    SUCCESS: "\x1b[32m[SUCCESS]\x1b[0m", // Màu xanh lá
    ERROR: "\x1b[31m[ERROR]\x1b[0m", // Màu đỏ
  };

  static info(message) {
    this._writeLog("INFO", message);
  }

  static success(message) {
    this._writeLog("SUCCESS", message);
  }

  static error(message) {
    this._writeLog("ERROR", message);
  }

  static _writeLog(level, message) {
    const timestamp = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const logMessage = `[${timestamp}] ${this.LOG_LEVELS[level]} ${message}\n`;
    console.log(logMessage);
  }
}

module.exports = Logger;
