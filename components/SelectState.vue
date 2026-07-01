<template>
	<v-card class="pa-2 mt-4" width="275px" height="400px" style="background-color: #141515; border-radius: 12px">
		<!-- Title -->
		<v-card-title class="d-flex justify-start">
			<div>
				<h3 style="font-weight: 700; font-size: 18px; line-height: 24.5px; color: #ececec">{{ title }}</h3>
				<p style="font-weight: 400; font-size: 16px; line-height: 22.4px; color: #8f8f8f">{{ description }}</p>
			</div>
		</v-card-title>

		<!-- Apply Button -->
		<div class="my-3 px-4">
			<v-btn class="custom_btn" size="large" rounded @click="applySelection">Apply</v-btn>
		</div>

		<!-- All Items Option -->
		<div class="px-4 mt-8 d-flex justify-space-between align-center">
			<div class="d-flex align-center ga-3">
				<v-img eager src="/images/global.svg" width="40" height="40" />
				<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">All</p>
			</div>
			<div>
				<v-radio color="#1288FC" @click.stop v-model="selectedItem" :value="'all'"></v-radio>
			</div>
		</div>

		<v-divider class="mt-4" color="#303030" style="border: 1px solid #6c6666"></v-divider>

		<!-- Individual Items with checkboxes -->
		<div class="px-4" style="background-color: transparent">
			<div v-for="item in items" :key="item" class="d-flex justify-space-between align-center">
				<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ item.text }}</p>
				<v-checkbox color="#1288FC" class="my-checkbox" @click.stop v-model="selectedItems" :value="item.value"></v-checkbox>
			</div>
		</div>
	</v-card>
</template>

<script>
import { ref } from "vue";

export default {
	name: "SelectState",
	props: {
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: "Select an option",
		},
		items: {
			type: Array,
			required: true,
		},
		allIcon: {
			type: String,
			default: "/images/global.svg", // Default icon for "All"
		},
	},
	setup(props, { emit }) {
		// Reactive references
		const selectedItem = ref("all"); // Selected "All" or specific
		const selectedItems = ref([]); // Selected specific items

		// Method to apply selection
		const applySelection = () => {
			emit("apply", {
				selectedItem: selectedItem.value,
				selectedItems: selectedItems.value,
			});
		};

		// Expose variables and methods to the template
		return {
			selectedItem,
			selectedItems,
			applySelection,
		};
	},
};
</script>

<style scoped>
.custom_btn {
	width: 150px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}
</style>
