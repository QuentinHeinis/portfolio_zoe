<script  setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

let route = useRoute();
let id = route.params.id;
const { client } = usePrismic();
const { data: project } = await useAsyncData(id, async () => {
  return await client.getByUID("projets", id);
});

gsap.registerPlugin(ScrollTrigger, SplitText);

const scrollTriggerInstance = ref();

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

  const initHeroAnimations = () => {
    const heroTitle = SplitText.create(".project-hero-header-h1 h1", {
      type: "lines",
      mask: "lines",
    });

    const projectTags = SplitText.create(".project-tags p", {
      type: "lines",
      mask: "lines",
    });

    const heroDescription = SplitText.create(".project-hero-description p", {
      type: "lines",
      mask: "lines",
    });

    gsap.set([heroTitle.lines, projectTags.lines, heroDescription.lines], {
      position: "relative",
      y: "120%",
      willChange: "transform",
    });

    gsap.set(".project-hero-header-h1 img", {
      scale: 0,
      willChange: "transform",
    });

    const heroTl = gsap.timeline({ delay: 0.85 });

    heroTl.to(heroTitle.lines, {
      y: "0%",
      duration: 1,
      ease: "power4.out",
    });

    heroTl.to(
      ".project-hero-header-h1 img",
      {
        scale: 1,
        duration: 1,
        ease: "power4.out",
      },
      "-=1"
    );

    heroTl.to(
      projectTags.lines,
      {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      },
      "-=0.9"
    );

    heroTl.to(
      heroDescription.lines,
      {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      },
      "-=0.9"
    );
  };

  // initHeroAnimations();

  scrollTriggerInstance.value =  ScrollTrigger.create({
    trigger: ".project-page-whitespace",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
      const projectPreviewWrapper = document.querySelector(
        ".project-preview-wrapper"
      );
      const previewCols = document.querySelectorAll(
        ".preview-col:not(.main-preview-col)"
      );
      const mainPreviewImg = document.querySelector(
        ".preview-img.main-preview-img img"
      );

      const previewScreenWidth = window.innerWidth;
      const previewMaxScale = previewScreenWidth < 900 ? 4 : 2.65;

      const scale = 1 + self.progress * previewMaxScale;
      const yPreviewColTranslate = self.progress * 300;
      const mainPreviewImgScale = 2 - self.progress * 0.85;

      projectPreviewWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

      previewCols.forEach((previewCol) => {
        previewCol.style.transform = `translateY(${yPreviewColTranslate}px)`;
      });

      mainPreviewImg.style.transform = `scale(${mainPreviewImgScale})`;
    },
  });
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance.value) {
    scrollTriggerInstance.value.kill();
    scrollTriggerInstance.value = null;
  }
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
 <section class="project-preview">
  <div class="project-preview-wrapper">
    <!-- Colonne 1 -->
    <div class="preview-col">
      <div class="preview-img">
        <img :src="projet.images[0 % projet.images.length].image.url" :alt="projet.images[0 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[1 % projet.images.length].image.url" :alt="projet.images[1 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[2 % projet.images.length].image.url" :alt="projet.images[2 % projet.images.length].image.alt" />
      </div>
    </div>

    <!-- Colonne 2 -->
    <div class="preview-col">
      <div class="preview-img">
        <img :src="projet.images[3 % projet.images.length].image.url" :alt="projet.images[3 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[4 % projet.images.length].image.url" :alt="projet.images[4 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[5 % projet.images.length].image.url" :alt="projet.images[5 % projet.images.length].image.alt" />
      </div>
    </div>

    <!-- Colonne 3 (main-preview-col) -->
    <div class="preview-col main-preview-col">
      <div class="preview-img">
        <img :src="projet.images[6 % projet.images.length].image.url" :alt="projet.images[6 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img main-preview-img">
        <img :src="projet.images[7 % projet.images.length].image.url" :alt="projet.images[7 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[8 % projet.images.length].image.url" :alt="projet.images[8 % projet.images.length].image.alt" />
      </div>
    </div>

    <!-- Colonne 4 -->
    <div class="preview-col">
      <div class="preview-img">
        <img :src="projet.images[9 % projet.images.length].image.url" :alt="projet.images[9 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[10 % projet.images.length].image.url" :alt="projet.images[10 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[11 % projet.images.length].image.url" :alt="projet.images[11 % projet.images.length].image.alt" />
      </div>
    </div>

    <!-- Colonne 5 -->
    <div class="preview-col">
      <div class="preview-img">
        <img :src="projet.images[12 % projet.images.length].image.url" :alt="projet.images[12 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[13 % projet.images.length].image.url" :alt="projet.images[13 % projet.images.length].image.alt" />
      </div>
      <div class="preview-img">
        <img :src="projet.images[14 % projet.images.length].image.url" :alt="projet.images[14 % projet.images.length].image.alt" />
      </div>
    </div>
  </div>
</section>

  <section
    class="flex flex-col h-screen justify-center items-center relative bg-bgColor"
  >
    <h1 class="text-5xl md:text-9xl uppercase">{{ projet.nom }}</h1>
    <p class="normal-case text-center mt-4">{{ projet.softwares }}</p>
    <div class="text-center max-w-xs flex flex-col gap-2 mb-10"></div>
    <div class="flex flex-col">
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
        class="text-center text-xs md:text-base uppercase mt-2 w-1/2 sm:2/3 mx-auto"
      >
        {{ para.text }}
      </p>
      <div class="flex items-center self-center mt-4 gap-4">
        <img src="/Flower.svg" alt="" class="object-contain h-8 brightness-0" />
        <img src="/sun.svg" alt="" class="object-contain h-8 brightness-0" />
      </div>
    </div>
    <p class="absolute bottom-1">{{ projet.year }}</p>
  </section>
  <section class="project-page-whitespace"></section>
  <section class="flex flex-col bg-bgColor z-10 relative">

    <div v-for="{ image } in projet.images" class="mt-16">
      <img :src="image.url" :alt="image.alt" class="image" />
    </div>
    <NuxtLink
      to="/projet"
      class="flex w-fit gap-4 text-2xl md:text-6xl items-center self-end pr-10 pt-8 mb-10 uppercase cursor-pointer"
    >
      <img src="/ArrowBack.png" alt="" class="h-9 md:h-auto brightness-0" /> Retour aux
      projets
    </NuxtLink>
  </section>
</template>

<style>
.project-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  
  overflow: hidden;
  height: 100vh;
  padding: 0;
  background-color: var(--color-accent);
  overflow: hidden;
}
.project-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-preview .project-preview-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 160vw;
  height: 100vh;
  display: flex;
  gap: 4em;
  max-width: 2560px;
  overflow: hidden;
}

.project-preview .project-preview-wrapper .preview-col {
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4em;
}

.project-preview .project-preview-wrapper .preview-img {
  flex: 1;
  border-radius: 1em;
  overflow: hidden;
}

.project-preview .project-preview-wrapper .preview-img.main-preview-img img {
  position: relative;
  transform: scale(2);
}

.project-page-whitespace {
  width: 100vw;
  height: 200vh;
}
</style>
