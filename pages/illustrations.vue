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
  <div class="border-b px-3 pb-16 pt-12">
    <h1
      class="uppercase text-4xl md:text-6xl lg:text-8xl xl:text-9xl w-1/3 pt-4"
    >
      Toutes mes illustrations
    </h1>
    <div class="flex items-center justify-end gap-4 -mt-5 -mb-5">
      <img src="/Flower.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
      <img src="/sun.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
    </div>
    <div class="flex flex-col gap-10 mt-10">
      <div
        v-for="illustrations in data"
        class="w-full border-t flex flex-wrap justify-between pt-8"
        :key="illustrations.uid"
      >
        <div class="flex flex-col w-1/2 md:justify-end gap-4 cursor-none">
          <h2
            class="text-2xl md:text-5xl lg:text-6xl xl:text-7xl uppercase w-fit"
          >
            {{ illustrations.data.titre[0].text }}
          </h2>
        </div>
        <div
          class="w-full md:h-auto md:w-2/5 h-full max-h-[28rem] xl:max-h-[40rem] flex cursor-none overflow-hidden"
        >
          <img
            :src="illustrations.data.illustration.url"
            :alt="illustrations.data.illustration.alt"
            class="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
