<template>
	<main class="flex min-h-screen w-full bg-[#1F3C88]">
		<div class="w-full border-4 border-black" >	
			<div class=" w-full h-[180px] p-4 border-4 border-black flex">
				<div class="mr-auto">
					<h1 class="text-2xl px-16 capitalize font-bold" >Intranet</h1>
					<h2 class="text-4xl px-16 capitalize font-bold">Ministerio de Defensa</h2>
				</div>
				<img class="h-[150px] ml-auto" src="https://www.mindef.gob.bo/sites/default/files/minlogo.png" alt="Logo2">
			</div>
			<p class="pt-8 pl-8 text-2xl">Bienvenido </p>
			<p class="p-8 text-6xl">Circulares</p>
			<Circulares/>
		</div>
	</main>
</template>

<script setup>
import Circulares from '@/components/inicio/Circulares.vue';
</script>
