

let buatall = 1
let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
	let user = global.db.data.users[m.sender]
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 55)}`.trim()
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
		let who = m.fromMe ? conn.user.jid : m.sender
	    let username = conn.getName(who)
	    
	    let tiempoEspera = 15
	    
	    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
    let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
    conn.reply(m.chat, `🎰 YA HAS INICIADO UNA APUESTA, ESPERA *⏱ ${tiempoRestante}* PARA VOLVER APOSTAR`, m, rcanal)
    return
  }
  
  cooldowns[m.sender] = Date.now()
	    
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, '🚩 INGRESE LA CANTIDAD DE' + `*🌠 Estrellas*` + ' QUE DESEA APOSTAR CONTRA' + ` *CrowBot-Ai*` + `\n\n` + '`Ejemplo:`\n' + `> *${usedPrefix + command}* 100`, m, rcanal)

        if (user.limit >= count * 1) {
            user.limit -= count * 1
            if (Aku > Kamu) {
                conn.reply(m.chat, '`🎲 VEAMOS QUE NUMEROS TIENEN!`\n\n'+ `➠ *CrowBot-Ai* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *PERDISTE* ${formatNumber(count)} 🌠 Estrellas.`.trim(), m, rcanal)
            } else if (Aku < Kamu) {
                user.limit += count * 2
                conn.reply(m.chat, '`🎲 VEAMOS QUE NÚMEROS TIENEN!`\n\n'+ `➠ *Crow Ai* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *GANASTE* ${formatNumber(count * 2)} 🌠 Estrellas.`.trim(), m, rcanal)
            } else {
                user.limit += count * 1
                conn.reply(m.chat, '`🎲VEAMOS QUE NÚMEROS TIENEN!`\n\n'+ `➠ *CrowBot Ai* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username} obtienes ${formatNumber(count * 1)} 🌠 Estrellas.`.trim(), m, rcanal)
            }
        } else conn.reply(m.chat, `🤖NO TIENES *${formatNumber(count)} 🌠 Estrellas* PARA APOSTAR!`.trim(), m, rcanal)
    
}
    
handler.help = ['apostar *<cantidad>*']
handler.tags = ['game']
handler.command = /^(apostar|casino)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(segundos) {
  let segundosRestantes = segundos % 60
  return `${segundosRestantes} segundos`
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}