<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;

const title = "Zoé Garcia - Contact";
const desc =
  "Vous pouvez contacter Zoé Garcia, designeuse de service, designeuse graphique et illustratrice, par e-mail à l'adresse : GARCIA88.ZOE@GMAIL.COM";

useSeoMeta({
  title,
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
  <section class="px-9 pb-10 mb-10 relative pt-12">
    <!-- Décos animées -->
    <span
      class="absolute top-[15%] left-1/2 h-20 w-20 bg-none bg-opacity-5 backdrop-blur-md z-10 border-2 border-accent rounded-full hidden md:flex"
      data-aos="zoom-in-left"
      data-aos-delay="600"
      data-aos-duration="2000"
    ></span>

    <h1
      class="flex flex-col mt-16 text-2xl md:text-6xl lg:text-8xl xl:text-9xl uppercase"
    >
      <span
        class="flex items-center lg:-mt-12"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="2000"
      >
        Me contacter
      </span>
    </h1>

    <!-- Contenu -->
    <div class="flex flex-col lg:flex-row gap-8 mt-8">
      <!-- Bloc infos -->
      <div class="gap-9 text-xs hidden lg:flex">
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="2000"
        >
          <p>Designeuse graphique française</p>
          <p>Basée aux États-Unis</p>
          <p>Michigan</p>
        </div>
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="1600"
          data-aos-duration="2000"
        >
          <p>Designeuse de 25 ans</p>
          <p>Diplômée d’un master</p>
          <p>en design de service</p>
          <p>et identité de marque</p>
        </div>
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="2600"
          data-aos-duration="2000"
        >
          <p>Expérimentée sur Adobe</p>
          <p>Photoshop, Illustrator</p>
          <p>InDesign, XD</p>
        </div>
      </div>

      <!-- Bloc contact mail -->
      <div
        class="flex-1 text-left lg:text-right mt-4 lg:mt-0"
        data-aos="fade-left"
        data-aos-delay="1050"
        data-aos-duration="2000"
      >
        <p class="text-base md:text-xl lg:text-2xl mb-2 uppercase">Écrivez-moi</p>
        <a
          href="mailto:GARCIA88.ZOE@GMAIL.COM"
          class=" text-xl md:text-3xl lg:text-5xl underline hover:opacity-80 transition-all"
        >
          GARCIA88.ZOE@GMAIL.COM
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-accent {
  color: var(--color-accent);
}
</style>
