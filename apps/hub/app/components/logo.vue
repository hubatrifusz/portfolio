<script lang="ts" setup>
import menuItems from "@/data/logoMenuItems.json";

// type MenuItem = {
//   id: number;
//   icon: string;
//   label: string;
//   options?: Array<{ label: string; icon: string }>;
// };

const isMenuActive = ref(false);
</script>

<template>
  <div
    class="group flex flex-row justify-between gap-1 p-1 hover:gap-4 transition-all"
    :class="{ 'gap-4': isMenuActive }"
  >
    <UTooltip
      v-for="item in menuItems"
      :key="item.id"
      :text="item.label"
      :content="{ align: 'center', side: 'bottom', sideOffset: 10 }"
      arrow
    >
      <div
        class="grain relative overflow-hidden flex justify-center items-center aspect-5/7 w-3 bg-secondary hover:bg-secondary/80 transition-all group-hover:w-7 group-hover:aspect-square group-hover:cursor-pointer group-hover:rounded-md duration-300"
        :class="{
          'rounded-xs': !isMenuActive,
          'w-7 aspect-square rounded-md': isMenuActive,
        }"
      >
        <UDropdownMenu
          v-if="item.label != 'Settings'"
          :items="item.options"
          @update:open="(val) => (isMenuActive = val)"
        >
          <div
            class="flex w-full h-full justify-center items-center relative z-10"
          >
            <UIcon
              :name="item.icon"
              class="opacity-0 transition-all duration-300 text-main group-hover:opacity-100"
              :class="{ 'opacity-100': isMenuActive }"
            />
          </div>
        </UDropdownMenu>

        <UModal
          v-if="item.label === 'Settings'"
          title="Settings"
          @update:open="(val) => (isMenuActive = val)"
        >
          <div
            class="flex w-full h-full justify-center items-center relative z-10"
          >
            <UIcon
              :name="item.icon"
              class="opacity-0 transition-all duration-300 text-main group-hover:opacity-100"
              :class="{ 'opacity-100': isMenuActive }"
            />
          </div>
          <template #body> Settings Modal Content </template>
        </UModal>
      </div>
    </UTooltip>
  </div>
</template>
