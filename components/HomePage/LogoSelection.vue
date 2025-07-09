<script setup>
defineProps({
  selectedlogos: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="pb-10 mb-10 px-9 relative overflow-hidden">
    <span
      class="absolute top-1/4 left-1/4 h-20 w-20 border-accent bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-right"
      data-aos-delay="700"
      data-aos-duration="2000"
    ></span>
    <h2
      class="text-5xl md:text-9xl lg:text-[10rem] uppercase leading-none flex flex-col"
    >
      <span data-aos="fade-right" data-aos-duration="2000" class="lg:-mt-7"
        >Logos</span
      >
      <span data-aos="fade-right" data-aos-delay="300" data-aos-duration="2000"
        >Sélectionné</span
      >
    </h2>
    <div class="flex flex-col items-end w-4/5 ml-auto mt-4">
      <div class="w-1/2">
        <p
          class="text-xs md:text-base"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          En plus des projets construits que j'exécute, je crée également
          d'autres designs en utilisant Adobe Illustrator pour montrer les idées
          et concepts d'une entreprise, d'un individu, ou en tant qu'extension
          de projets.
        </p>
        <div class="flex items-center gap-4 mt-4">
          <img
            src="/Flower.svg"
            alt=""
            class="h-8"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="2000"
          />
          <img
            src="/sun.svg"
            alt=""
            class="h-8"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  </section>
  <section
    class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto px-9 gap-10 mb-10 text-xs"
  >
    <HomeCardLogo
      v-for="(logo, index) in selectedlogos"
      :key="logo.uid"
      :num="index + 1"
      :image="logo.data.logo.url"
      :smallDesc="logo.data.description[0].text"
      :id="logo.id"
      :largeDesc="logo.data.large_description"
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  </section>
  <section
    class="grid px-9 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-10 pb-20 border-b text-xs overflow-hidden"
  >
    <p class="w-2/3" data-aos="fade-up" data-aos-duration="2000">
      Ces logos sont des créations personnelles et scolaires
    </p>
    <p
      class="w-2/3 flex flex-col gap-2"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="2000"
    >
      La plupart de ces logos sont pour des projets scolaires ou des projets
      personnels.
      <span> Ils servent uniquement à des fins d'exposition </span>
    </p>
    <p
      class="w-2/3"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="2000"
    >
      Même si ces logos sont uniquement pour des fins personnelles, je les
      détients
    </p>
  </section>
</template>

<style scoped></style>
