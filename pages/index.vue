<script setup>
const { client } = usePrismic();
const { data } = await useAsyncData("projets", async () => {
  return await client.getAllByType("projets");
});
const { data : illu } = await useAsyncData("illustrations", async () => {
  return await client.getAllByType("illustrations");
});

const selectedProject = computed(() =>
  data.value.filter((item) => item.tags.includes("selected"))
);
const selectedIllustrations = computed(() =>
  illu.value.filter((item) => item.tags.includes("selected"))
);


const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;
const title = "Zoé Garcia - Designeuse de service, designeuse graphique et illustratrice"
const desc = "Zoé Garcia est designeuse de service, designeuse graphique et illustratrice. Découvrez une sélection de projets marquants alliant design stratégique, esthétique visuelle et narration sensible.";


useSeoMeta({
  title: title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  ogImage: "/favicon.png",
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: "/favicon.png",
  twitterCard: "summary",
});
useHead({
  htmlAttrs: {
    lang: "fr",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

</script>

<template>
  <HeroSection/>
  <MyExpertise/>
  <ProjectSelection :selectedProject />
  <IllustrationSelection :selectedIllustrations />
</template>
