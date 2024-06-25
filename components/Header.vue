<template>
	<v-container style="max-width: 1400px; width: 100%">
		<div class="d-flex justify-space-between align-center">
			<v-avatar size="101" style="height: auto !important" rounded="0">
				<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1719236083/OnCall/OnCall_logo.svg"></v-img>
			</v-avatar>

			<div class="d-none d-md-flex">
				<v-btn :to="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
					{{ n.title }}
				</v-btn>
			</div>
			<div>
				<v-btn color="primary" rounded class="d-none d-md-inline" style="font-size: 16px">Download </v-btn>
				<v-icon color="white" size="32" icon="mdi:mdi-sort-variant" class="d-inline d-md-none"></v-icon>
			</div>
		</div>
	</v-container>
</template>
<script>
// import { useTheme } from "vuetify";

export default {
	data() {
		return {
			// theme: useTheme(),
			// btn_radio: null,
			urls: [
				{ title: "Features", route: "#features" },
				{ title: "About Us", route: "#aboutUs" },
				{ title: "Business Type", route: "#businessType" },
				{ title: "FAQ’s", route: "#faq" },
			],
		};
	},
	methods: {
		toggleTheme() {
			this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
		},
	},
};
</script>
