<script setup>
import HomeCardProjet from "~/components/HomeCardProjet.vue";
import HomeCardLogo from "~/components/HomeCardLogo.vue";
const { client } = usePrismic();
const { data } = await useAsyncData("projets", async () => {
  return await client.getAllByType("projets");
});
const { data: logos } = await useAsyncData("logos", async () => {
  return await client.getAllByType("logos");
});
const selectedProject = computed(() =>
  data.value.filter((item) => item.tags.includes("selected"))
);

const selectedlogos = computed(() =>
  logos.value.filter((item) => item.tags.includes("selected"))
);
</script>

<template>
  <div class=" border-b px-3 pb-10 mb-10 relative pt-12">
    <span
      class="absolute top-[15%] left-1/2 h-20 w-20 bg-white bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-left"
      data-aos-delay="600"
      data-aos-duration="2000"
    ></span>
    <span
      class="absolute top-1/3 left-[15%] h-24 w-24 bg-white bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-left"
      data-aos-delay="400"
      data-aos-duration="2000"
    ></span>
    <h1
      class="flex flex-col text-2xl md:text-6xl lg:text-8xl xl:text-9xl uppercase"
    >
      <span class="flex" data-aos="fade-up" data-aos-duration="2000"
        >Web Design</span
      >
      <span
        class="flex items-center lg:-mt-12"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="2000"
        >Design<img
          src="/ball.png"
          class="-mx-2 md:-mx-6 lg:-mx-12 xl:-mx-14 h-10 md:h-24 lg:h-44 xl:h-56"
        />graphique
      </span>
      <span
        class="flex items-center lg:-mt-12"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="2000"
        >Log
        <img src="/QanticLogo.png" class="h-5 md:h-14 lg:h-20 xl:h-24" />s</span
      >
      <span
        class="flex"
        data-aos="fade-up"
        data-aos-delay="450"
        data-aos-duration="2000"
        >Design</span
      >
    </h1>
    <div class="flex">
      <div class="uppercase gap-9 text-xs hidden lg:flex">
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="2000"
        >
          <p>Designer graphique français</p>
          <p>Basé en France</p>
          <p>Montbéliard</p>
        </div>
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="1600"
          data-aos-duration="2000"
        >
          <p>Designer de 19 ans encore</p>
          <p>étudiant pour un diplôme</p>
          <p>espère faire un master en visuel</p>
          <p>et identité de marque</p>
        </div>
        <div
          class="flex flex-col"
          data-aos="fade-right"
          data-aos-delay="2600"
          data-aos-duration="2000"
        >
          <p>Expérimenté sur Adobe</p>
          <p>Photoshop, Illustrator,</p>
          <p>InDesign, Audition, XD,</p>
          <p>Premiere, Figma</p>
        </div>
      </div>
      <div
        class="text-2xl md:text-6xl lg:text-8xl xl:text-9xl lg:-mt-8 uppercase"
        data-aos="fade-left"
        data-aos-delay="1050"
        data-aos-duration="2000"
      >
        Produit
      </div>
    </div>
  </div>
  <div class="border-b pb-10 mb-10 relative w-full overflow-hidden">
    <div class="flex uppercase gap-10 md:gap-20 text-xs mb-8 md:mb-0">
      <div class="flex flex-col">
        <div data-aos="fade-right" data-aos-duration="1500">
          <p>Vous pouvez aussi voir mes autres</p>
          <p>projets dans l'onglet "projets"</p>
          <p class="mt-2">mes autres créations peuvent être</p>
          <p>trouvées partout sur le site</p>
          <p>assurez-vous de les regarder !</p>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <img
            src="/Flower.svg"
            alt=""
            class="h-8"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="300"
          />
          <img
            src="/sun.svg"
            alt=""
            class="h-8"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="600"
          />
        </div>
      </div>
      <div
        class="flex flex-col"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <p>Les projets présentés dans cette</p>
        <p>section sont de 2022 & 2023</p>
      </div>
    </div>
    <span
      class="absolute bottom-1/4 lg:top-1/4 left-2/3 h-14 w-14 md:h-20 md:w-20 lg:h-32 lg:w-32 bg-white bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full"
      data-aos="zoom-in-left"
      data-aos-delay="450"
      data-aos-duration="1500"
    ></span>
    <span
      class="absolute top-2/3 left-[40%] md:h-16 md:w-16 lg:h-24 lg:w-24 bg-white bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-left"
      data-aos-delay="800"
      data-aos-duration="1500"
    ></span>
    <h2
      class="text-5xl md:text-9xl lg:text-[10rem] uppercase leading-none text-end flex flex-col"
    >
      <span data-aos="fade-left" data-aos-duration="2000">Sélectionné</span>
      <span
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-delay="500"
        class="lg:-mt-7"
        >Projets</span
      >
    </h2>
  </div>
  <div class="flex flex-col gap-6 mb-6">
    <HomeCardProjet
      v-for="projet in selectedProject"
      :nom="projet.data.titre_du_projet[0].text"
      :tags="projet.data.tags"
      :image="projet.data.image_presentation.url"
      :id="projet.uid"
      :key="projet.uid"
    />
  </div>
  <div class="pb-10 mb-10 relative overflow-hidden">
    <span
      class="absolute top-1/4 left-1/4 h-20 w-20 bg-white bg-opacity-5 backdrop-blur-md z-10 border-2 rounded-full hidden md:flex"
      data-aos="zoom-in-right"
      data-aos-delay="700"
      data-aos-duration="2000"
    ></span>
    <h2
      class="text-5xl md:text-9xl lg:text-[10rem] uppercase leading-none flex flex-col"
    >
      <span data-aos="fade-right" data-aos-duration="2000">Sélectionné</span>
      <span
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="300"
        class="lg:-mt-7"
        >Logos</span
      >
    </h2>
    <div class="flex flex-col items-end w-4/5 mx-auto md:-mt-5 lg:-mt-20">
      <div class="w-1/2">
        <p
          class="text-xs md:text-base"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          EN PLUS DES PROJETS CONSTRUITS QUE J'EXÉCUTE, JE CRÉE ÉGALEMENT
          D'AUTRES DESIGNS EN UTILISANT ADOBE ILLUSTRATOR POUR MONTRER LES IDÉES
          ET CONCEPTS D'UNE ENTREPRISE, D'UN INDIVIDU, OU EN TANT QU'EXTENSION
          DE PROJETS.
        </p>
        <div class="flex items-center gap-4 mt-4">
          <img
            src="/Flower.svg"
            alt=""
            class="h-8"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="2000"
          />
          <img
            src="/sun.svg"
            alt=""
            class="h-8"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-10 mb-10 text-xs"
  >
    <HomeCardLogo
      v-for="(logo, index) in selectedlogos"
      :key="logo.uid"
      :num="index + 1"
      :image="logo.data.logo.url"
      :smallDesc="logo.data.description[0].text"
      :id="logo.id"
      :largeDesc="logo.data.large_description"
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  </div>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mx-auto gap-10 pb-20 border-b text-xs overflow-hidden"
  >
    <p class="w-2/3" data-aos="fade-up" data-aos-duration="2000">
      CES LOGOS SONT DE 2022 ET 2023 UNIQUEMENT, JE N'AFFICHE RIEN AVANT CELA
    </p>
    <p
      class="w-2/3 flex flex-col gap-2"
      data-aos="fade-up"
      data-aos-delay="600"
      data-aos-duration="2000"
    >
      LA PLUPART DE CES LOGOS SONT POUR DES PROJETS SCOLAIRES OU DES PROJETS
      PERSONNELS
      <span>ILS SERVENT UNIQUEMENT À DES FINS D'EXPOSITION</span>
    </p>
    <p
      class="w-2/3"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="2000"
    >
      MÊME SI CES LOGOS SONT UNIQUEMENT POUR DES FINS PERSONNELLES, JE LES
      DÉTIENTS
    </p>
  </div>

  <MySEO query="homepage" />
</template>
