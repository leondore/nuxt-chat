import type { LanguageModel, ModelMessage } from 'ai';
import type { OpenAIChatModelId } from '@ai-sdk/openai/internal';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

export const model = createOpenAIModel();

export async function generateChatResponse(model: LanguageModel, messages: ModelMessage[]) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('invalid messages format');
  }

  const response = await generateText({
    model,
    messages,
  });

  return response.text.trim();
}

function createOpenAIModel(model: OpenAIChatModelId = 'gpt-5-nano') {
  const apiKey = useRuntimeConfig().openaiApiKey;
  const openai = createOpenAI({
    apiKey,
  });

  return openai(model);
}
