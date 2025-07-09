<script setup>
import gsap from "gsap";

onMounted(() => {
  const panels = gsap.utils.toArray(".panel");
  gsap.to(panels, {
    yPercent: -100,
    duration: 1.5,
    ease: "power2.inOut",
    stagger: 0.3,
    onComplete: () => {
      // Remove the loader after the animation completes
      document.querySelector(".loader").style.display = "none";
    },
  });
});
</script>

<template>
  <div class="loader">
    <span class="panel fixed h-full w-1/4 z-[500000] bg-secondary"></span>
    <span
      class="panel fixed h-full w-1/4 left-1/4 z-[500000] bg-secondary"
    ></span>
    <span
      class="panel fixed h-full w-1/4 left-1/2 z-[500000] bg-secondary"
    ></span>
    <span
      class="panel fixed h-full w-1/4 left-3/4 z-[500000] bg-secondary"
    ></span>
  </div>
</template>

<style scoped></style>
