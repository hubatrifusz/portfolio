<script lang="ts" setup>
const props = defineProps<{
  loaded: boolean;
}>();

const startAnimation = ref<boolean>(false);

watch(
  () => props.loaded,
  (newVal) => {
    if (newVal == true) {
      setTimeout(() => {
        startAnimation.value = true;
      }, 50);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="w-screen h-screen flex flex-row justify-center items-center gap-10"
  >
    <Logo
      class="absolute top-0 left-4 -translate-y-full transition-all duration-500"
      :class="{ 'translate-y-full': startAnimation }"
    ></Logo>
    <div v-for="i in 3" class="aspect-5/7 w-48 bg-white rounded-xl"></div>
  </div>
</template>
