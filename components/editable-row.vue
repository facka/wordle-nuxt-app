<script lang="ts" setup>

const userInput: Ref<string> = ref('')
const inputHTMLElement: Ref<HTMLInputElement | null>= ref(null)

const emit = defineEmits<{
  "submit": [value: string];
}>();

function onSubmit(newValue: string) {
  emit("submit", newValue);
}

function handleEnter() {
  if (userInput.value.length === 5) {
    onSubmit(userInput.value)
  }
}

const focusInput = () => {
  inputHTMLElement.value?.focus()
}

onMounted(() => {
  focusInput()
})
</script>

<template>
  <input ref="inputHTMLElement" v-model="userInput" :maxlength="5" v-show="true"
    class="h-[0px] w-[0px] absolute"
    @keypress.enter="handleEnter"/>
  <div class="inline-flex" @click="focusInput()">
    <span v-for="index in 5"
      key="index"
      class="inline-block rounded box-border h-[48px] w-[48px] m-1 border-2 text-center leading-[44px] text-[32px] bg-white text-black">
      {{ userInput[index - 1] ? userInput[index - 1].toUpperCase() : ' ' }}
    </span>
  </div>
</template>

<style scoped></style>
