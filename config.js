//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0U0cEs2TWhwQW5nWUkrZ0kxRkNFTm82b3Z3a0s5VXJjUmx5TnF2UnhtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlEvNklpQmNwQUV4UnAzRU01SDhpeUVJT1Z5T2NFSzErczM2Y3N3TEsyaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUDBSdXRQbGxCVUdubWZzL1gzcmd6ZnkwT0xlK05nUkZrK2kyVzhzTmtZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIQkhyR01LVXYwRHpBcmlrak1jVzVic2Z3bEVNTll2QXRKL3I0YUFZVTJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGOHhTTWVXYTNFdVU3ck93akhyTi91TDlyS1lEa3R4L1FFWDQ4WUp2blE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF2WFdHb1hkSDQ3amxrbUJuM3M5cWhkTlJVYnVWOEVvVzRHeXVLT1VlRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JzU21ld2tjdWRjSUJVVWdjV2hTVUNvSVFCSllPS2N1eHdOWXRQUk4xQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmFLeTl6UGlKZldRVzVJbWc0UURzdjRjajh5R0lNMmdMYnFlU2xSVkhWOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVaT2FDZzRmdUNBL0RSQzJDMm1GbXVaTzh4UUx3K0srazVSbjhyQTIvRTRSZzU3dmVLcFppc1FpbGphNG5FZlBvVW40dUhSZktlbE5ZZmlZSTZXb0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImJJRUQzK3BULzBvK00zRjI0dG9BUDlwR1lmc1NUMDFSMVlkeUFyNVJ0VW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVXZk54bWVIVG5xd1NUNTlQMGlxMVEiLCJwaG9uZUlkIjoiODgxMjQyNmYtZDQzYy00YzgyLWFmMzktNzk1OWM4OTQ2M2U1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhpS3hUVTF1NTIraytaV2tYeHJnaTl4Y2ticz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkR2hQZnBFdGVDWXUzWGtNYXFpdTJ3UC9MbkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSENZUjU3WlQiLCJtZSI6eyJpZCI6Ijk0NzAzMDc0MzkzOjQ5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOenRpV0lRcHZid3RRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiclFldWRIaGxzZnZENE1Jekdhb3VFYW1HUCtEbVhuUUJ6NTllNFdPSlZrPSIsImFjY291bnRTaWduYXR1cmUiOiJnMGptSGxpSmwrUjlDZWxBVXQydHpNRWh3b3lvamNOL1FTWGZLZkR3UDR2dThPZ01WTlRMaGNaTTRPSWh4cTEyQ2d1R0p1cDNSUnBldFVTZlhxRzlDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZDIzRDZ6UDVkZXNoVEVXZXRVbmk1YTJZREVWVm1oNENNMGt4NlBhRmtla3NvREVCak0yK1h4VzhPUndQMnZNeUtOeXBLeG5MQkNIVXF2NWZBSGdFQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMzA3NDM5Mzo0OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXNjBIcm5SNFpiSDd3K0RDTXhtcUxoR3Boai9nNWw1MEFjK2ZYdUZqaVZaIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNjExOTU1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcrbiJ9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94703074393";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`dulanjana rajapaksha`",
  author: process.env.PACK_AUTHER || "dulanjana rajapaksha",
  packname: process.env.PACK_NAME || "dulanjana rajapaksha",
  botname: process.env.BOT_NAME || "dulanjana rajapaksha",
  ownername: process.env.OWNER_NAME || "dulanjna rajapaksha",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225,94757660788,94778668193,94785274495";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "ture";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
