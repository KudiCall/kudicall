<template>
	<v-card class="d-flex flex-column ga-6" flat style="background-color: #141515; padding: 40px; border-radius: 40px">
		<div class="d-flex align-center justify-space-between ga-2">
			<div class="d-flex align-center ga-2">
				<v-img eager style="flex-grow: 0" width="32" height="32" :src="'/images/box.svg'" />
				<p style="font-weight: 700; color: #ececec; font-size: 24px">{{ type === "create" ? "Create category" : "Update category" }}</p>
			</div>
			<div>
				<v-img eager style="cursor: pointer" width="32" height="32" src="/images/close-circle.svg" @click="leftBtnAction" />
			</div>
		</div>

		<v-form>
			<v-text-field type="text" variant="solo" placeholder="Category name" autocomplete="off" color="#1C1C1C" class="inputText">
				<template v-slot:prepend-inner> <img src="/images/box.svg" alt="box" class="mr-2" style="height: 24px; width: 24px" /> </template>
			</v-text-field>

			<div class="mb-8" style="position: relative">
				<v-text-field type="text" variant="solo" placeholder="Ordering number" autocomplete="off" color="#1C1C1C" class="inputText">
					<template v-slot:prepend-inner> <img src="/images/tag-2.svg" alt="box" class="mr-2" style="height: 24px; width: 24px" /> </template>
				</v-text-field>
				<span style="color: #ececec; font-size: 18px; position: absolute; bottom: -10px; left: 10px">Total: 5</span>
			</div>
		</v-form>
		<div class="d-flex align-center justify-end mt-5" style="gap: 10px">
			<v-btn
				width="200"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				color="#3E3E3E"
				rounded="xl"
				size="x-large"
				@click="leftBtnAction"
				>{{ "Cancel" }}</v-btn
			>
			<v-btn
				width="200"
				class="blueBtn"
				style="font-weight: 600; font-size: 16px; line-height: 22.4px"
				rounded="xl"
				color="primary"
				size="x-large"
				@click="rightBtnAction"
				>{{ type === "create" ? "Create category" : "Update category" }}</v-btn
			>
		</div>
	</v-card>
</template>

<script setup>
defineProps({
	type: {
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
