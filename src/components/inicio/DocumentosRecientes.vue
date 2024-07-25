<template>
	<section class="flex flex-col gap-4">
		<p class="font-bold text-3xl">Documentos Recientes</p>
		<a class="text-2xl" v-for="doc in documentosRecientes" :href="doc.ref" :key="doc.id">
			{{ doc.title }}
		</a>

	</section>


</template>
<script setup>
import { onMounted } from 'vue';


const documentosRecientes = [
	{
		id: 1,
		title: "Ingreso al formulario de Evaluacion POAI 2022",
		ref: "/",
	},
	{
		id: 2,
		title: "PAC 2021",
		ref: "/",
	},
	{
		id: 3,
		title: "PAC 2021",
		ref: "/",
	},
]

</script>
