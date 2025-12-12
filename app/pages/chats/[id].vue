<template>
  <ChatWindow :chat :messages :typing @send-message="handleSendMessage" />
</template>

<script setup lang="ts">
const route = useRoute();
const { chat, messages, sendMessage } = useChat(String(route.params.id));

const typing = ref(false);

async function handleSendMessage(message: string) {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
}

const appConfig = useAppConfig();
const title = computed(() =>
  chat.value?.title ? `${chat.value.title} - ${appConfig.title}` : appConfig.title
);

useHead({
  title,
});
</script>
