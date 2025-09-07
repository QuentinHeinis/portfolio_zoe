<script setup>
const footerLinks = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/zoegarcia_design/",
    text : "@zoegarcia_design",
  },
  {
    label: "Mail",
    url: "mailto:contact@zoegarcia.fr",
    text: "contact@zoegarcia.fr",
  },
];

</script>
<template>
  <footer
    class="text-textColor py-3  px-3 flex flex-col overflow-hidden max-w-[2560px] mx-auto bg-bgColor relative z-10"
  >
    <div
    v-for="(link, index) in footerLinks"
      class="flex justify-between text-base md:text-xl uppercase py-1 border-b"
    >
      <p class="w-1/3">{{ String(index + 1).padStart(2, '0')}}</p>
      <a
        :href="link.url"
        class="text-end md:text-center w-1/3 hover:underline"
        >{{link.label}}</a
      >
      <p class="w-1/3 text-end hidden md:block">{{link.text}}</p>
    </div>
    <div class="flex justify-between pt-5 text-lg uppercase">
      <p class="w-1/3">
        Copyright &copy;
        <NuxtLink to="https://www.heinis.dev">Quentin Heinis</NuxtLink>
      </p>
      <NuxtLink to="/mentions-legales" class="w-1/3 text-center"
        >Mentions légales</NuxtLink
      >
      <p class="w-1/3 text-end">2025</p>
    </div>
  </footer>
</template>
