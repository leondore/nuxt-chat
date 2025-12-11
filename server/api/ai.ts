import { model, generateChatResponse } from '../services/aiService';

export default defineEventHandler(async event => {
  const body = await readBody<{ messages: ChatMessage[] }>(event);
  const { messages } = body;

  const id = (messages.length + 1).toString();

  const response = await generateChatResponse(model, messages);

  return {
    id,
    role: 'assistant',
    content: response,
  };
});
