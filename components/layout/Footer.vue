<template>
  <footer
    class="text-white py-3  px-3 flex flex-col overflow-hidden max-w-[2560px] mx-auto bg-[#272727] relative z-10"
  >
    <div
      class="flex justify-between text-base md:text-xl uppercase py-1 border-b"
    >
      <p class="w-1/3">01</p>
      <a
        href="https://fr.linkedin.com/in/quentin-heinis-731ab8223"
        class="text-end md:text-center w-1/3 hover:underline"
        >Linkedin</a
      >
      <p class="w-1/3 text-end hidden md:block">Quentin Heinis</p>
    </div>
    <div
      class="flex justify-between text-base md:text-xl uppercase py-1 border-b"
    >
      <p class="w-1/3">02</p>
      <a
        href="mailto:quentin@heinis.dev"
        class="text-end md:text-center w-1/3 hover:underline"
        >Mail</a
      >
      <p class="w-1/3 text-end normal-case hidden md:block">
        quentin@heinis.dev
      </p>
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
