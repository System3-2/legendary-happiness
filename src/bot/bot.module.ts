import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { DiscordModule } from '@discord-nestjs/core';

@Module({
  imports: [DiscordModule.forFeature()],
  providers: [BotService]
})
export class BotModule { }
