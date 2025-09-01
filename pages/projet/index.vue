<script setup>
const { client } = usePrismic();
const { data } = await useAsyncData("projets", async () => {
  return await client.getAllByType("projets");
});

onMounted(() => {
  window.scrollTo(0, 0);
});

const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;
const title = "Zoé Garcia - Mes projets"
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
  <div class="border-b pb-10 pt-12 px-3">
    <h1
      class="uppercase text-4xl md:text-6xl lg:text-8xl xl:text-9xl w-1/2 pt-4"
    >
      Tout mes projets
    </h1>
    <div class="flex items-center justify-end gap-4 -mt-5 -mb-5">
      <img src="/Flower.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
      <img src="/sun.svg" alt="" class="object-contain h-5 md:h-12 brightness-0" />
    </div>
    <div class="flex flex-col gap-10 mt-10">
      <div
        v-for="projet in data"
        class="w-full border-t flex flex-wrap justify-between pt-8"
      >
        <NuxtLink
          :to="'/projet/' + projet.uid"
          class="flex flex-col w-1/2 md:justify-end gap-4 cursor-none"
        >
          <div class="flex gap-2 text-xs md:text-base lg:text-lg">
            <p
              v-for="tag in projet.data.tags"
              class="px-2 py-[2px] uppercase flex items-center border rounded-full"
            >
              {{ tag.text }}
            </p>
          </div>
          <h2
            class="text-2xl md:text-5xl lg:text-6xl xl:text-7xl uppercase w-fit"
          >
            {{ projet.data.titre_du_projet[0].text }}
          </h2>
        </NuxtLink>
        <NuxtLink
          :to="'/projet/' + projet.uid"
          class="w-full md:h-auto md:w-2/5 h-full max-h-[28rem] xl:max-h-[40rem] flex cursor-none overflow-hidden"
        >
          <img
            :src="projet.data.image_presentation.url"
            :alt="projet.data.image_presentation.alt"
            class="object-cover w-full h-full hover:scale-125 transition-all duration-1000"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
