<template>
	<footer class="flex flex-col bg-[#1F3C88] text-gray-100 ">
		<div class="flex gap-36 justify-center py-20">
			<DocumentosRecientes />
			<EnlacesRelacionados />

		</div>
		<hr />
		<p class="p-6">
			Intranet - Ministerio de Defensa ©{{ new Date().getFullYear() }}

		</p>
	</footer>


</template>

<script setup lang="ts">
import DocumentosRecientes from './DocumentosRecientes.vue';
import EnlacesRelacionados from './EnlacesRelacionados.vue';

</script>
