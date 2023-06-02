import { Injectable } from '@nestjs/common';
import { Once, InjectDiscordClient, On } from '@discord-nestjs/core';
import { Client, Events } from 'discord.js';
<<<<<<< HEAD
import { AiService } from 'src/ai/ai.service';
=======
<<<<<<< HEAD
import { AiService } from 'src/ai/ai.service';
=======
>>>>>>> 6cddd8f (discord initial setup)
>>>>>>> c021088

@Injectable()
export class BotService {
  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
<<<<<<< HEAD
    private aiService: AiService
=======
<<<<<<< HEAD
    private aiService: AiService
=======
>>>>>>> 6cddd8f (discord initial setup)
>>>>>>> c021088
  ) { }

  @Once('ready')
  onReady() {
    console.log(`Bot ${this.client.user.tag} was started!`);
  }

  @On(Events.MessageCreate)
  async sendMessage(message) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c021088
    if (message.content.substring(0, 1) === "!") {
      const prompt = message.content.substring(1); //remove the exclamation mark from the message
      const answer = await this.aiService.createCompletion(prompt) //prompt GPT-3
      if (answer) {
        message.reply(answer)
      }
      else {
        message.reply(`Something went wrong`)
      }
    }
<<<<<<< HEAD
=======
=======
    console.log(message.content)
>>>>>>> 6cddd8f (discord initial setup)
>>>>>>> c021088

  }
}
