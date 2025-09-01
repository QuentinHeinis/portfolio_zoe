<script setup>
defineProps({
  selectedProject: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="border-b px-9 pb-10 mb-10 relative w-full overflow-hidden">
    <div class="flex gap-10 md:gap-20 text-xs mb-8 md:mb-0">
      <div class="flex flex-col">
        <p data-aos="fade-right" data-aos-duration="1500" class="flex flex-col">
          <span>Vous pouvez aussi voir mes autres</span>
          <span>projets dans l'onglet "projets"</span>
          <span class="mt-2">mes autres créations peuvent être</span>
          <span>trouvées partout sur le site</span>
          <span>assurez-vous de les regarder !</span>
        </p>
        <div class="flex items-center gap-4 mt-4">
          <img
            src="/Flower.svg"
            alt=""
            class="h-8 brightness-0"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          />
          <img
            src="/sun.svg"
            alt=""
            class="h-8 brightness-0"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="600"
          />
        </div>
      </div>
      <p
        class="flex flex-col"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <span>Les projets présentés dans cette</span>
        <span>section sont de 2023 & 2024</span>
      </p>
    </div>
    <span
      class="absolute bottom-1/4 lg:top-1/4 left-2/3 h-14 w-14 md:h-20 md:w-20 lg:h-32 lg:w-32 border-accent bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full"
      data-aos="zoom-in-left"
      data-aos-delay="450"
      data-aos-duration="1500"
    ></span>
    <span
      class="absolute top-2/3 left-[40%] md:h-16 md:w-16 lg:h-24 lg:w-24 border-accent bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-left"
      data-aos-delay="800"
      data-aos-duration="1500"
    ></span>
    <h2
      class="text-5xl md:text-9xl lg:text-[10rem] uppercase leading-none text-end flex flex-col"
    >
    <span
      data-aos="fade-left"
      data-aos-duration="2000"
      class="lg:-mt-7"
      >Projets</span>
      <span data-aos="fade-left"       data-aos-delay="500"
 data-aos-duration="2000">Sélectionné</span>
    </h2>
  </section>
  <section class="flex flex-col gap-6 mb-6">
    <HomeCardProjet
      v-for="projet in selectedProject"
      :nom="projet.data.titre_du_projet[0].text"
      :tags="projet.data.tags"
      :image="projet.data.image_presentation.url"
      :id="projet.uid"
      :key="projet.uid"
    />
  </section>
</template>

<style scoped>
</style>