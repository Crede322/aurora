<template>
  <ClientOnly>
    <div class="comparison">
      <h3 class="text-[var(--color-textgray)] text-[18px] mb-10">{{ textMain }}</h3>
      <VueCompareImage :left-image="leftImage" :right-image="rightImage" :hover="hover" @is-sliding="slideCallback" @slide-start="startCallback" @slide-end="endCallback"/>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { VueCompareImage } from 'vue3-compare-image';


const props = defineProps({
  textMain: String,
  leftImage: {
    type: String,
    required: true,
  },
  rightImage: {
    type: String,
    required: true,
  },
});

const hover = ref(true)
const sliding = ref(false)

function startCallback(pos: number) {
  console.log('sliding started at ', pos)
}

function endCallback(pos: number) {
  console.log(`sliding has ended at: ${pos}`)
}

function slideCallback(state: boolean) {
  sliding.value = state
}
</script>
<style scoped>
.comparison {
  position: relative;
}

.comparison::before {
  content: "До";
  position: absolute;
  left: 0;
  top: 40px;
}

.comparison::after {
  content: "Після";
  position: absolute;
  right: 0;
  top: 40px;
}
</style>
