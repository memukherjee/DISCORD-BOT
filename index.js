// Name 𝙿ᵃᵘ𝙻
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});
const { token } = require("./config.json");

const dialogues = [
  ".",
  "Hilao Jake",
  "ki topic ta ki",
  "Hello awaj as6e",
  "Ki!!!",
  "Harami bote",
  "Mai pol hu pol, ku6 bhi kar sakta hu!",
  "Mu me lega",
  "cheap people"
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (msg) => {
  const user = msg.author.username;
  if(user!=='PauL' && msg.channel.id==='848827307258675210'){
    let randomIndex = Math.floor(Math.random() * dialogues.length);
    msg.reply(`${dialogues[randomIndex]}`);
  }
});

client.login(token);
