<script setup>
import { onMounted, ref } from "vue";

/* Get the header element and it's position */
var headerDiv = ref();
var headerBottom = ref();
onMounted(() => {
  var prevScrollpos = window.pageYOffset;
  headerDiv.value = document.querySelector("header");
  headerBottom.value = headerDiv.value.offsetTop + headerDiv.value.offsetHeight;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    /* if we're scrolling up, or we haven't passed the header,
           show the header at the top */
    if (
      prevScrollpos > currentScrollPos ||
      currentScrollPos < headerBottom.value
    ) {
      headerDiv.value.style.top = "0";
    } else {
      /* otherwise we're scrolling down & have passed the header so hide it */
      headerDiv.value.style.top = "-7.2rem";
    }

    prevScrollpos = currentScrollPos;
  };
});
</script>
<template>
  <header
    class="text-textColor py-3 border-b px-3 flex justify-between items-center fixed top-0 left-0 right-0 max-w-[2560px] mx-auto"
  >
    <NuxtLink to="/" class="hover__effect relative z-10 cursor-pointer"
      >zoe garcia</NuxtLink
    >
    <div class="flex gap-4 uppercase text-xs md:text-base items-center">
      <NuxtLink to="/projet" class="hover__effect relative z-10 cursor-pointer"
        >Projets</NuxtLink
      >
      <NuxtLink to="/illustrations" class="hover__effect relative z-10 cursor-pointer"
        >Illustrations</NuxtLink
      >
      <NuxtLink to="/contact" class="hover__effect relative z-10 cursor-pointer"
        >Contact</NuxtLink
      >
    </div>
  </header>
</template>
<style></style>
