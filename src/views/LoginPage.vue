<template>
	<main class="flex w-full min-h-screen items-center justify-center bg-[#1F4C88]">
		<section class="flex gap-10 bg-white p-14 rounded-md items-center">
			<LoginForm />
			<LoginImage />


		</section>




	</main>
</template>
<script lang="ts" setup>
import LoginImage from '@/components/login/LoginImage.vue';
import LoginForm from '@/components/login/LoginForm.vue';



</script>
