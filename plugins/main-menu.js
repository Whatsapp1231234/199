//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
//import { plugins } from '../lib/plugins.js'
let tags = {
  'main': 'ACERCA DE',
  'bebot': 'SUB BOTS',
  'game': 'JUEGOS',
  'econ': 'NIVEL & ECONOMIA',
  'rg': 'REGISTRO',
  'sticker': 'STICKER',
  'img': 'IMAGEN',
  'maker': 'MAKER',
  'prem': 'PREMIUM',
  'group': 'GRUPO',
  'nable': 'EN/DISABLE OPCIONES', 
  'nime': 'ANIME',
  'rnime': 'ANIME REACCION',
  'dl': 'DESCARGAS',
  'tools': 'TOOLS',
  'fun': 'FUN',
  'cmd': 'DATABASE',
  'nsfw': 'NSFW +18',
  'ansfw': 'NSFW ANIME', 
  'owner': 'OWNER', 
  'advanced': 'AVANZADO',
}
const defaultMenu = {
  before: `
◈ ━━━━━ *Хулиган  ┃ ᴮᴼᵀ* ━━━━━ ◈
 
👋🏻 Привет *%name*
👥 Учасника : %totalreg
🟢 Время работы : %muptime
%sbot


────────────
%readmore
  ≡ *LISTA DE MENUS*

Ⓟ = Premium
ⓓ = Diamantes
`.trimStart(),
  header: '┌─⊷ *%category*',
  body: '▢ %cmd %isdiamond %isPremium',
  footer: '└───────────\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
}
//handler.help = ['help']
//handler.tags = ['main']
handler.command = ['меншщневагщшошпе865ю', 'help', 'menú'] 
handler.register = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
