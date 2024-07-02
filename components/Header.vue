<template>
	<div :style="stickyw ? ' position: relative;' : ' position: sticky;'" class="topbar">
		<v-container class="py-0" style="max-width: 1400px">
			<div class="d-flex justify-space-between align-center my-5">
				<h2 class="logo text--white pacifico" color="primary">OnCall</h2>

				<div class="d-none d-md-flex">
					<v-btn :to="n.route" :href="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
						{{ n.title }}
					</v-btn>
				</div>
				<div class="d-flex align-center">
					<v-btn color="primary" rounded class="d-none d-md-inline" style="font-size: 16px">Download </v-btn>
					<v-btn v-if="$vuetify.display.mobile" rounded="xl" size="40" icon flat color="transparent" @click.stop="openNav">
						<v-icon color="white" size="32" icon="mdi:mdi-sort-variant" class=""></v-icon>
					</v-btn>
					<v-btn icon @click="toggleTheme">
						<v-icon>{{ darkMode === "dark" ? "mdi mdi-weather-night" : "mdi mdi-white-balance-sunny" }}</v-icon>
					</v-btn>
				</div>
			</div>
		</v-container>
	</div>

	<!-- Responsive navbar -->
	<v-layout v-if="$vuetify.display.mobile">
		<v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined" temporary style="width: 100%; height: 100vh">
			<div class="d-flex align-center justify-space-between px-4">
				<h2 class="logo text--white pacifico" color="primary">OnCall</h2>
				<v-icon icon="mdi mdi-close" @click.stop="drawer = false"></v-icon>
			</div>
			<v-divider></v-divider>

			<v-list :items="urls" class="d-flex flex-column align-start">
				<v-btn :to="n.route" :href="n.route" variant="text" class="mx-1" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
					{{ n.title }}
				</v-btn>
			</v-list>
		</v-navigation-drawer>
	</v-layout>
</template>
<style></style>
<script>
import { useTheme } from "vuetify";

export default {
	data() {
		return {
			theme: useTheme(),

			drawer: false,
			maxwidth: "1400px",
			sticky: false,
			darkMode: true,
			items: [
				{
					title: "Foo",
					value: "foo",
				},
				{
					title: "Bar",
					value: "bar",
				},
				{
					title: "Fizz",
					value: "fizz",
				},
				{
					title: "Buzz",
					value: "buzz",
				},
			],
		};
	},
	computed: {
		stickyw() {
			return this.sticky !== undefined ? this.sticky : false;
		},

		inpwidth() {
			return this.maxwidth == undefined ? "300px" : "295px";
		},
		urls() {
			return [
				{ title: "Features", route: "#features" },
				{ title: "About Us", route: "#aboutUs" },
				{ title: "Business Type", route: "#businessType" },
				{ title: "FAQ’s", route: "#faq" },
			];
		},
	},
	methods: {
		// toggleTheme() {
		// 	this.theme.global.name.value = this.theme.global.current.value.dark ? "light" : "dark";
		// 	this.darkMode = !this.darkMode;
		// },
		openNav() {
			this.drawer = true;
		},
	},
};
</script>
