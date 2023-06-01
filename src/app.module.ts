import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from '@discord-nestjs/core';
import { OpenAIModule } from '@platohq/nestjs-openai';
import { GatewayIntentBits } from 'discord.js';
import { BotModule } from './bot/bot.module';
import { AiService } from './ai/ai.service';
import { AiModule } from './ai/ai.module';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: process.env.token,
        discordClientOptions: {
          intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent
          ],
        },
      }),
    }),
    OpenAIModule.register({
      apiKey: process.env.api_key,
    }),
    BotModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService, AiService],
})
export class AppModule { }
