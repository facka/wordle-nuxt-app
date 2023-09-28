<script lang="ts" setup>
import { computed } from 'vue'
import Cell from '@/types/Cell'

const props = defineProps<{
  value: Cell[],
}>();

const row = computed(() => props.value)
</script>

<template>
  <span v-for="(cell, cellIndex) in row" :key="cellIndex">
    <span class="inline-block rounded box-border h-[48px] w-[48px] m-1 border-2 text-center leading-[44px] text-[32px] bg-neutral-600 text-white" :class="{
      'nomatch': cell.status == 'NOMATCH',
      'match': cell.status == 'MATCH',
      'exists': cell.status === 'EXISTS'
      }">{{ cell.letter.toUpperCase() }}</span>
  </span>
</template>

<style scoped>

.match {
  background-color: rgb(29, 162, 29);
}

.nomatch {
  background-color: rgb(62, 62, 62);
}

.exists {
  background-color: rgb(208, 208, 53);
}
</style>
