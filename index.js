var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "MjUzNTcyNjgwNjYwMjg3NDg5.CyCfAA.12c7GJ7PCeEgt_XYRDDlVdB6b0g"
});



bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});


bot.on('message', function(user, userID, channelID, message, event) {
    if (message.split(" ")[0] === "!placeholder" && user != bot.username) {

        var arguments = message.split(" ");

        if (arguments.length !=3 || arguments[1] <=0 || arguments[2] <=0) {
            bot.sendMessage({
            to: channelID,
            message: "`Modo de uso: !placeholder [ancho < 0] [alto < 0]`"
            });
        }
        else {
            bot.sendMessage({
            to: channelID,
            message: "http://placehold.it/" + arguments[1] + "x" + arguments[2]
            });
        }
    }
    if (message === "!help") {
        bot.sendMessage({
            to: channelID,
            message: "```md\n#Comandos disponibles:\n```\n **!placeholder [ancho < 0] [alto < 0]:** linkea a un placeholder con dichas medidas\n **!info:** información general de Robotina"
        });
    }

    if (message === "!info") {
        bot.sendMessage({
            to: channelID,
            message: "```md\n#Robotina v0.1\n```\n Soy una robot hecha para el canal de FCC Montevideo. Me hicieron con un poco de ***discord.js***, otro poco de ***discord.io*** y vivo dentro de Heroku. \n\nPuedes encontrar mi repositorio en **GitHub**: https://github.com/sevgit/fcc-robotina."
                   
        });
    }

});



