const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
var prefix = ("!");
const low= require ('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter);

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[!Mystik] <🔱 𝓢𝓟𝓨 🔱>', type: 0}})
    console.log("Bot pret");
});
    
        if (message.content === prefix+ "Mystik"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#B9121B')
                .addField("Liste des commandes :"," Voici les commandes du Bot !")
                .addField("!mention", "Cette commande permet de savoir son nom discord en se mentionnant.")
                .addField("!infos", "Cette commande permet de vous informer sur le serveur.")
                .addField("!staff", "Cette commande est utile si vous avez besoins de parler a un staff d'un certain grade , elle permet d'afficher la liste des staff de MystikRP ainsi que leur grade.")
                .addField("!maj", "Cette commande permet de voir les mises à jours prévus ou déjâ faites sur MystikRP !")
            message.channel.sendEmbed(help_embed);
        }

        if (message.content === prefix+ "infos"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Informations :","MystikRP est un serveur Rôleplay qui est composé d'un map personnalisé crée par Pelisma (Mappeur de MystikRP), MystikRP contient parfois ses propres addons !")
                .addField("Nom du serveur :", "[FR] MYSTIK ROLEPLAY | Map & Addons exclus | LoloxCommunity.com")
                .addField("IP :", "164.132.116.56:27260")
                .addField("Gamemode :", "DarkRP")
                .addField("Map : rp_florida_v2")
                .addField("Site Web :", "https://loloxcommunity.com/")
            message.channel.sendEmbed(help_embed);
        }
 
        if (message.content === prefix+ "maj"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Mises à jours au total :"," **3**")
                .addField("2.2", "**-Optimisation des addons + ajout d'une préconfig pour améliorer la fluidité et réduire la perte d'fps**\n **-Remise en fonction du métier entrepreneur**\n **-Modification des grades de gendarmes**\n **-Modification des skins de différent jobs**\n **-Debug de plusieurs addons**\n **-Debug du ban plus importation des règles en jeu**\n **-Amélioration des performance du serveur**\n **-Ajout de munition directement dans les armes du serveur en tant qu'agent de la bac policier , gign etc ....**\n **-Modification de certains véhicules**\n **-Debug de l'addon maire**\n **-Ajout du métier fermier + pêcheur**")
                .addField("2.3", "**-Optimisation des addons + Boost FPS**\n **-Nerf de certains métier**\n **-Modification des grades de gendarmes**\n **-Modification de la map**\n **-Modification du systeme de vente d'appartement**\n **-Amélioration des performance du serveur**\n **-Debug de l'addon maire**\n **-Ajout du métier fermier (Animaux demain)**\n **-Ajout d'un nouveau systeme pénitencier (SOON)**")
                .addField("2.4 (Future MAJ)", "**-Modification des véhicules possédant des sirènes + ajout du VCMOD ELS**\n **-Ajout des plaques d'immatriculation**\n **-Ajout des Animaux (Normalement)**\n **-Ajout dans les warn des sanctions déjà crée** \n **-Optimisation du Worshop** \n **-Optimisation du join au serveur** \n **-Optimisation des Addons** \n **-Stabilisation du serveur**\n **-Suppression du Nom Roleplay + de la vie + Changement de métier**\n **-Traduction du Darkrp** \n **-Ajout de deux nouveaux métiers mystère !**\n **-Réglages de certains beugs** \n **-Ajout de munitions lors du spawn en gendarme ou autres métiers** \n **-Ajout de nouveaux grades pour la police , gign**\n **-Ajout de grades pour l'agent de sécurité** \n **-Ajout de grades pour le Pompier**\n **-Ajout de grades pour le Médecin **")
            message.channel.sendEmbed(help_embed);
        }        

        if (message.content === prefix+ "staff"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#AEEE00')
                .addField("Staff du serveur :"," MystikRP")
                .addField("Fondateur", "Lolox")
                .addField("Mappeur", "Pelisma")
                .addField("Superadmins", "Kobralost\n Stylaxx")
                .addField("Administrateurs", "Skyflix\n Alex Backo\n El Famoso Marvino\n 🔱 𝓢𝓟𝓨 🔱\n ChickenNuggets (Hoie)\n A Fromage de chevre\n Petit enfant arrogant")
            message.channel.sendEmbed(help_embed);
        }
    
        bot.on('message', message => {
            if (message.content === "!mention"){
                message.reply("")
            }
    });

    bot.login(token);
