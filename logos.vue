<script setup>
const { client } = usePrismic();

const { data } = await useAsyncData("logos", async () => {
  return await client.getAllByType("logos");
});
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <div class="border-b pb-16">
    <h1
      class="uppercase text-4xl md:text-6xl lg:text-8xl xl:text-9xl w-1/3 pt-4"
    >
      Tous mes Logos
    </h1>
    <div class="flex items-center justify-end gap-4 -mt-5 -mb-5">
      <img src="/Flower.svg" alt="" class="object-contain h-5 md:h-12" />
      <img src="/sun.svg" alt="" class="object-contain h-5 md:h-12" />
    </div>
    <div class="flex flex-col gap-10 mt-10">
      <div
        v-for="logo in data"
        class="w-full border-t flex flex-wrap justify-between pt-8"
        :key="logo.uid"
      >
        <div class="flex flex-col w-1/2 md:justify-end gap-4 cursor-none">
          <h2
            class="text-2xl md:text-5xl lg:text-6xl xl:text-7xl uppercase w-fit"
          >
            {{ logo.data.titre[0].text }}
          </h2>
        </div>
        <div
          class="w-full md:h-auto md:w-2/5 h-full max-h-[28rem] xl:max-h-[40rem] flex cursor-none overflow-hidden"
        >
          <img
            :src="logo.data.logo.url"
            :alt="logo.data.logo.alt"
            class="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
  <MySEO query="seo_logos" />
</template>
