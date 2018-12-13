const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[!Mystik] <🔱 𝓢𝓟𝓨 🔱>', type: 0}})
    console.log("Bot pret");
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur MystikRP !' + member.displayName)
    }).catch(console.error)
});
    
    bot.on('message', message => {
        if (message.content === "!mention"){
            message.reply("")
        }
    
        if (message.content === prefix+ "Mystik"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Liste des commandes :"," Voici les commandes du Bot !")
                .addField("!mention", "Cette commande permet de savoir son nom discord en se mentionnant.")
                .addField("!infos", "Cette commande permet de vous informer sur le serveur.")
                .addField("!staff", "Cette commande est utile si vous avez besoins de parler a un staff d'un certain grade , elle permet d'afficher la liste des staff de MystikRP ainsi que leur grade.")
            message.channel.sendEmbed(help_embed);
        }
    
        if (message.content === prefix+ "infos"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Informations :","MystikRP est un serveur Rôleplay qui est composé d'un map personnalisé crée par Pelisma (Mappeur de MystikRP), MystikRP contient parfois ses propres addons !")
                .addField("Nom du serveur :", "[FR] MYSTIK ROLEPLAY | Map & Addons exclus | LoloxCommunity.com")
                .addField("IP :", "164.132.116.56:27260")
                .addField("Gamemode :", "DarkRP")
                .addField("Site Web :", "https://loloxcommunity.com/")
            message.channel.sendEmbed(help_embed);
        }
    
        if (message.content === prefix+ "staff"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Staff du serveur :"," MystikRP")
                .addField("Fondateur", "Lolox")
                .addField("Mappeur", "Pelisma")
                .addField("Superadmins", "Shadow\n Kobralost\n Stylaxx")
                .addField("Administrateurs", "Skyflix\n Alex Backo\n El Famoso Marvino\n 🔱 𝓢𝓟𝓨 🔱\n ChickenNuggets (Hoie)\n A Fromage de chevre\n Petit enfant arrogant")
            message.channel.sendEmbed(help_embed);
        }
    
    });

bot.login(token);


