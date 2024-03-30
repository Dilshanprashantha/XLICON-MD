const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94723388773"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Dilshan/Kagalla'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94723388773' 
global.devs = '94723388773';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURjSmRQd0VLVDMrUC9Oa0lwL2hZaXFPRFYyek9BbzBCSjlIME5SMXNtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnZmUUpRWkdGV2Z2di9WamQzZ3J1UEllSEJmanpRRGdPeGFrVGp5ckJBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRU1wNU9VVE95YlU2b0FHUEFodG56T0ZDUVJpSXdkNVBCUGx1YTFnSW1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmajRsdnJGaGt5K1l2ZVFieWpIaG5qaE9PNXI1b0dRMUlvd1NiQ0x3aWljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1FdmZWemxnODRNWGI2aHdib0RFeTl4WGM0Y3dtbUlOWDdjVWdjNkhMa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZxUUEvRjVwM3JucE9FazdXbkJYUXpNN2VOTkQ0T1EwKzRjMWppRDdsamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZycUJYaER0R3krWlcvOVk5Ym13aGNTRXl4bjBETGF2Nm81VThDQnRFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjVoRjJQbHhaU3NOZ1VuZDZYcmd1ek50V2R0U0lJR1FhdnFMS1ZFcTBnND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR3WUpCQk5SU1hzSmhOd3UvQzFnTmJHOFdidVNJbkNlSzF3Q2h1aGh1VzR1SnhYVFEwaVNwWmtUdk9sR0VNTlQ5ak01TUNVZUk0bzBXWEpLa3pEd0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IlF2R05NbWIxTlZZWURWV0Y3NGFmVmdCOCtMc1VZWDE4a1dqU0NUMnpoRzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhkaVBLOElyVG9xV2stT1diUVZDM3ciLCJwaG9uZUlkIjoiMzRlZTIxMjEtNmUxMi00NjFiLThjMWEtYjI5Yjk2YmJkNzY2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZVaWtGUjc1cWNacng4bGxMYktzSEdQbk5yND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WlYrTTZoSyt6VmJhbEJKSHdUWU1TQVF3bTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDNNTlBHUUwiLCJtZSI6eyJpZCI6Ijk0NzIzMzg4NzczOjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01DMjJGQVEzczZVc0FZWUR5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllaQ1h1NklBellJY21KN0l3MnpySS93ajRpaUhEb01ZVzlyQUU1Y1VaMDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlvaXVYMWszTVJKV3NvY0g0bUprSnVuS0U0WGZMemx1SFFQS1lvcjdlQTBNN2pKVTVrZEd4UGZDUzYzL3dvL0ExWTFZOVIyazltRldtazVXcms0YUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyKzIvZytJcnJQRm93UllvTzNZcW8xcnFRSEgxQXNYTFRZTXFuYUFoMGtQK0xiZVd6eFloMHZSZ2FSdnpkdnI1SEliVDMwVnFvQXk4c3F6SmRjOWNDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzIzMzg4NzczOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0dRbDd1aUFNMkNISmlleU1OczZ5UDhJK0lvaHc2REdGdmF3Qk9YRkdkTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMTYxMzc5NH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@MR Dilshan',
  packname:  process.env.PACK_NAME || 'Dilshan',
   
  botname:   process.env.BOT_NAME === undefined ? "MR Dilshan" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MRDilshan' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
