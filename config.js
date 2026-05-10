module.exports = {
  // ===== Bot Identity =====
  BOT_NAME: "ActiveMD",
  VERSION: "2.0.0",

  // ===== Core Settings =====
  PREFIX: ".",

  // ===== Owners (without + or spaces) =====
  OWNER: ["255625316099"],

  // ===== Sticker Settings =====
  PACK_NAME: "Active Stickers",
  AUTHOR: "ActiveTsh",

  // ===== Session ID (optional – used if present) =====
  // ✅ Uses environment variable if set (Heroku-safe)
  SESSION_ID: process.env.SESSION_ID || "" // example: Active~BASE64_DATA
};
