import { VueReCaptcha } from "vue-recaptcha-v3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: "AIzaSyDhA4rbWBSXQUYIAPTI5zpWOVwiHQE0khI",
    loaderOptions: {
      autoHideBadge: true,
      badge: "bottomright",
      invisible: true,
    },
  });
});