<script setup>
const { query } = defineProps({
  query: String,
});

const { client } = usePrismic();
const { data } = await useAsyncData(`SEO ${query}`, async () => {
  return await client.getSingle(query);
});

const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;

useSeoMeta({
  title: data.value?.data.SEOtitle[0].text,
  description: data.value?.data.SEOdescription[0].text,
  ogTitle: data.value?.data.SEOtitle[0].text,
  ogDescription: data.value?.data.SEOdescription[0].text,
  ogImage: "/favicon.png",
  ogUrl: url,
  twitterTitle: data.value?.data.SEOtitle[0].text,
  twitterDescription: data.value?.data.SEOdescription[0].text,
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
<template></template>