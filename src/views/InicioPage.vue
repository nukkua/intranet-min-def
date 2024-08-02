<template>
	<main class="flex min-h-screen w-full bg-[#3a3a3abe]">
		<div class="w-full border-4 border-black">
			<div class=" w-full h-[180px] p-4 border-4 border-black flex">
				<div class="mr-auto">
					<h1 class="text-2xl px-20 capitalize font-bold text-white mt-6">Intranet</h1>
					<h2 class="text-4xl px-20 capitalize font-bold text-white mt-2">Ministerio de Defensa</h2>
				</div>
			</div>
			<p class="pt-8 pl-8 text-2xl text-white m-8 top-10">Bienvenido </p>
			<div class="px-10 ">
				<v-carousel hide-delimiters class="bg-[#B6BBC4] ">
					<v-carousel-item :class="item.class" v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
				</v-carousel>
			</div>
			<p class="p-8 text-6xl text-white">Circulares</p>
			<Circulares />
		</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import Circulares from '@/components/inicio/Circulares.vue';

const items = ref([
  {
    src: 'https://www.mindef.gob.bo/sites/default/files/fallo-web.jpg',
	class: ''
  },
  {
    src: '/public/logo2-removebg-preview.png',
	class: ''
  },
  {
    src: '/public/logo-removebg-preview.png',
	class: 'm-auto h-64 w-[500px] p-8  hover:scale-125 transition-transform ease-in-out'
  },
]);
</script>
