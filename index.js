var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "كيف حالك انتا كويس بنقالي؟",
assets : {
large_image : "s4",
large_text : "[ S✨ ]" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "سيرفر البوت حقي" , url : "https://discord.gg/FpjdRgZ3"},{label : "AboutMe",url : "https://sbot.sdcc.repl.co/AboutMe"}]
}
})
})
client.login({ clientId : "959055608085094451" }).catch(console.error);