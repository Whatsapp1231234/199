 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName}ᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *NSFW* 
${bgp3}

▢ 𝐌𝐘 - 𝐌𝐚𝐲𝐥𝐮𝐱 | ᴮᴼᵀ⚡


▢ 📲💻ANDROID WORLD🎬🎮


◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Todos los Grupos
 https://instabio.cc/

▢ *Telegram*
• https://t.me
 ▢ *PayPal*
• https://paypal.me
▢ *YouTube*
• https://www.youtube.com`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
