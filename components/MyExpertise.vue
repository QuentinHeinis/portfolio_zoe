<script setup>
const skills = ['Logo', 'Identité visuelle', 'Affiche', 'Print', 'Packaging', 'Réseaux sociaux', 'Site internet']
</script>
<template>

    <section class="border-b px-9 pb-10 mb-10 relative w-full overflow-hidden min-h-[30vh]">
        <h2 class="flex flex-col text-2xl md:text-6xl lg:text-8xl xl:text-9xl uppercase">
            <span class="flex items-center " data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">Expertise
            </span>
            <span class="flex items-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">créative
                :</span>
        </h2>
        <p class="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        <div class="inline-flex gap-1 pr-1" v-for="(skill, i) in skills" data-aos="fade-left"
            :data-aos-delay="300 + i * 100" data-aos-duration="2000">{{ skill }} <span
                v-if="i < skills.length - 1">-</span> <span v-else>...</span>
        </div>
        <div class="inline-flex gap-1" data-aos="fade-left" :data-aos-delay="300 + skills.length * 100" data-aos-duration="2000">Et
            bien plus selon vos besoins</div>
        </p>


    </section>

</template>