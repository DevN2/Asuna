let Baileys = require('@adiwajshing/baileys')
let conn = new Baileys.WAConnection()
let fs = require('fs')
let CFonts = require('cfonts')
let figlet = require('figlet')
let { color } = require('./lib/color')
let package = JSON.parse(fs.readFileSync('./package.json'))
let express = require('express')
let app = new express()
let qrcode = require('qrcode')

let QR;

let PORT = process.env.PORT || 8080 || 5000 || 3000
app.listen(PORT, () => {
  console.log(color('Localhost is running!', 'yellow'))
})

async function start() {
  console.log(color(figlet.textSync(`Inos Baileys\nWaBot`, 'Larry 3D'), 'cyan'))
  CFonts.say(`Created By : ${package.author} Team!`, {
    font: 'console',
    align: "center",
    gradient: ['yellow', 'yellow']
  })

  global.User = require('./user.js');
  //db
const url = "mongodb+srv://devn:ma3c140175@devn.je2td.mongodb.net/devn?retryWrites=true&w=majority";
const { Database } = require('quickmongo');
global.db = new Database(url);
global.tgam = db.createModel('tebakgambar')
db.on("ready", () => {
  console.log('DB connect banh')
})
  /**
   * Uncache if there is file change
   * @param {string} module Module name or path
   * @param {function} cb <optional>
   */
  function nocache(module, cb = () => { }) {
    console.log("‣ Module", `'${module}'`, "is now being watched for changes")
    fs.watchFile(require.resolve(module), async () => {
      await uncache(require.resolve(module))
      cb(module)
    })
  }

  /**
   * Uncache a module
   * @param {string} module Module name or path
   */
  function uncache(module = '.') {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(module)]
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  require('./msg/message.js')
  nocache('./msg/message.js', module => console.log(color(`message.js is now updated!`)))

  conn.autoReconnect = Baileys.ReconnectMode.onConnectionLost
  conn.version = [2, 2140, 6]
  conn.logger.level = 'warn'
  conn.on('qr', async (qr) => {
    let createQr = await qrcode.toDataURL(qr, {
      scale: 20
    })
    replaceQr = await createQr.replace('data:image/png;base64,', "")
    QR = await new Buffer.from(replaceQr, "base64")
    console.log(color("[SYSTEM]", "green"), "Scan the QR code!")
  })
  fs.existsSync('./sessions.json') && conn.loadAuthInfo('./sessions.json')
  await conn.connect({timeoutMs: 30*1000})
  fs.writeFileSync('./sessions.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
  console.log(color('[BOT] Connected!', 'green'))
  conn.on('chats-received', async ({ hasNewChats }) => {
    console.log(color(`[SYSTEM] You have ${conn.chats.length} chats, new chats available: ${hasNewChats}`, 'magenta'))
  })
  conn.on('contacts-received', () => {
    console.log(color('[SYSTEM] You have ' + Object.keys(conn.contacts).length + ' contacts', 'brown'))
  })
  conn.on('chat-update', async (message) => {
    require('./msg/message.js')(conn, message)
  })
}

app.get("/", async(req, res) => {
  res.header('content-type', 'image/png')
  res.end(QR)
})

start()
