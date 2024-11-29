const Imap = require("node-imap");
const { simpleParser } = require("mailparser");

const imapConfig = {
  user: "userfacebookga@gmail.com",
  password: "frcp xapd enmf svdj",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
};

function getOTP(targetEmail) {
  return new Promise((resolve, reject) => {
    try {
      const imap = new Imap(imapConfig);

      imap.once("ready", () => {
        imap.openBox("INBOX", false, () => {
          const searchCriteria = [
            ["FROM", "no-reply@web3auth.io"],
            ["TO", targetEmail],
          ];

          imap.search(searchCriteria, (err, results) => {
            if (err) return reject(err);
            if (!results.length) {
              imap.end();
              return resolve(null);
            }

            const f = imap.fetch([results[results.length - 1]], {
              bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)", "TEXT"],
              struct: true,
            });

            f.on("message", (msg) => {
              msg.on("body", (stream) => {
                simpleParser(stream, async (err, parsed) => {
                  if (err) return reject(err);

                  if (parsed.subject?.includes("Verify your email")) {
                    const otp = parsed.subject.match(/\d+/g)[0];
                    resolve(otp);
                  }
                });
              });
            });

            f.once("error", (ex) => {
              reject(ex);
            });

            f.once("end", () => {
              imap.end();
            });
          });
        });
      });

      imap.once("error", (err) => {
        reject(err);
      });

      imap.connect();
    } catch (err) {
      reject(err);
    }
  });
}

async function getOTPFromEmail(email) {
  const maxRetries = 5;
  const delayMs = 5000;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const otp = await getOTP(email);
      if (otp) return otp;

      // Nếu không phải lần thử cuối cùng thì đợi
      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    } catch (error) {
      // Nếu là lần thử cuối cùng thì throw error
      if (attempt === maxRetries - 1) {
        throw error;
      }
      // Nếu không phải lần cuối, đợi rồi thử lại
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
  return null;
}

module.exports = { getOTPFromEmail };

// (async () => {
//   const otp = await getOTPFromEmail("userfacebookga@gmail.com");
//   console.log(otp);
// })();
