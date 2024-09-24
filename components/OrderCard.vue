<template>
	<div class="d-flex align-center" style="gap: 12px">
		<div style="width: 90px; border-radius: 20px">
			<v-img eager style="border-radius: 2px" width="89" height="96" cover :src="product.image"></v-img>
		</div>
		<div class="d-flex justify-space-between" style="flex: 1">
			<div class="d-flex flex-column justify-space-between" style="gap: 15px">
				<p style="font-weight: 700; font-size: 18px">{{ product.name }}</p>
				<p style="font-weight: 600">
					Units <span class="ml-3">{{ product.quantity }}</span>
				</p>
			</div>
		</div>
		<p style="font-weight: 600">${{ product.price }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
	product: {
		type: Object,
		required: true,
	},
});
</script>

<style></style>
