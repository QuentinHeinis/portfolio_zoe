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
      data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="2000"></span>

    <h1 class="flex flex-col mt-16 text-2xl md:text-6xl lg:text-8xl xl:text-9xl uppercase">
      <span class="flex items-center lg:-mt-12" data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">
        Me contacter
      </span>
    </h1>

    <!-- Contenu -->
    <div class="flex flex-col lg:flex-row gap-8 mt-8">
      <!-- Bloc infos -->
      <div class="gap-9 text-xs hidden lg:flex">
        <div class="flex flex-col" data-aos="fade-right" data-aos-delay="600" data-aos-duration="2000">
          <p>Designeuse graphique française</p>
          <p>Basée aux États-Unis</p>
          <p>Michigan</p>
        </div>
        <div class="flex flex-col" data-aos="fade-right" data-aos-delay="1600" data-aos-duration="2000">
          <p>Designeuse de 25 ans</p>
          <p>Diplômée d’un master</p>
          <p>en design de service</p>
          <p>et identité de marque</p>
        </div>
        <div class="flex flex-col" data-aos="fade-right" data-aos-delay="2600" data-aos-duration="2000">
          <p>Expérimentée sur Adobe</p>
          <p>Photoshop, Illustrator</p>
          <p>InDesign, XD</p>
        </div>
      </div>
    </div>
    <form
  @submit="handleSubmit"
  ref="form"
  class="w-full max-w-3xl mx-auto mt-10 flex flex-col gap-6"
  data-aos="fade-up"
  data-aos-delay="1500"
  data-aos-duration="1200"
>
  <!-- Titre -->
  <h2
    class="text-xl md:text-2xl font-semibold uppercase tracking-tight"
    data-aos="fade-up"
    data-aos-delay="1600"
    data-aos-duration="1000"
  >
    Parlez-moi de votre <span class="text-accent">projet !</span>
  </h2>

  <!-- Nom et prénom -->
  <div
    class="flex flex-col md:flex-row gap-6"
    data-aos="fade-up"
    data-aos-delay="1700"
    data-aos-duration="1000"
  >
    <input
      type="text"
      v-model="formData.name"
      placeholder="Votre nom*"
      required
      class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black"
    />
    <input
      type="text"
      v-model="formData.firstname"
      placeholder="Votre prénom*"
      required
      class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black"
    />
  </div>

  <!-- Email et entreprise -->
  <div
    class="flex flex-col md:flex-row gap-6"
    data-aos="fade-up"
    data-aos-delay="1800"
    data-aos-duration="1000"
  >
    <input
      type="email"
      v-model="formData.email"
      placeholder="Votre email*"
      required
      class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black"
    />
    <input
      type="text"
      v-model="formData.entreprise"
      placeholder="Entreprise / Association / Particulier"
      class="w-full border-b border-black bg-transparent px-2 py-2 focus:outline-none focus:border-black"
    />
  </div>

  <!-- Message -->
  <textarea
    v-model="formData.message"
    placeholder="Votre message*"
    required
    class="w-full border-b border-black bg-transparent px-2 py-2 min-h-[120px] resize-y focus:outline-none focus:border-black"
    data-aos="fade-up"
    data-aos-delay="1900"
    data-aos-duration="1000"
  ></textarea>

  <!-- Bouton d'envoi -->
  <button
    type="submit"
    :disabled="buttonState !== 'Envoyer'"
    class="w-full md:w-fit bg-black text-white px-6 py-3 uppercase tracking-wide font-medium transition-opacity duration-200 disabled:opacity-60"
    data-aos="fade-up"
    data-aos-delay="2000"
    data-aos-duration="1000"
  >
    {{ buttonState }}
  </button>

  <!-- Message de succès -->
  <p
    v-if="isSuccess"
    class="text-green-600 font-medium"
    data-aos="fade-in"
    data-aos-delay="2100"
    data-aos-duration="800"
  >
    Votre message a bien été envoyé !
  </p>
</form>


  </section>
</template>