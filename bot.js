const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("serverNewMember", function (server, user) {
    client.addMemberToRole(user, server.roles.get("name", "Member"), function (err) { if (err) console.log(err) })

client.on('message', message => {
    if (message.content === 'whatareyou') {
    	message.reply('I am a bot that auto-assigns "Member" role to everyone.')
  	}
});

client.login(process.env.BOT_TOKEN);
