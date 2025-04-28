<>
<template>
  <div class="flex flex-col items-center justify-center py-10">
    <div
      class="animate-pulse text-2xl font-bold mb-6"
      style="color: var(--color-secondary)"
    >
      Opretter konto...
    </div>

    <div
      class="loader border-t-4 border-[var(--color-secondary)] border-solid rounded-full w-12 h-12 animate-spin"
    ></div>
  </div>
</template>

<style scoped>
.loader {
  border-width: 4px;
  border-color: white;
  border-top-color: var(--color-secondary);
  border-radius: 9999px; /* Full circle */
}
</style>
