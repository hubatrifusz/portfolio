<script lang="ts" setup>
const nuxtApp = useNuxtApp();

type Loading = "loading" | "exiting" | "finished";
const loadingStatus = ref<Loading>("loading");

nuxtApp.hook("app:suspense:resolve", () => {
  setTimeout(() => {
    loadingStatus.value = "exiting";
  }, 1000);
});

function onAnimationComplete() {
  loadingStatus.value = "finished";
}
</script>

<template>
  <UApp>
    <Loading
      v-if="loadingStatus !== 'finished'"
      :is-exiting="loadingStatus === 'exiting'"
      @finished="onAnimationComplete"
    />
    <div v-show="loadingStatus === 'finished'">
      <NuxtLayout>
        <NuxtPage :loaded="loadingStatus === 'finished'" />
      </NuxtLayout>
    </div>
  </UApp>
</template>
