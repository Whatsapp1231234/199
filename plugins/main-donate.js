
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ ${mssg.donate}

▢ *PayPal*
• *Link :* https://paypal.me/fg98f

▢ *Mercado Pago Arg*
• *Alias :* fgmods

▢ *Naranja X Arg*
• *Alias :* fgmods2
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'оплата', 'donar'] 

export default handler

