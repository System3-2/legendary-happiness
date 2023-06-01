import { Injectable } from '@nestjs/common';
import { Once, InjectDiscordClient, On } from '@discord-nestjs/core';
import { Client, Events } from 'discord.js';

@Injectable()
export class BotService {
  constructor(
    @InjectDiscordClient()
    private readonly client: Client,
  ) { }

  @Once('ready')
  onReady() {
    console.log(`Bot ${this.client.user.tag} was started!`);
  }

  @On(Events.MessageCreate)
  async sendMessage(message) {
    console.log(message.content)

  }
}
