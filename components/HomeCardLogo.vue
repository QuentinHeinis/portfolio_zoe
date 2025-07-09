<script setup>
import { ref } from "vue";

defineProps({
  image: String,
  num: Number,
  smallDesc: String,
  largeDesc: Array,
  id: String,
});

let show = ref(false);
</script>

<template>
  <div class="flex flex-col max-w-sm uppercase">
    <div
      class="text-white border-l-2 h-60 gap-12 flex justify-between relative"
    >
      <div class="flex flex-col justify-between pl-4">
        <p class="text-2xl">
          {{ num.toString().padStart(2, "0") }}
        </p>
        <div class="h-32">
          <img :src="image" alt="" class="h-full w-full object-contain" />
        </div>
      </div>
      <div class="w-1/2">
        <p class="text-end">{{ smallDesc }}</p>
      </div>
      <div
        class="absolute top-[90%] right-0 text-2xl w-8 text-center cursor-pointer"
        @click="show = !show"
        v-if="!show"
      >
        +
      </div>
      <div
        class="absolute top-[90%] right-0 text-2xl w-8 text-center cursor-pointer"
        @click="show = !show"
        v-if="show"
      >
        -
      </div>
    </div>
    <div v-if="show" class="max-w-lg py-3 border-b-2">
      <p v-for="(text, index) in largeDesc" :key="index">
        {{ text.text }}
      </p>
    </div>
  </div>
</template>
