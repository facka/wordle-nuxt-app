<script lang="ts" setup>
import axios from 'axios'
import {ref, Ref, computed} from 'vue'

const target = ref('')
const userInput = ref('')
const maxTries = 6
const index: Ref<number> = ref(0)

const createRow = function () {
  return [{
    letter: '',
    status: 'EMPTY'
  },{
    letter: '',
    status: 'EMPTY'
  },{
    letter: '',
    status: 'EMPTY'
  },{
    letter: '',
    status: 'EMPTY'
  },{
    letter: '',
    status: 'EMPTY'
  }]
}

const board: Ref<any[]>= ref([])

const response = await axios.get('https://challenge.trio.dev/api/v1/wordle-words')
const wordsList = response.data

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const start = function () {
  index.value = 0
  target.value = wordsList[randomIntFromInterval(0, wordsList.length - 1)]
  for (let i = 0; i < maxTries; i++) {
    board.value.push(createRow())
  }
}

start()

const isWin = computed(() => {
  if (index.value > 0) {
    const row = board.value[index.value - 1]
    console.log('isWin: ', row.filter((item: any) => item.status === 'MATCH'))
    return row.filter((item: any) => item.status === 'MATCH').length === 5
  } else {
    return false
  }
})

const validate = function (word: string, target: string) {

  const response = createRow()

  for (let i = 0; i < word.length; i++) {
    response[i].letter = word[i]
    const normalizedWord = word.toUpperCase()
    const normalizedTarget = target.toUpperCase()
    if (normalizedWord[i] === normalizedTarget[i]) {
      response[i].status = 'MATCH'
    } else if (normalizedTarget.includes(normalizedWord[i])) {
      response[i].status = 'EXISTS'
    } else {
      response[i].status = 'NOMATCH'
    }
  }
  return response
}

const submit = function () {
  const response = validate(userInput.value, target.value)
  board.value[index.value] = response
  userInput.value = ''
  index.value++
}


console.log('Target: ', target.value)

</script>

<template>
  <div>
    
    <div v-for="(row, rowIndex) in board" :key="rowIndex">
      <div v-if="rowIndex === index && !isWin">
        <input v-model="userInput"/>
        <button @click="submit" :disabled="userInput.length != 5">Submit</button>
      </div>
      <div v-else>
        <span v-for="(cell, cellIndex) in row" :key="cellIndex">
          <span class="cell" :class="{
            'nomatch': cell.status == 'NOMATCH',
            'match': cell.status == 'MATCH',
            'exists': cell.status === 'EXISTS'
            }">{{ cell.letter }}</span>
        </span>
      </div>
    </div>
    <div v-if="isWin">Congratulations! You did it in {{ index }} tries</div>
  </div>
</template>

<style scoped>

.cell {
  border: 2px solid grey;
  width: 32px;
  height: 32px;
  display: inline-grid;
  text-align: center;
  font-size: 26px;
  color: white;
  margin: 2px;
}

.match {
  background-color: green;
}

.nomatch {
  background-color: rgb(62, 62, 62);
}

.exists {
  background-color: yellow;
}

</style>
