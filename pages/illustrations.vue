<script setup>
const { client } = usePrismic();

const { data } = await useAsyncData("illustrations", async () => {
  return await client.getAllByType("illustrations");
});
onMounted(() => {
  window.scrollTo(0, 0);
});


const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;
const title = "Zoé Garcia - Mes illustrations"
const desc = "Découvrez l'ensemble des projets créatifs de Zoé Garcia : design, graphisme, interfaces et expériences visuelles. Une sélection unique de travaux mêlant sensibilité artistique et maîtrise technique."

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
  <div class="border-b px-3 pb-16 pt-20">
    <h1
      class="uppercase text-4xl md:text-6xl lg:text-8xl xl:text-9xl w-1/3 pt-4"
    >
      Toutes mes illustrations
    </h1>
    <div class="flex items-center justify-end gap-4 -mt-5 -mb-5">
      <img src="/Flower.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
      <img src="/sun.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
    </div>
   <section class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-w-7xl mx-auto mt-10 px-9 gap-10 mb-10 text-xs">
    <IllustrationCard v-for="(ill, index) in data" :key="ill.uid" :num="index + 1"
      :image="ill.data.illustration.url" :titre="ill.data.titre[0].text" :id="ill.id"
      :lien="ill.data.lien" :prix="ill.data.prix[0].text" data-aos="fade-up" data-aos-duration="2000" />
  </section>
  </div>
</template>
