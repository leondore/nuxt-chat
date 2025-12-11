import { MOCK_CHAT } from '~/data/mockData';

export function useChat() {
  const chat = ref<Chat>(MOCK_CHAT);
  const messages = computed<ChatMessage[]>(() => chat.value.messages);

  function createMessage(message: string, role: ChatMessage['role']) {
    const id = (messages.value.length + 1).toString();

    return { id, role, content: message };
  }

  async function sendMessage(message: string) {
    const chatMessage = createMessage(message, 'user');
    chat.value.messages.push(chatMessage);

    const data = await $fetch<ChatMessage>('/api/ai', {
      method: 'POST',
      body: {
        messages: messages.value,
      },
    });

    chat.value.messages.push(data);
  }

  return {
    chat,
    messages,
    sendMessage,
  };
}
