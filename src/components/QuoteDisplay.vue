<script setup>
import { ref, onMounted } from 'vue';
import { fetchQuote } from '../services/QuoteService';
import Loader from './Loader.vue';

import CopyComponent from './CopyComponent.vue';
import ShareComponent from './ShareComponent.vue';

const quote = ref({});
const error = ref(null);
const isLoading = ref(false);

const generateNewQuote = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const newQuote = await fetchQuote();
    quote.value = newQuote;

    const quotesHistory = JSON.parse(localStorage.getItem('quotes')) || [];
    quotesHistory.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotesHistory));
  } catch (err) {
    error.value = 'Failed to load quote. Try again.';
  }
  isLoading.value = false;
};

onMounted(generateNewQuote);
</script>

<template>
  <div class="quote-container">
    <p v-if="error" class="error">{{ error }}</p>

    <div class="quote_content">
      <Loader v-if="isLoading" />

      <div v-else>
        <div class="quote">
          <p class="quote-text">{{ quote.content }}</p>
          <p class="quote-author">- {{ quote.author }}</p>
        </div>

        <div class="copy-share">
          <CopyComponent :quote="quote" />
          <ShareComponent :quote="quote" />
        </div>
      </div>

    </div>

    <button @click="generateNewQuote">New Quote</button>
  </div>
</template>

<style scoped>
.quote-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.quote_content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  margin: 20px;
  border: 1px solid rgba(230, 200, 160, 0.7);
  border-radius: 10px;
  position: relative;
  min-height: 150px;
  gap: 40px;
}

.quote {
  text-align: center;
  max-width: 600px;
}

.copy-share {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.quote-text {
  font-size: 1.5em;
  color: rgb(131, 91, 57);
  margin-bottom: 10px;
}

.quote-author {
  font-style: italic;
  color: gray;
  margin-bottom: 20px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
