<script lang="ts" setup>
const props = defineProps<{
  imageUrl: string;
  imageAltName: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: string;
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
    class="aspect-5/7 w-56 rounded-xl bg-secondary overflow-hidden flex flex-col"
    id="container"
  >
    <div
      class="grow bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out bg-black/20 bg-blend-overlay"
      :style="{ backgroundImage: `url('${imageUrl}')` }"
      :class="startAnimation ? 'translate-y-0' : '-translate-y-full'"
    ></div>
    <div
      class="p-3 transition-all duration-500 ease-in-out"
      :class="startAnimation ? 'translate-y-0' : 'translate-y-full'"
    >
      <div>
        <h1 class="text-main font-bold text-lg">{{ title }}</h1>
        <p class="text-xs text-gray-700">{{ description }}</p>
      </div>
      <UButton
        :label="buttonLabel"
        :icon="buttonIcon"
        size="sm"
        class="cursor-pointer mt-4"
      ></UButton>
    </div>
  </div>
</template>
