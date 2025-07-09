<script lang="ts" setup>
import gsap from "gsap";

const transitionScreen = ref(null);
const router = useRouter();
router.beforeEach((to, from, next) => {
  gsap.to(transitionScreen.value, {
    y: "0%",
    duration: 0.5,
    onComplete: () => next(),
  });
});
router.afterEach(async (to, from) => {
  if (to.path === from.path) return;
  await nextTick();
  gsap.to(transitionScreen.value, {
    y: "-100%",
    duration: 0.5,
    delay: 0.7,
  });
  gsap.to(transitionScreen.value, {
    y: "100%",
    duration: 0,
    delay: 1.2,
  });
});
</script>

<template>
  <div ref="transitionScreen" class="transition-screen"></div>
</template>

<style  scoped>
.transition-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  transform: translate(0, 100%);
  background-color: var(--color-accent);
  z-index: 1000;
}
</style>