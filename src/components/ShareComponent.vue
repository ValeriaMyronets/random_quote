<script setup>
import Telegram from '../icons/Telegram.svg';

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});

const shareToTelegram = () => {
  const url = `https://t.me/share/url?url=${encodeURIComponent(props.quote.content)}&text=${encodeURIComponent(props.quote.author)}`;
  window.open(url, "_blank");
};
</script>

<template>
  <Telegram @click="shareToTelegram()" />
</template>