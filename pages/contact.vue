<script setup>
import { useReCaptcha } from "vue-recaptcha-v3";

const recaptchaInstance = useReCaptcha();
const executeRecaptcha = async (action) => {
  await recaptchaInstance?.recaptchaLoaded();
  const token = await recaptchaInstance?.executeRecaptcha(action);
  const headerOptions = {
    headers: {
      "google-recaptcha-token": token,
    },
  };
  return { token, headerOptions };
};

const form = ref(null);
const formData = ref({
  name: "",
  firstname: "",
  email: "",
  entreprise: "",
  message: "",
});
const buttonState = ref("Envoyer");
const isSuccess = ref(false);
const handleSubmit = async (e) => {
  e.preventDefault();
  isSuccess.value = false;
  const { token } = await executeRecaptcha("submit");
  if (!token) {
    buttonState.value = "Erreur, réessayer";
    return;
  }

  const resetForm = () => {
    formData.value.name = "";
    formData.value.email = "";
    formData.value.message = "";
    formData.value.entreprise = "";
    formData.value.firstname = "";

    setTimeout(() => {
      buttonState.value = "Envoyer";
    }, 3000);
  };

  buttonState.value = "Envoi en cours...";

  fetch("/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.statut === 200) {
        isSuccess.value = true;
        buttonState.value = "Envoyé !";
        resetForm();
      } else {
        buttonState.value = "Erreur, réessayer";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      buttonState.value = "Erreur, réessayer";
    });
};



const route = useRoute();
const config = useRuntimeConfig();
const url = config.public.siteUrl + route.fullPath;

const title = "Zoé Garcia - Contact";
const desc =
  "Vous pouvez contacter Zoé Garcia, designeuse de service, designeuse graphique et illustratrice, par e-mail à l'adresse : contact@zoegarcia.fr";

useSeoMeta({
  title,
  description: desc,
  ogTitle: title,
  ogDescription: desc,
  ogImage: "/logo.png",
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: desc,
  twitterImage: "/logo.png",
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
      href: "/logo.png",
    },
  ],
});
</script>

<template>
  <section class="px-9 pb-10 mb-10 relative pt-20">

    <h1 class="flex flex-col mt-16 text-2xl md:text-6xl lg:text-8xl xl:text-9xl uppercase">
      <span class="flex items-center lg:-mt-12" data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">
        Parlez moi de
      </span>
      <span class="flex items-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
        votre projet
      </span>
    </h1>

    <!-- Contenu -->
    <div class="flex flex-col lg:flex-row gap-8 mt-8">
      <!-- Bloc infos -->
      <div class="gap-9 text-xs order-2 md:order-1 lg:flex">
        <p class="flex flex-col mb-1.5" data-aos="fade-right" data-aos-delay="600" data-aos-duration="2000">
          <span>Designer graphique</span>
          <span>basée au Épinal,</span>
          <span>dans les Vosges.</span>
        </p>
        <p class="flex flex-col mb-1.5" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="2000">
          <span>Je conçois des projets</span>
          <span>visuels pensés pour</span>
          <span>être clais, cohérents</span>
          <span>et adaptés à leur contexte</span>

        </p>
        <p class="flex flex-col mb-1.5" data-aos="fade-right" data-aos-delay="1800" data-aos-duration="2000">
          <span>N'hésitez pas à me contacter</span>
          <span>pour discuter de votre projet</span>
        </p>
        <a href="tel:0624785190" class="flex gap-0.5 mb-1.5" data-aos="fade-right" data-aos-delay="2400"
          data-aos-duration="2000">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          06 24 78 51 90
        </a>
      </div>
    </div>
    <div class="flex flex-wrap items-center">
      <div class="w-full max-w-3xs aspect-square bg-blue-500 rounded-lg overflow-hidden shadow-lg" data-aos="fade-right"
        data-aos-delay="500" data-aos-duration="2000">
        <img src="/img/photo-profil.png" alt="Portrait de Zoé Garcia" class="w-full h-full object-cover" />
      </div>




      <form @submit="handleSubmit" ref="form" class="w-full max-w-3xl mx-auto mt-10 flex flex-col gap-6"
        data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200">

        <!-- Nom et prénom -->
        <div class="flex flex-col md:flex-row gap-6">
          <input type="text" v-model="formData.name" placeholder="Votre nom*" required
            class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black" />
          <input type="text" v-model="formData.firstname" placeholder="Votre prénom*" required
            class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black" />
        </div>

        <!-- Email et entreprise -->
        <div class="flex flex-col md:flex-row gap-6">
          <input type="email" v-model="formData.email" placeholder="Votre email*" required
            class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black" />
          <input type="text" v-model="formData.entreprise" placeholder="Entreprise / Association / Particulier"
            class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black" />
        </div>

        <!-- Message -->
        <textarea v-model="formData.message" placeholder="Votre message*" required
          class="w-full border-b border-black bg-transparent px-2 py-2 min-h-[120px] resize-y focus:outline-none focus:border-black"></textarea>

        <!-- Bouton d'envoi -->
        <button type="submit" :disabled="buttonState !== 'Envoyer'"
          class="w-full md:w-fit bg-black text-white px-6 py-3 uppercase cursor-pointer rounded-3xl font-medium transition-opacity duration-200 disabled:opacity-60">
          {{ buttonState }}
        </button>

        <!-- Message de succès -->
        <p v-if="isSuccess" class="text-green-600 font-medium">
          Votre message a bien été envoyé !
        </p>
      </form>
    </div>


  </section>
</template>