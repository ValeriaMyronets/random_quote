<script setup>
import Copy from '../icons/Copy.svg';
import { toast } from 'vue3-toastify';

const props = defineProps({
  quote: {
    type: Object,
    required: true,
  },
});


const toastOptions = {
  position: 'bottom-right',
  toastStyle: {
    background: 'rgba(230, 200, 160, 0.7)',
    color: 'rgb(131, 91, 57)',
  },
  progressStyle: {
    background: 'rgb(131, 91, 57)',
  },
};

const copyQuote = async () => {
  try {
    await navigator.clipboard.writeText(`"${props.quote.content}" - ${props.quote.author}`);
    toast.success('Quote copied!', toastOptions);
  } catch (err) {
    toast.error('Failed to copy quote.', toastOptions);
    console.error(err);
  }
};
</script>

<template>
  <Copy @click="copyQuote()" />
</template>