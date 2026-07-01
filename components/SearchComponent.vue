<template>
	<v-text-field v-model="searchInput" class="mt-5" variant="solo" :placeholder="placeholder">
		<template v-slot:append-inner>
			<v-avatar v-if="!searchInput" size="32" class="pa-2" color="#313131">
				<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723051734/OnCall/search-normal_zl2ush.svg" alt="search" cover></v-img>
			</v-avatar>
			<v-avatar @click="searchInput = ''" v-else size="32" color="#b42921" class="cursor-pointer">
				<v-icon size="20">mdi mdi-close</v-icon>
			</v-avatar>
		</template>
		<template v-slot:prepend-inner>
			<v-avatar v-if="searchInput" size="32" class="pa-2" color="#ECECEC">
				<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723437762/OnCall/search-normal_otres1.svg" alt="search" cover></v-img>
			</v-avatar>
		</template>
	</v-text-field>
</template>

<script setup>
const props = defineProps({
	placeholder: {
		type: String,
		requires: true,
	},
});
const searchInput = ref("");
</script>

<style></style>
