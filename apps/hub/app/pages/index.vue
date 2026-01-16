<script lang="ts" setup>
import cardData from "~/data/hubCards.json";

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
    class="w-screen h-screen flex flex-row flex-wrap justify-center items-center gap-10 p-12"
  >
    <Logo
      class="fixed top-0 left-4 -translate-y-full transition-all duration-500"
      :class="{ 'translate-y-full': startAnimation }"
    ></Logo>
    <HubCard
      v-for="card in cardData"
      :image-url="card.imageUrl"
      :image-alt-name="card.imageAltName"
      :title="card.title"
      :description="card.description"
      :button-label="card.buttonLabel"
      :button-icon="card.buttonIcon"
      :loaded="startAnimation"
    ></HubCard>
  </div>
</template>
