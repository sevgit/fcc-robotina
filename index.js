var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
  
    token: "MjUzNTcyNjgwNjYwMjg3NDg5.CyCfAA.12c7GJ7PCeEgt_XYRDDlVdB6b0g"
});



bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});


bot.on('message', function(user, userID, channelID, message, event) {
    if (message.indexOf('!placeholder') != -1 && user != bot.username) {

        var arguments = message.split(" ");

        if (arguments.length !=3) {
            bot.sendMessage({
            to: channelID,
            message: "`Modo de uso: !placeholder <ancho> <alto>`"
            });
        }
        else {
            bot.sendMessage({
            to: channelID,
            message: "http://placekitten.com/" + arguments[1] + "/" + arguments[2]
            });
        }
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


