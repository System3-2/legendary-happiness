import { Injectable } from '@nestjs/common';
import { OpenAIClient } from '@platohq/nestjs-openai';

@Injectable()
export class AiService {
  constructor(private readonly ai: OpenAIClient) { }

  async createCompletion(prompt: string) {
    const data = await this.ai.createCompletion({
      model: 'text-davinci-002',
      max_tokens: 1000,
      temperature: 0.8,
      prompt,
    })

    const answer = data.data.choices[0].text;
    return answer;

  }
}
