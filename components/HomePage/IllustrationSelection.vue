<script setup>
defineProps({
  selectedIllustrations: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="pb-10 mb-10 px-9 relative overflow-hidden">
    <h2 class="text-5xl md:text-9xl pt-2 lg:text-[10rem] uppercase leading-none flex flex-col">
      <span data-aos="fade-right" data-aos-duration="2000" class="lg:-mt-7">Illustrations</span>
      <span data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000">Sélectionné</span>
    </h2>
    <div class="flex flex-col items-end w-4/5 ml-auto mt-4">
      <div class="w-1/2">
        <p class="text-xs md:text-base" data-aos="fade-left" data-aos-delay="200" data-aos-duration="2000">
          En plus des projets construits que j'exécute, je crée également
          d'autres designs en utilisant Adobe Illustrator pour montrer les idées
          et concepts d'une entreprise, d'un individu, ou en tant qu'extension
          de projets.
        </p>
        <div class="flex items-center gap-4 mt-4">
          <img src="/Flower.svg" alt="" class="h-8 brightness-0" data-aos="fade-left" data-aos-delay="400"
            data-aos-duration="2000" />
          <img src="/sun.svg" alt="" class="h-8 brightness-0" data-aos="fade-left" data-aos-delay="600"
            data-aos-duration="2000" />
        </div>
      </div>
    </div>
  </section>
  <section class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto px-9 gap-10 mb-10 text-xs">
    <IllustrationCard v-for="(ill, index) in selectedIllustrations" :key="ill.uid" :num="index + 1"
      :image="ill.data.illustration.url" :titre="ill.data.titre[0].text" :id="ill.id" :lien="ill.data.lien"
      :prix="ill.data.prix[0].text" data-aos="fade-up" data-aos-duration="2000" />
  </section>
  <section
    class="grid px-9 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-10 pb-20 border-b text-xs overflow-hidden">
    <p class="w-2/3" data-aos="fade-up" data-aos-duration="2000">
      Ces illustrations sont des créations personnelles et professionnelles.
    </p>
    <p class="w-2/3 flex flex-col gap-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="2000">
      Chaque illustration présentée ici a été conçue dans le cadre de projets créatifs
      indépendants ou pour des collaborations avec des clients.
    </p>
    <p class="w-2/3" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="2000">
      Tous les droits sur ces illustrations sont réservés, qu’il s’agisse de travaux personnels
      ou réalisés pour des tiers.
    </p>
  </section>
</template>

<style scoped></style>
