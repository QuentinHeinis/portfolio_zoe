<script setup>
let route = useRoute();
let id = route.params.id;
const { client } = usePrismic();
const { data: project } = await useAsyncData(id, async () => {
  return await client.getByUID("projets", id);
});

let projet = ref({
  imagePres: project.value.data.image_presentation,
  nom: project.value.data.titre_du_projet[0].text,
  desc: project.value.data.description,
  images: project.value.data.images,
  year: project.value.data.year[0].text,
  softwares: project.value.data.programmes[0].text,
});
onMounted(() => {
  window.scrollTo(0, 0);

  const images = document.querySelectorAll(".image");

  new simpleParallax(images, {
    scale: 1.2,
  });
});

const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;

useSeoMeta({
  title: project.value?.data.SEOtitle[0].text,
  description: project.value?.data.SEOdescription[0].text,
  ogTitle: project.value?.data.SEOtitle[0].text,
  ogDescription: project.value?.data.SEOdescription[0].text,
  ogImage: "/favicon.png",
  ogUrl: url,
  twitterTitle: project.value?.data.SEOtitle[0].text,
  twitterDescription: project.value?.data.SEOdescription[0].text,
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
  <div class="flex flex-col">
    <h1 class="text-5xl md:text-9xl uppercase py-10">{{ projet.nom }}</h1>
    <div class="border-l max-w-xs flex flex-col gap-2 pl-2 mt-10">
      <p class="normal-case">{{ projet.softwares }}</p>
      <p>{{ projet.year }}</p>
    </div>
    <div class="w-11/12 flex flex-col">
      <div class="flex gap-2 self-end">
        <p
          v-for="tag in projet.tags"
          class="px-2 py-[2px] text-xs md:text-base rounded-full border"
        >
          {{ tag }}
        </p>
      </div>
      <p
        v-for="para in projet.desc"
        class="text-end text-xs md:text-base uppercase mt-2 w-1/2 ml-auto"
      >
        {{ para.text }}
      </p>
      <div class="flex items-center self-end gap-4">
        <img src="/Flower.svg" alt="" class="object-contain h-8" />
        <img src="/sun.svg" alt="" class="object-contain h-8" />
      </div>
    </div>
    <div class="pb-10 border-b">
      <img
        :src="projet.imagePres.url"
        :alt="projet.imagePres.alt"
        class="image"
      />
    </div>

    <div v-for="{ image } in projet.images" class="mt-16">
      <img :src="image.url" :alt="image.alt" class="image" />
    </div>
    <NuxtLink
      to="/project"
      class="flex w-fit gap-4 text-2xl md:text-6xl items-center self-end pr-10 pt-8 mb-10 uppercase cursor-pointer"
    >
      <img src="/ArrowBack.png" alt="" class="h-9 md:h-auto" /> Back to projects
    </NuxtLink>
  </div>
</template>
