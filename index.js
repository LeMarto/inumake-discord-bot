require('dotenv').config();

if(process.env.DISCORD_APP_ID == undefined){
    console.log('Env var DISCORD_APP_ID should be set!');
    return;
} 

if(process.env.DISCORD_BOT_TOKEN == undefined){
    console.log('Env var DISCORD_BOT_TOKEN should be set!');
    return;
} 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log('Link to make Inumake join a discord server: https://discordapp.com/oauth2/authorize?&client_id=%s&scope=bot&permissions=8', process.env.DISCORD_APP_ID);

const Discord = require("discord.js");
const client = new Discord.Client({"intents": ["GUILDS", "GUILD_MESSAGES"]});
const words = ['Shake (salmon)', 'Okaka (dried bonito)', 'Tsunamayo (tuna and mayonnaise)', 'Tsuna (tuna)', 'Takana (leaf mustard)', 'Mentaiko (spicy cod roe)', 'Konbu (seaweed)', 'Ikura (salmon caviar)', 'Sujiko (salmon roe)' ];

const prefix = "!";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on("messageCreate", function(message) {
  
    if (message.author.bot) return;
    
    let response = words[getRandomInt(words.length)];
    if (getRandomInt(4) < 2) message.reply(response);
    
});

client.login(process.env.DISCORD_BOT_TOKEN);