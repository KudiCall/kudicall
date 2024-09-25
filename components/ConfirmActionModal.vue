<template>
	<v-card class="d-flex flex-column ga-6" flat style="background-color: #1c1c1c; padding: 40px; border-radius: 40px">
		<div class="d-flex align-center justify-space-between ga-2">
			<div class="d-flex align-center ga-2">
				<v-img eager style="flex-grow: 0" width="32" height="32" :src="img || '/images/pw4u5fi1rjkbis1ppptk.png'" />
				<p style="font-weight: 700; color: #ececec; font-size: 24px">{{ title || "Confirm Action" }}</p>
			</div>
			<div>
				<v-img eager style="cursor: pointer" width="32" height="32" src="/images/close-circle.svg" @click="leftBtnAction" />
			</div>
		</div>

		<p style="color: #ececec; font-size: 20px; font-weight: 400; line-height: 28px">
			{{ message }}
		</p>
		<div style="color: #b5b5b5; font-size: 18px; font-weight: 500">
			<p class="mb-3" style="color: #ececec">{{ infoTitle }}</p>
			<p v-for="(item, index) in info" :key="index" class="mb-1">
				<v-icon size="16" color="#B5B5B5">far fa-circle-check</v-icon>
				<span class="ml-1">
					{{ item }}
				</span>
			</p>
		</div>
		<div class="d-flex align-center justify-end mt-5" style="gap: 10px">
			<v-btn
				width="200"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				color="#3E3E3E"
				rounded="xl"
				size="x-large"
				@click="leftBtnAction"
				>{{ leftBtn }}</v-btn
			>
			<v-btn
				width="200"
				:class="rightBtn === 'Delete' || rightBtn === 'Logout' ? 'redBtn' : 'blueBtn'"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				rounded="xl"
				color="primary"
				size="x-large"
				@click="rightBtnAction"
				>{{ rightBtn }}</v-btn
			>
		</div>
	</v-card>
</template>

<script setup>
defineProps({
	title: {
		type: String,
	},
	message: {
		type: String,
		required: true,
	},
	leftBtn: {
		type: String,
		required: true,
	},
	rightBtn: {
		type: String,
		required: true,
	},
	leftBtnAction: {
		type: Function,
		required: true,
	},
	rightBtnAction: {
		type: Function,
		required: true,
	},
	img: {
		type: String,
	},
	infoTitle: {
		type: String,
	},
	info: {
		type: Array,
	},
});
</script>

<style scoped>
.redBtn {
	background: linear-gradient(180deg, #f97066 2.68%, #b42318 84.82%);
}

.blueBtn {
	background: linear-gradient(180deg, #1288fc 15%, #0b5297 85.96%);
}
</style>
