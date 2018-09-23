const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./roar');
let counter = 0;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
//    client.user.setAvatar('data:image/png;base64,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')
//            .then(user => console.log(`New avatar set!`))
//            .catch(console.error);
});

client.on('message', msg => {
    if (msg.content === 'mrping') {
        msg.channel.send('Pong ' + client.ping + ' ms.');
    }
});
client.on('presenceUpdate', data => {
    var guild = data.guild;
    var channel = guild.channels.find(c => c.name.toLowerCase() === "r4-p17");
    if (data.user.id === '440238317410320384' && data.user.presence.status === 'offline') {
        channel.send('https://ruby-dime.glitch.me/');
        counter++;
        client.user.setActivity(counter.toString(), {type: 'WATCHING'});
    }

});

client.login(auth.token);