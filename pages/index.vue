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


  <MySEO query="homepage" />
</template>
