<script lang="ts" setup>
useSeoMeta({
  title: "Zoé Garcia - Mentions légales",
  ogTitle: "Zoé Garcia - Mentions légales",
  ogImage: "/favicon.png",
});

const data = ref({
  nom: "Zoé Garcia",
  mail: "contact@zoegarcia.fr",
  url: "zoegarcia.fr",
  adresse1: "Epinal",
  adresse2: "",
  formInfo:['Nom - Prénom', 'Email', 'Entreprise (facultatif)'],

  // design information
  design: {
    name: "Quentin Heinis",
    url: "https://www.heinis.dev/",
  },

  // developer information
  developer: {
    name: "Quentin Heinis",
    url: "https://www.heinis.dev/",
  },
  // hosting information
  hosting: {
    name: "Vercel",
    url: "https://www.vercel.com/",
  },
});

</script>

<template>
<section class="container">
      <h1 class="big-black-title">Mentions Légales</h1>
      <h2>INFORMATIONS LÉGALES</h2>
      <h3><b>A.</b> Design du site</h3>
      <ul class="undotted">
        <p>Le site {{ data.url }} a été crée par :</p>
        <li><a :href="data.design.url">{{ data.design.name }}</a></li>
      </ul>
      <h3><b>B.</b> Développement du site</h3>
      <ul class="undotted">
        <p>Le site {{ data.url }} a été crée par :</p>
        <li><a :href="data.developer.url">{{ data.developer.name }}</a></li>
      </ul>
      <h3><b>C.</b> Éditeur du site</h3>
      <p>Le site {{ data.url }} est édité par&nbsp;:</p>
      <ul class="undotted">
        <li>{{ data.nom }}</li>
        <li>{{data.adresse1}}</li>
        <li v-if="data.adresse2">{{data.adresse2}}</li>
      </ul>
      <h3><b>D.</b> Directeur de publication</h3>
      <ul class="undotted">
        <li>{{ data.nom }}</li>
        <li>Adresse e-mail de contact&nbsp;: {{ data.mail }}</li>
      </ul>
      <h3><b>E.</b> Hébergeur du site</h3>
      <p>
        Le site {{ data.url }} est hébergé par&nbsp;:
        <a href="https://www.vercel.com/">Vercel</a>
      </p>
      <h2>CONFIDENTIALITÉ</h2>
      <h3><b>A.</b> Données collectées et traitées</h3>
      <p>
        Les données à caractère personnel collectées sur le site {{ data.url }} sont
        les suivantes&nbsp;:
      </p>
      <ul class="undotted">
        <li v-for="info in data.formInfo">{{ info }}</li>
      </ul>
      <p>
        Ces données sont collectées lorsque l'Utilisateur effectue l'une des
        opérations suivantes sur le site&nbsp;:
      </p>
      <p class="ml-tab">
        - Lorsqu'un utilisateur utilise le formulaire de contact.
      </p>
      <p>
        Le responsable du traitement conservera dans ses systèmes informatiques
        du site et dans des conditions raisonnables de sécurité l'ensemble des
        données collectées pour une durée de&nbsp;: 3 ans.
      </p>
      <p>
        La collecte et le traitement des données répondent aux finalités
        suivantes&nbsp;:
      </p>
      <p class="ml-tab">
        - Les coordonnées recueillies sont enregistrées afin de pouvoir
        identifier et contacter les utilisateurs ayant utilisé le formulaire de
        contact.
      </p>
      <h3><b>B.</b> Hébergement des données</h3>
      <p>
        Tel que mentionné plus haut, le site {{ data.url }}est hébergé par&nbsp;:
        Vercel
      </p>
      <h3><b>C.</b> Le responsable du traitement des données</h3>
      <p>
        Le responsable du traitement des données à caractère personnel est le
        référent RGPD.
      </p>
      <p class="ml-tab">
        Le responsable du traitement des données peut être contacté par mail à
        l'adresse {{ data.mail }}
      </p>
      <h3>
        <b>D.</b> Droits de l'utilisateur et procédures de mise en oeuvre des
        droits de l'utilisateur
      </h3>
      <p>
        Conformément à la réglementation concernant le traitement des données à
        caractère personnel, l'Utilisateur possède les droits ci-après énumérés.
      </p>
      <p>
        Afin que le responsable du traitement des données fasse droit à sa
        demande, l'utilisateur est tenu de lui communiquer&nbsp;: ses prénoms et
        nom ainsi que son adresse e-mail en le contactant par mail à l’adresse
        suivante&nbsp;: {{ data.mail }}
      </p>
      <p>
        Le responsable du traitement des données est tenu de répondre à
        l'Utilisateur dans un délai de 30 (trente) jours maximum.
      </p>
      <h4>1. Droit d'accès, de rectification et droit à l'oubli</h4>
      <p>
        L'utilisateur peut prendre connaissance, mettre à jour, modifier ou
        demander la suppression des données le concernant, en respectant la
        procédure ci-après énoncée&nbsp;:
      </p>
      <p class="ml-tab">
        L'utilisateur doit envoyer un e-mail au responsable du traitement des
        données personnelles à l’adresse {{ data.mail }} en précisant l'objet
        de sa demande.
      </p>
      <h4>2. Droit à la portabilité des données</h4>
      <p>
        L'Utilisateur a le droit de demander la portabilité de ses données
        personnelles, détenues par le site, vers un autre site, en se conformant
        à la procédure ci-après&nbsp;:
      </p>
      <p class="ml-tab">
        L'utilisateur doit envoyer un e-mail au responsable du traitement des
        données personnelles à l’adresse {{ data.mail }} en précisant l'objet
        de sa demande.
      </p>
      <h4>
        3. Droit à la limitation et à l'opposition du traitement des données
      </h4>
      <p>
        Enfin, l'Utilisateur a le droit de demander la limitation ou de
        s'opposer au traitement de ses données par le site, sans que le site ne
        puisse refuser, sauf à démontrer l'existence de motifs légitimes et
        impérieux, pouvant prévaloir sur les intérêts et les droits et libertés
        de l'Utilisateur.
      </p>
      <h4>4. Droit de saisir l'autorité de contrôle compétente</h4>
      <p>
        Dans le cas où le responsable du traitement des données décide de ne pas
        répondre à la demande de l'Utilisateur, et que l'Utilisateur souhaite
        contester cette décision, il est en droit de saisir la CNIL (Commission
        Nationale de l'Informatique et des Libertés,
        <a href="https://www.cnil.fr">www.cnil.fr</a>) ou tout juge compétent.
      </p>
      <h3><b>E.</b> Obligations du responsable du traitement des données</h3>
      <p>
        Le responsable du traitement s'engage à protéger les données à caractère
        personnel collectées, à ne pas les transmettre à des tiers sans que
        l'utilisateur n'en ait été informé et à respecter les finalités pour
        lesquelles ces données ont été collectées.
      </p>
      <p>
        Le site dispose d'un certificat SSL afin de garantir que les
        informations et le transfert des données transitant par le site sont
        sécurisés.
      </p>
      <p>
        De plus, le responsable du traitement des données s'engage à notifier
        l'utilisateur en cas de rectification ou de suppression des données, à
        moins que cela n'entraîne pour lui des formalités, coûts et démarches
        disproportionnés.
      </p>
      <p>
        Dans le cas où l'intégrité, la confidentialité ou la sécurité des
        données à caractère personnel de l'Utilisateur est compromise, le
        responsable du traitement s'engage à informer l'Utilisateur par tout
        moyen.
      </p>
    </section>
</template>

<style scoped>
main {
  background-color: #f0fbf0;
}
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 120px 20px;
  color: var(--color-textColor);
}

.container a {
  color: var(--color-textColor);
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
