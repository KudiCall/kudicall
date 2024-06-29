<template>
	<v-container style="max-width: 1400px; width: 100%">
		<div class="d-flex justify-space-between align-center">
			<h2 class="logo text--white pacifico" color="primary">OnCall</h2>

			<div class="d-none d-md-flex">
				<v-btn :to="n.route" :href="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
					{{ n.title }}
				</v-btn>
			</div>
			<div>
				<v-btn color="primary" rounded class="d-none d-md-inline" style="font-size: 16px">Download </v-btn>
				<v-icon color="white" size="32" icon="mdi:mdi-sort-variant" class="d-inline d-md-none"></v-icon>
				<v-btn icon @click="toggleDarkMode">
					<v-icon>{{ darkMode === "dark" ? "mdi mdi-weather-night" : "mdi mdi-white-balance-sunny" }}</v-icon>
				</v-btn>
			</div>
		</div>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			darkMode: false,
			urls: [
				{ title: "Features", route: "#features" },
				{ title: "About Us", route: "#aboutUs" },
				{ title: "Business Type", route: "#businessType" },
				{ title: "FAQ’s", route: "#faq" },
			],
		};
	},
	methods: {
		toggleDarkMode: function () {
			console.log(this.$vuetify.theme.dark);
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			this.darkMode = !this.darkMode;
		},
	},
};
</script>
