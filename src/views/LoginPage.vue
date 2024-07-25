<template>
	<main class="flex flex-col w-full min-h-screen items-center justify-center bg-[#1F4C88]">
		<section class="flex flex-col gap-10 bg-white py-10 px-14 rounded-md">
			<h1 class="text-5xl text-center font-bold uppercase">Intranet</h1>
			<img class="h-64" src="https://sistemas.mindef.gob.bo/socorros/logo.jpg" alt="">
			<form action="" class="flex flex-col gap-8">
				<input class="input" type="text" placeholder="User" v-model="user" />
				<input class="input" type="password" placeholder="Password" v-model="password" />

				<button class="bg-black text-white py-3" type="submit">Iniciar Sesion</button>
			</form>
			<footer>
				<p>Intranet - Ministerio de defensa</p>
				<p>{{ new Date().getFullYear() }}</p>

			</footer>
		</section>


	</main>


</template>
<script lang="ts" setup>
import { watch, ref } from 'vue';

const user = ref('');
const password = ref('');

watch(user, () => {
	console.log(user.value);
})



</script>

<style scoped>
input {
	@apply p-3 border border-black
}
</style>
