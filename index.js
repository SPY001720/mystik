const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
var prefix = ("!");
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
    
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
                .addField("Administrateurs", "Skyflix\n Alex Backo\n El Famoso Marvino\n 🔱 𝓢𝓟𝓨 🔱\n ChickenNuggets (Hoie)\n A Fromage de chevre")
            message.channel.sendEmbed(help_embed);
        }
    
    });

bot.login(token);


