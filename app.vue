<script setup>
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";
import Lenis from "lenis";
import AOS from "aos";
const cursor = ref(null);
const hoverTarget = ref(null);
onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical", // vertical, horizontal
    gestureOrientation: "vertical", // vertical, horizontal, both
    smoothWheel: true,
    wheelMultiplier: 1.2,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  AOS.init({ once: true });

  window.addEventListener("mousemove", positionElement);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousemove", positionElement);
});
const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.value.style.left = `${mouseX}px`;
  cursor.value.style.top = `${mouseY}px`;

  const elementUnderCursor = document.elementFromPoint(mouseX, mouseY);
  const cursorStyle = window.getComputedStyle(elementUnderCursor).cursor;

  if (cursorStyle === "pointer") {
    cursor.value.style.width = "75px";
    cursor.value.style.height = "75px";
  } else {
    cursor.value.style.width = "";
    cursor.value.style.height = "";
  }
};
</script>
<template>
  <MyTransition />
  <Header />
  <main class="text-textColor min-h-screen max-w-[2560px] mx-auto px-6">
    <span ref="cursor" id="cursor"></span>
    <NuxtPage />
  </main>
  <Footer />
</template>

<style>
#__nuxt {
  background: var(--color-bgColor);
  cursor: none;
  overflow: clip;
}
#cursor {
  display: none;
  position: fixed;
  z-index: 1000;
  transition: left 0.05s, top 0.05s, width 0.2s ease, height 0.2s ease;
  translate: -50% -50%;
  pointer-events: none;
  width: 15px;
  height: 15px;
  background: var(--color-primary);
  border-radius: 50%;
}
@media (min-width: 640px) {
  #cursor {
    display: flex;
  }
}

a {
  cursor: pointer;
}

header {
  transition: all 0.3s ease-in-out;
  z-index: 100;
}

header.fixedToTop {
  position: fixed;
  background: var(--color-bgColor);
  top: 0;
  left: 0;
  right: 0;
}

.hover__effect::after {
  content: "";
  position: absolute;
  background: var(--color-primary);
  display: block;
  left: 0;
  width: 100%;
  border-radius: 0.5rem;
  height: 2px;
  z-index: -1;
  transition: transform 0.7s ease;
  /* Initial state */
  transform: scaleX(0);
  transform-origin: bottom right;
}

.hover__effect:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* main::after, main::before {
  content: "";
  position: fixed;
  height: 100vh;
  width: calc((100vw - 2560px) / 2);
  left: 0;
  top: 0;
  background: var(--color-bgColor);
  z-index: 2;
}
main::before {
  left: unset;
  right: 0;
  top: 0;
} */
</style>
