<template>
	<div class="flex flex-col gap-8 w-[350px]">
		<h2 class="text-5xl font-bold">Iniciar Sesion</h2>
		<form action="" class="flex flex-col gap-8">
			<input class="border p-4 border-black text-lg" type="text" placeholder="User" v-model="user" />
			<input class="border p-4 border-black text-lg" type="password" placeholder="Password"
				v-model="password" />

			<button class="bg-black text-white py-3 font-semibold" type="submit">Iniciar
				Sesion</button>
		</form>
		<footer class="flex gap-1">
			<p>Intranet - Ministerio de defensa</p>
			<p>{{ new Date().getFullYear() }}</p>

		</footer>
	</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const user = ref('');
const password = ref('');

</script>
