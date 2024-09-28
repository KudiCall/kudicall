<template>
	<v-card class="d-flex flex-column ga-6" flat style="background-color: #1c1c1c; padding: 40px; border-radius: 40px">
		<div class="d-flex align-center justify-space-between ga-2 w-100">
			<p style="font-weight: 700; color: #ececec; font-size: 24px">Transaction detail</p>
			<div>
				<v-img eager style="cursor: pointer" width="32" height="32" src="/images/close-circle.svg" @click="close" />
			</div>
		</div>
		<div v-for="item in data" :key="item.name" class="d-flex justify-space-between">
			<p>{{ item.name }}</p>
			<p>{{ item.value }}</p>
		</div>
	</v-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
});
const emit = defineEmits(["close"]);

const close = () => {
	emit("close");
};
</script>
