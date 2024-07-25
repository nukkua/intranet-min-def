<template>
	<section class="flex flex-col gap-4">
		<p class="font-bold text-3xl">Enlaces Relacionados</p>
		<a class="text-2xl" v-for="enlace in enlaces" :href="enlace.ref" :key="enlace.id">
			{{ enlace.title }}
		</a>

	</section>

</template>



<script setup lang="ts">
// la etiqueta  <a> cambiarla por un RouterLink

const enlaces = [
	{
		id: 1,
		title: "Cumpleanos",
		ref: "/cumpleanos",
	},
	{
		id: 2,
		title: "Guia Telefonico Institucional",
		ref: "/cumpleanos",
	},
	{
		id: 3,
		title: "Guia 2019",
		ref: "/cumpleanos",
	},
	{
		id: 4,
		title: "Preguntas frecuentes",
		ref: "/cumpleanos",
	},

]


</script>
