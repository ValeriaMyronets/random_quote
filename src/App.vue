<script setup>
import { ref } from 'vue';
import QuoteDisplay from './components/QuoteDisplay.vue';
import ModalHistory from './components/ModalHistory.vue';

const isModalHistoryOpen = ref(false);

const openModalHistory = () => {
  isModalHistoryOpen.value = true;
};
</script>


<template>
  <div class="container">
    <div class="header">
      <div class="name">Random quotes</div>
      <button @click="openModalHistory">History</button>
    </div>
    <QuoteDisplay />

    <ModalHistory 
      v-if="isModalHistoryOpen" 
      :isVisible="isModalHistoryOpen" 
      @close="isModalHistoryOpen = false" 
    />
  </div>
</template>


<style scoped>
.container {
  padding: 10px;
}

.name {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  color: rgb(131, 91, 57);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 8px;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: rgba(230, 200, 160, 0.7);
}
</style>
