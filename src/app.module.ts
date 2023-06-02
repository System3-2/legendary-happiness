import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordModule } from '@discord-nestjs/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c021088
import { OpenAIModule } from '@platohq/nestjs-openai';
import { GatewayIntentBits } from 'discord.js';
import { BotModule } from './bot/bot.module';
import { AiService } from './ai/ai.service';
import { AiModule } from './ai/ai.module';
<<<<<<< HEAD
=======
=======
import { GatewayIntentBits } from 'discord.js';
import { BotModule } from './bot/bot.module';
>>>>>>> 6cddd8f (discord initial setup)
>>>>>>> c021088
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c021088
    OpenAIModule.register({
      apiKey: process.env.api_key,
    }),
    BotModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService, AiService],
<<<<<<< HEAD
=======
=======
    BotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 6cddd8f (discord initial setup)
>>>>>>> c021088
})
export class AppModule { }
