<script setup>
const { client } = usePrismic();
const { data } = await useAsyncData("projets", async () => {
  return await client.getAllByType("projets");
});
const { data: logos } = await useAsyncData("logos", async () => {
  return await client.getAllByType("logos");
});
const selectedProject = computed(() =>
  data.value.filter((item) => item.tags.includes("selected"))
);

const selectedlogos = computed(() =>
  logos.value.filter((item) => item.tags.includes("selected"))
);
</script>

<template>
  <HeroSection/>
  <ProjectSelection :selectedProject />
  <LogoSelection :selectedlogos />
  <section
    class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-10 pb-20 border-b text-xs overflow-hidden"
  >
    <p class="w-2/3" data-aos="fade-up" data-aos-duration="2000">
      CES LOGOS SONT DE 2022 ET 2023 UNIQUEMENT, JE N'AFFICHE RIEN AVANT CELA
    </p>
    <p
      class="w-2/3 flex flex-col gap-2"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="2000"
    >
      LA PLUPART DE CES LOGOS SONT POUR DES PROJETS SCOLAIRES OU DES PROJETS
      PERSONNELS
      <span>ILS SERVENT UNIQUEMENT À DES FINS D'EXPOSITION</span>
    </p>
    <p
      class="w-2/3"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="2000"
    >
      MÊME SI CES LOGOS SONT UNIQUEMENT POUR DES FINS PERSONNELLES, JE LES
      DÉTIENTS
    </p>
  </section>

  <MySEO query="homepage" />
</template>
