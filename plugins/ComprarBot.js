// Créditos A Niño Piña
let handler = async (m, { conn }) => {
// No Quites Los Créditos🦌
m.react('🚀');
// Mensaje que se enviará
const message = "〔🤖 *HELL - BOT* 🤖〕\n\n> *🚀FELIZ NAVIDAD🤖*\n\n*BOT PARA GRUPO* :\n> wa.me/50557865603\n\n*BOT PERZONALIZADO* :\n> wa.me/50557865603";
if (m, rcanal) {
// Feliz Navidad🤖
const imageUrl = 'https://i.ibb.co/qJNL5Bg/file.jpg';
try {
// Que No Quites Los Créditos😑
// Te Estoy Viendo😑
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message, mimetype: 'image/jpeg' });
} catch (error) {
console.error('Error al enviar el mensaje:', error);
}
}
}
handler.help = ['comprar'];
handler.tags = ['main'];
handler.command = ['comprar'];
export default handler;