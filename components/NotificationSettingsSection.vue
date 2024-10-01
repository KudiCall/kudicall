<template>
	<div class="section">
		<p class="card-title">{{ title }}</p>
		<div v-for="(item, index) in items" :key="index" class="d-flex justify-space-between align-center w-100">
			<div>
				<p class="item-text">{{ item }}</p>
			</div>
			<div class="px-2">
				<v-checkbox-btn color="primary"></v-checkbox-btn>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	items: Array,
});
</script>

<style scoped>
.card-title {
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	color: #b5b5b5;
	padding-bottom: 8px;
}

.item-text {
	font-size: 16px;
	font-weight: 400;
	color: #fff;
}

.section {
	margin-bottom: 24px;
}
</style>
