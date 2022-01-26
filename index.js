// Name 𝙿ᵃᵘ𝙻
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const dialogues = [
  ".",
  "Hilao Jake",
  "ki topic ta ki",
  "Hello awaj as6e",
  "Ki!!!",
  "Harami bote",
  "Mai pol hu pol, ku6 bhi kar sakta hu!",
  "Mu me lega",
  "cheap people",
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", gotMessage);

async function gotMessage(msg) {
  const user = msg.author.username;
  if (msg.channel.id === process.env.CHANNEL_ID) {
    if (msg.content === ".avatar") {
      let randomNumber = Math.floor(Math.random() * 100000);
      let url = `https://api.multiavatar.com/${randomNumber}.png?apikey=${process.env.AVATAR_API_KEY}`;
      // await axios.get(url).then((res) => {
      //   console.log(res);
      // })

      msg.channel.send(url);
    } else if (user !== "PauL") {
      let randomIndex = Math.floor(Math.random() * dialogues.length);
      msg.reply(`${dialogues[randomIndex]}`);
    }
  }
}

client.login(process.env.TOKEN);
