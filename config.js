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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZtZzljclBCaWl1WksrVGRmVXZVVXIvemY5bHozaGZtSUxFUVhGUEJVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2lxSHFRZzdiYXRzYmlDMUhua3BQV1Nta3NDakdadVVmVkZDZDQyOXFSVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSkZIc1lOb2lNTDVkUGNwYVUrYjlTc05Ba3ZnS3NOYU5Ic21VZ01tQzJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYWQ3eWNidVF4YjJmcXM2QjMyMHIzZVZIMXRyMUZsYk4xaVNvV3ZUTnlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQVjFKMnpUeHlUTk1KNzFzSjR6eWxVMWRjK0JJTUZsYWRwRUxJeWc0V0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndaSzBoOGFSZGtjdU9Icmc1cmlhTWpiYUJtS1JCd2ExdnNlQzF5a08yd0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZvc2N3WlFrbzVpVXAxbDZ4aW54U09PWUZkd3lrLzRxMGU1cUJnSXcwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQit1YlNieUtoQ05uU2JCdFVFYUMrY1o1SDl6YVk1LzkzNzRwaGpYcFVRND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inhqdlc4U3pERFEvU2MzbWo1d3hjZXFHS2VyTWtOMkg3QSt0dHFXOERLeStvanVpS0x4UzZGcXVpaktNQkptSFBpOHNzc3RHTlA3dUFQZmtNZ1dZTmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6IlF5TE9iZEhqSk5IYUl3VU1ZaElBY2lWdTlFWU0xdzR4UG9sdWFGMVJIaTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdJZFZ2Y2RsUTlxTWpsZTF1dXhDMWciLCJwaG9uZUlkIjoiMTliNWNjYTEtMTg3ZC00OWQ0LWI3ZGQtNzBmOWY3YjU1NzRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IituL2tSSE1vSU5ETUVoUllLeFJqYmd6QkxqOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5cEdPNk1qWUJhNUM5eldXLzVOclltR1JFaVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUpQQ1pMS0oiLCJtZSI6eyJpZCI6IjkyMzI4MjE0NTE4MzoyM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3praU1ZRUVQdUZsYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSm5IQUNqWnJmaVpJaG5YTnRQUFRIQitIQXZqUnRoZTNNclB6bHQ4anVEdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN3FVRDVTMTgxYnNndEdKazNhdXI0Smo1YmxEK0pYeGtBS1R3d0NicmQ2NWgvNVZKZHhhZDJ5YVJZNEZvQzJNV1hkWUE3MzFZcFVRTms3NkgxOVoyQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjZSM3VxRi9aMENVdUNyaXpxR2tsOHhYZ1JSTit4aWZtY0Q3STNOQmRud1FnRTB3MDdXR1BYVXZLUmUvelg5YUNzUDBKN2N6OTBsZzUrM1JiTHVTR2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjgyMTQ1MTgzOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNaeHdBbzJhMzRtU0laMXpiVHoweHdmaHdMNDBiWVh0ekt6ODViZkk3ZzgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwMDk0ODB9"
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
 
