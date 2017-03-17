var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
  
    token: "MjUzNTcyNjgwNjYwMjg3NDg5.CyCfAA.12c7GJ7PCeEgt_XYRDDlVdB6b0g"
});

var frases = ['JS','PYTHON', 'RUBY', 'C#', 'SCALA', 'COBOL', 'PASCAL', 'C++', 'RUST', 'JAVA'];

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});


bot.on('message', function(user, userID, channelID, message, event) {
    if (message.indexOf('mejor lenguaje') != -1) {
        bot.sendMessage({
            to: channelID,
            message: frases[Math.floor(Math.random()*frases.length)]
        });
    }
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message.indexOf('!help') != -1) {
        bot.sendMessage({
            to: channelID,
            message: "Todavía no me enseñaron nada =( :robot: beep boop :robot:"
        });
    }
});
