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
				<!-- <v-icon color="white" size="32" icon="mdi:mdi-sort-variant" class="d-inline d-md-none"></v-icon> -->
				<!-- <v-menu>
					<template v-slot:activator="{ props }">
						<v-icon v-bind="props" color="white" size="32" icon="mdi:mdi-sort-variant" class="d-inline d-md-none"></v-icon>
					</template>
					<v-btn :to="n.route" :href="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
						{{ n.title }}
					</v-btn>
				</v-menu> -->
				<v-btn icon @click="toggleDarkMode">
					<v-icon>{{ darkMode === "dark" ? "mdi mdi-weather-night" : "mdi mdi-white-balance-sunny" }}</v-icon>
				</v-btn>
				<v-btn class="d-block d-md-none" rounded="xl" size="40" icon flat color="transparent" @click.stop="openNav">
					<v-avatar size="20">
						<v-img contain src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1717990457/umoja/menu_smbzbn.svg"></v-img> </v-avatar
				></v-btn>
			</div>
		</div>

		<!-- Responsive navbar -->
		<v-layout class="d-block d-md-none">
			<v-navigation-drawer v-model="drawer" :location="left" temporary style="width: 100%; height: 100vh">
				<div class="d-flex align-center justify-space-between px-4">
					<v-avatar class="mr-8" @click="$router.push('/')" size="102" height="" style="cursor: pointer; height: 65px !important" rounded="0">
						<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718615349/umoja/Frame_4_emeelq_ajydmg.png"></v-img>
					</v-avatar>
					<v-icon icon="mdi mdi-close" @click.stop="drawer = false"></v-icon>
				</div>
				<v-divider></v-divider>

				<v-list :items="urls" class="d-flex flex-column align-start">
					<v-btn
						:to="n.route"
						v-for="n in urls"
						variant="text"
						class=""
						flat
						:key="n.title"
						style="font-weight: 700; font-size: 16px; line-height: 22.4px; color: #2a2a2a"
					>
						{{ n.title }}
					</v-btn>
				</v-list>
			</v-navigation-drawer>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
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
		openNav() {
			this.drawer = true;
		},
	},
};
</script>
