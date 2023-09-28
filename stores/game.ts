import Cell from '@/types/Cell'

export const useGameStore = defineStore('game', () => {
  const target = ref('')
  const loading = ref(true)
  const maxTries = 6
  const index: Ref<number> = ref(0)
  const board: Ref<any[]>= ref([])

  const isWin = computed(() => {
    if (index.value > 0) {
      const row = board.value[index.value - 1]
      return row.filter((item: any) => item.status === 'MATCH').length === 5
    } else {
      return false
    }
  })

  const isLost = computed(() => index.value === maxTries && !isWin.value)

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

  const submit = function (word: string) {
    const response = validate(word, target.value)
    board.value[index.value] = response
    index.value++
  }

  const createRow: () => Cell[] = function () {
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

  function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const start = async function () {
    loading.value = true
    // const wordsList: string[] = await $fetch('https://challenge.trio.dev/api/v1/wordle-words')
    const wordsList =  ['WORLD', 'CATCH', 'HORSE']
    loading.value = false
    index.value = 0
    board.value.length = 0
    target.value = wordsList[randomIntFromInterval(0, wordsList.length - 1)]
    for (let i = 0; i < maxTries; i++) {
      board.value.push(createRow())
    }
  }

  start()

  return {
    target,
    maxTries,
    isWin,
    isLost,
    board,
    index,
    loading,
    start,
    submit
  }
})