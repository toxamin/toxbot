const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on("serverNewMember", function (server, user) {
    client.addMemberToRole(user, server.roles.get("name", "RoleName"), function (err) { if (err) console.log(err);
});

client.login(process.env.BOT_TOKEN);
