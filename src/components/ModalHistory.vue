<script setup>
import { defineProps, defineEmits } from 'vue';
import CopyComponent from './CopyComponent.vue';
import ShareComponent from './ShareComponent.vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits();
const quotesHistory = JSON.parse(localStorage.getItem('quotes'));

const closeModal = () => {
  emit('close');
};

const clearHistory = () => {
  localStorage.removeItem('quotes');
  emit('close');
};

</script>


<template>
  <div v-if="isVisible" class="modal-history">
    <div class="modal-container">
      <h2 class="modal-name">History of Quote:</h2>

      <p v-if="!quotesHistory || quotesHistory.length === 0" class="no-quotes">No quotes yet.</p>
      <div v-else>
        <ul class="quotes-list">
          <li v-for="item in quotesHistory" :key="item._id" class="quote-content">
            <div class="quote">
              "{{ item.content }}" - {{ item.author }}
            </div>

            <div class="copy-share">
              <CopyComponent :quote="item" />
              <ShareComponent :quote="item" />
            </div>
          </li>
        </ul>
      </div>

      <button @click="closeModal">Close</button>
      <button v-if="quotesHistory && quotesHistory.length > 0" @click="clearHistory">Clear history</button>

    </div>
  </div>
</template>


<style scoped>
.modal-history {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background-color: rgb(240, 220, 180);
  width: 80%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  color: rgb(131, 91, 57);
}

.modal-name {
  margin: 0;
}

.no-quotes {
  font-weight: bold;
  text-align: center;
}

.quotes-list {
  max-height: 200px;
  overflow-y: auto;
  padding: 14px 20px;
  margin: 0;
  scrollbar-color: rgb(131, 91, 57) rgba(230, 200, 160, 0.7);
}

.quote-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
}

.quote-content::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 10px;
  width: 8px;
  height: 8px;
  background-color: rgb(131, 91, 57);
  border-radius: 50%;
}

.quote {
  margin-left: 5px;
  display: flex;
  align-items: center;
}

.copy-share {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
</style>