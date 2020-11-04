const djs = require("discord.js");
const discord = new djs.Client();
const fs = require("fs");
if (!fs.existsSync("./config.json")) {console.log("configure first!");}
const config = JSON.parse(fs.readFileSync("./config.json"));

discord.on("ready", function () {
    discord.user.setActivity('deleting shit', { type: "PLAYING"})
});

discord.on("message", function(message) {
    if (message.guild.id !== config.guildId) {return;}
    else if (message.channel.id !== config.channelId) {return;}
    else {message.delete({timeout: config.delay})}
})

discord.login(config.token)