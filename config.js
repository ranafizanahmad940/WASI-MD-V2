const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Faizanmods@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923227843430@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "FaizanMods";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeKraD002T6fgSM9X1Z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeKraD002T6fgSM9X1Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923227843430";
global.sudo = process.env.SUDO || "923227843430";
global.owner = process.env.OWNER_NUMBER || "923227843430";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09jUjZjcENUTTVoK0krNzN6US9hRHJ5UjNsVmYvL0oyaitnWUZTWXJHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJCaEsvem5pazFCOG5GU1pZTHQxMHkrQUV0LzQ4elVFZG9sOU5GY01CST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDdwTnVqY3B1Z0VQdlZuYVBDQUtUM1NpMmt2UEY5eFhYcDUzYmJZaTFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvaVVCUmttLytCTWk1TTlJQ3NWR2JWNS9BQ28xSmtmVFVNZVdORGtXTXp3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKdkV1a2d0Ykhoc2xDU0xMTmlHMWdER3RneDdTbUJjVUlUVStMTVcrMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc1U3FIUXJqOGs3ckh3dmhteUNsNHlkRTAzNE92VzNscEg4cDhqUnd2Z2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0szV2h0NXdTZkRiUlVQaDYyTHFvUHl1ZE01R283RHhkU0FzTWhkVFQzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFRHZmJJZjQzVFZ2ZVdacngvcHkxKy91Y1N4QjJaeGxPb1hRNHM2Ykptdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc0ZnRGcnU3LzZFUktGVFJyd3AzSnhRN3dLbWhjZkNuT0drYUlJdTVhem5McjNCai9JenJBdndiNm9BZS9hdXpEYjN5c240eXVwSlV6aFpsR3Y1OUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IlZEeDZPa3RyRDJDdDJaRTNEemZtbW9pWVR2YU1iYXoxNmIwOEtGR1hmcFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJqa2ZGOEdqUlpTZURYQlJsVWF1NHciLCJwaG9uZUlkIjoiZDBlYmNlYmMtNmE3ZS00ZGU3LWE4ZDktMzM0OTc2Yjg0MzZmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE4Vks5M1BRVlRjeWlibkFXY3B5WGRSZGJ0az0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWTdUWEY5Wmw5MUNhczFBcTVwMzJTWUU2eGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWlRFOEtFQkMiLCJtZSI6eyJpZCI6IjkyMzI4MjE0NTE4MzoyNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzNraU1ZRUVKK1puN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSm5IQUNqWnJmaVpJaG5YTnRQUFRIQitIQXZqUnRoZTNNclB6bHQ4anVEdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUk4eTdCaE9VOVlFd1dZYmtDaGwrSzJXL0FxOWVMYmpJTEJ4dThHZElrSUlqdk1RbnptcllwL0RqMU9YSmJobUlDMHZ2S24xcTZIVHpybFd1MlAwQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlB3SjlubXpxVUhTWHVNZy9hclJWK3kvSm1MODJmOERWcXdLbDhxM1VCK3V0cCtBTkJQM3pzVVJmU0MzOUEvRzRkQzVORS9za1F2VzJwaWd6MGVaMkRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjgyMTQ1MTgzOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNaeHdBbzJhMzRtU0laMXpiVHoweHdmaHdMNDBiWVh0ekt6ODViZkk3ZzgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxNzU4MDF9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-FAIZANMODS😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FAIZANMODS",
  ownername: process.env.OWNER_NAME || "FAIZAN",
  errorChat: process.env.ERROR_CHAT || "923227843430",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "FAIZAN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
 
