<template>
	<div :style="stickyw ? 'position: relative;' : 'position: sticky;'" class="topbar" style="border-bottom: 1px solid rgba(255, 255, 255, 0.05)">
		<v-container class="py-0" style="max-width: 1400px">
			<div class="d-flex justify-space-between align-center my-5">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd1b3b4d0-5fd7-4898-ab8a-5803e6cfc2fb.png?alt=media&token="
					alt="KudiCall Logo"
					class="logo"
					height="24"
					style="display: block; max-width: none; object-fit: contain;"
				/>

				<div class="d-none d-md-flex">
					<p
						@click="$router.push(n.route)"
						class="mx-4 cursor-pointer"
						flat
						v-for="n in urls"
						:key="n.title"
						style="font-size: 16px; letter-spacing: normal"
					>
						{{ n.title }}
					</p>
				</div>
				<div class="d-flex align-center">
					<v-btn
						@click="openWaitlist"
						color="primary"
						rounded
						class="px-5 d-none d-md-inline"
						size="large"
						style="font-size: 16px; letter-spacing: normal; line-height: 21.82px"
					>
						Join Waitlist
						<!-- <v-img
							eager
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc7b8c527-0340-48b0-b85b-9acfc7a13684.png?alt=media&token="
							class="ml-2"
							width="24"
							height="24"
						></v-img> -->
					</v-btn>
					<v-btn v-if="$vuetify.display.mobile" class="d-block d-md-none" rounded="xl" size="40" icon flat color="transparent" @click.stop="openNav">
						<v-icon color="white" size="32" icon="mdi:mdi-text"></v-icon>
					</v-btn>
					<!-- <v-btn icon @click="toggleTheme" class="ml-4">
						<v-icon>{{ darkMode ? "mdi mdi-weather-night" : "mdi mdi-white-balance-sunny" }}</v-icon>
					</v-btn> -->
				</div>
			</div>
		</v-container>
	</div>

	<!-- Responsive navbar -->
	<v-navigation-drawer
		v-if="$vuetify.display.mobile"
		v-model="drawer"
		temporary
		style="z-index: 2000; position: fixed; background-color: #0c0d0d; color: white"
	>
		<div class="d-flex align-center justify-space-between px-4 py-4">
			<img
				src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd1b3b4d0-5fd7-4898-ab8a-5803e6cfc2fb.png?alt=media&token="
				alt="KudiCall Logo"
				class="logo"
				height="24"
				style="display: block; max-width: none; object-fit: contain;"
			/>
			<v-icon icon="mdi mdi-close" @click.stop="drawer = false"></v-icon>
		</div>
		<v-divider></v-divider>
		<v-list :items="urls" class="d-flex flex-column align-start ga-5">
			<p
				@click="$router.push(n.route)"
				class="mx-4 cursor-pointer"
				flat
				v-for="n in urls"
				:key="n.title"
				style="font-size: 16px; letter-spacing: normal"
			>
				{{ n.title }}
			</p>
		</v-list>
	</v-navigation-drawer>


	<!-- Waitlist Modal -->
	<WaitlistModal ref="waitlistModal" />
</template>

<script>
import { useTheme } from "vuetify";
import WaitlistModal from "./WaitlistModal.vue";

export default {
	components: {
		WaitlistModal,
	},
	data() {
		return {
			theme: useTheme(),
			drawer: false,
			maxwidth: "1400px",
			sticky: false,
			darkMode: true,
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
		openWaitlist() {
			this.$refs.waitlistModal.open();
		},
		openNav() {
			this.drawer = true;
		},
		toggleTheme() {
			const isDark = this.theme.global.current.dark;
			this.theme.global.name = isDark ? "lightThemeConfig" : "darkThemeConfig";
			this.darkMode = !isDark;
		},
	},
};
</script>
