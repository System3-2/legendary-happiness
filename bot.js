require('dotenv').config(); //initialize dotenv
// const Discord = require('discord.js'); //import discord.js
//
// const client = new Discord.Client({
//   intents: [
//     Discord.GatewayIntentBits.Guilds,
//     Discord.GatewayIntentBits.GuildMessages,
//     Discord.GatewayIntentBits.MessageContent
//   ]
// })
//
// const { ask } = require('./ai')
//
// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });
//
// // client.on("message", async (message) => {
// //   console.log(message)
// //   if (message.content.substring(0, 1) === "!") {
// //     const prompt = message.content.substring(1); //remove the exclamation mark from the message
// //     const answer = await ask(prompt); //prompt GPT-3
// //     message.channel.send(answer); //reply to Discord with answer from GPT-3
// //   }
// // });
// client.on('message', async (message) => {
//   console.log(message)
//   console.log(message.content)
// })
// // //make sure this line is the last line
// client.login(process.env.token); //login bot using token


const { Client, Events, GatewayIntentBits } = require('discord.js'); //v14.6.0
const token = process.env.token;
const { ask } = require('./ai')

// Create a new client instance
const client = new Client({
  intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent]
});

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async message => {
  console.log(message.content.substring(1))
  if (message.content.substring(0, 1) === "!") {
    const prompt = message.content.substring(1); //remove the exclamation mark from the message
    const answer = await ask(prompt); //prompt GPT-3
    // console.log(answer)
    // client.channels.fetch(message.channelId).then(channel => channel.send(answer));
    if (answer) {
      message.reply(answer)
    }
    else {

      message.reply('Sorry i can\'t respond to that')
    }
  }
});

// Log in to Discord with your client's token
client.login(token);
