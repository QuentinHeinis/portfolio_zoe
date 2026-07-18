<script setup>
import { onBeforeUnmount, ref, watch } from "vue";

defineProps({
  image: String,
  num: Number,
  titre: String,
  prix: String,
  lien: Object,
  id: String,
});

const show = ref(false);

const close = () => {
  show.value = false;
};

const onKeydown = (event) => {
  if (event.key === "Escape") {
    close();
  }
};

watch(show, (isOpen) => {
  if (!import.meta.client) {
    return;
  }

  document.body.classList.toggle("overflow-hidden", isOpen);

  if (isOpen) {
    window.addEventListener("keydown", onKeydown);
  } else {
    window.removeEventListener("keydown", onKeydown);
  }
});

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return;
  }

  document.body.classList.remove("overflow-hidden");
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <div class="flex flex-col max-w-sm uppercase">
    <div class="text-textColor border-l-2 min-h-64 md:min-h-80 h-max gap-12 flex justify-between relative">
      <div class="flex flex-col justify-between pl-4">
        <p class="text-2xl">
          {{ titre }}
        </p>
        <div class="max-h-64 h-full max-w-3xs md:max-w-xs min-w-64 aspect-video">
          <button type="button" class="block h-full w-full cursor-zoom-in" :aria-label="`Agrandir ${titre}`"
            @click="show = true">
            <img :src="image" :alt="titre" class="h-full w-full object-contain object-bottom-left" />
          </button>
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

    <Teleport to="body">
      <div v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-bgColor/95 p-4 md:p-10 backdrop-blur-sm"
        role="dialog" aria-modal="true" :aria-label="titre" @click.self="close">
        <button type="button"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-textColor text-2xl leading-none text-textColor md:right-8 md:top-8"
          aria-label="Fermer" @click="close">
          ×
        </button>
        <img :src="image" :alt="titre" class="max-h-[90vh] max-w-[95vw] object-contain" />
      </div>
    </Teleport>
  </div>
</template>
