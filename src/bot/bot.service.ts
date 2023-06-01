import { Injectable } from '@nestjs/common';
import { Once, InjectDiscordClient, On } from '@discord-nestjs/core';
import { Client, Events } from 'discord.js';
import { AiService } from 'src/ai/ai.service';

@Injectable()
export class BotService {
  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
    private aiService: AiService
  ) { }

  @Once('ready')
  onReady() {
    console.log(`Bot ${this.client.user.tag} was started!`);
  }

  @On(Events.MessageCreate)
  async sendMessage(message) {
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

  }
}
