<script lang="ts" setup>
useSeoMeta({
  title: "Quentin Heinis - Mentions légales",
  ogTitle: "Quentin Heinis - Mentions légales",
  ogImage: "/favicon.png",
});

const data = ref({
  nom: "Quentin Heinis",
  mail: "quentin@heinis.dev",
  url: "https://portfolio-template-heinis.vercel.app/",
  adresse1: "39140 Bletterans",
  adresse2: "",
});
</script>

<template>
  <section class="container pt-12 px-3">
    <h1 class="big-black-title">Mentions Légales</h1>
    <h2>INFORMATIONS LÉGALES</h2>
    <h3><b>A.</b> Créateur du site</h3>
    <ul class="undotted">
      <li><a href="https://www.heinis.dev/">Quentin Heinis</a></li>
    </ul>
    <h3><b>B.</b> Éditeur du site</h3>
    <p>Le site {{ data.url }} est édité par&nbsp;:</p>
    <ul class="undotted">
      <li>Quentin Heinis</li>
      <li>{{ data.adresse1 }}</li>
      <li>{{ data.adresse2 }}</li>
    </ul>
    <h3><b>C.</b> Directeur de publication</h3>
    <ul class="undotted">
      <li>Quentin Heinis</li>
      <li>Adresse e-mail de contact&nbsp;: {{ data.mail }}</li>
    </ul>
    <h3><b>D.</b> Hébergeur du site</h3>
    <p>
      Le site {{ data.url }} est hébergé par&nbsp;:
      <a href="https://www.vercel.com/">Vercel</a>
    </p>
    <p>340 S Lemon Ave #4133, Walnut</p>
    <p>CA 91789, États-Unis</p>
  </section>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 20px;
  color: #fff;
}
.container a {
  color: #fff;
  text-decoration: underline;
}
.container .undotted {
  list-style-type: none;
  padding-left: 0;
}
.container .undotted li {
  margin-bottom: 10px;
}
.container .ml-tab {
  margin-left: 20px;
}
.container h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.container h2 {
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
}
.container h3 {
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
}
.container h4 {
  font-size: 1.25rem;
  margin-top: 10px;
  margin-bottom: 5px;
}
.container p {
  font-size: 1rem;
  margin-bottom: 10px;
}
.container b {
  font-weight: bold;
}
.container .big-black-title {
  font-size: 3rem;
  margin-bottom: 20px;
}
</style>
