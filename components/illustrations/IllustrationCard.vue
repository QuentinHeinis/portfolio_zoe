<script setup>
import { ref } from "vue";

defineProps({
  image: String,
  num: Number,
  titre: String,
  prix: String,
  lien: Array,
  id: String,
});

let show = ref(false);
</script>

<template>
  <div class="flex flex-col max-w-sm uppercase">
    <div class="text-textColor border-l-2 h-60 gap-12 flex justify-between relative">
      <div class="flex flex-col justify-between pl-4">
        <p class="text-2xl">
          {{ titre }}
        </p>
        <div class="h-32">
          <img :src="image" alt="" class="h-full w-full object-contain" />
        </div>
      </div>
      <div class="w-1/2">
        <p class="text-end">{{ smallDesc }}</p>
      </div>
    </div>
    <div class="max-w-lg py-3">

      <p>{{ prix }} €</p>
      <a :href="lien.url">Acheter</a>
    </div>
  </div>
</template>
