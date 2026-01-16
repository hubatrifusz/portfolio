<script lang="ts" setup>
const props = defineProps<{
  isExiting: boolean;
}>();

const emit = defineEmits(["finished"]);

watch(
  () => props.isExiting,
  (newVal) => {
    setTimeout(() => {
        emit("finished");
    }, 500)
  }
);
</script>

<template>
  <div
    class="w-screen h-screen flex flex-row justify-center items-center gap-2 transition-all duration-500 ease-in-out"
    :class="{ 'gap-10': isExiting }"
  >
    <div
      v-for="i in 3"
      class="aspect-5/7 w-8 bg-secondary rounded-sm transition-all duration-500 ease-in-out"
      :class="{ 'w-56 rounded-xl': isExiting }"
    ></div>
  </div>
</template>
