<script setup>
import { ref } from "vue";

defineProps({
  image: String,
  num: Number,
  titre: String,
  prix: String,
  lien: Object,
  id: String,
});

let show = ref(false);
</script>

<template>
  <div class="flex flex-col max-w-sm uppercase">
    <div class="text-textColor border-l-2 min-h-64 md:min-h-80 h-max gap-12 flex justify-between relative">
      <div class="flex flex-col justify-between pl-4">
        <p class="text-2xl">
          {{ titre }}
        </p>
        <div class="max-h-64 h-full max-w-3xs md:max-w-xs min-w-64 aspect-video">
          <img :src="image" alt="" class="h-full w-full object-contain object-bottom-left" />
        </div>
      </div>
      <div class="w-1/2">
        <p class="text-end">{{ prix }}</p>
      </div>
    </div>
    <div class="max-w-lg py-3">

      <p v-if="prix">{{ prix }} €</p>
      <a v-if="lien.url" :href="lien.url">Acheter</a>
    </div>
  </div>
</template>
