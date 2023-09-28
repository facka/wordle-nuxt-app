<script lang="ts" setup>
import Row from '@/components/row.vue'
import EditableRow from '@/components/editable-row.vue'
import { useGameStore } from '@/stores/game'

const game = useGameStore()
console.log({game})
const board = computed(() => game.board)
const index = computed(() => game.index)
const isWin = computed(() => game.isWin)
const isLost = computed(() => game.isLost)
const loading = computed(() => game.loading)
const { submit, start } = game
</script>

<template>
  <div class="text-center">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <div v-for="(row, rowIndex) in board" :key="rowIndex">
        <EditableRow v-if="rowIndex === index && !isWin"
          @submit="submit">
        </EditableRow>
        <Row v-else
          :value="row"></Row>
      </div>
      <br/>
      <div v-if="index == 0" class="mb-4">Start typing to guess the word. Hit Enter to submit.</div>
      <div v-if="isWin">
        <h3 class="text-3xl">🥳 Congratulations! You did it in {{ index }} tries</h3>
        <button 
          class="inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary"
          @click="start">Play Again</button>
      </div>
      <div v-if="isLost">
        <h3 class="text-3xl">😧 You lost!</h3>
        <button
          type="button"
          class="inline-block rounded border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary"
          @click="start">
          Try again with another word
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
