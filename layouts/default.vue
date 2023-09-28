<script lang="ts" setup></script>

<template>
  <section class="text-center">
    <div class="flex justify-center">
      <div class="max-w-[800px]">
        <h2 class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Wordle
        </h2>
      </div>
    </div>
  </section>
  <slot/>
  <div
    class="fixed bottom-0 w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    by 
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://github.com/facka"
      >Facundo Crego</a
    >
  </div>
</template>

<style scoped></style>
