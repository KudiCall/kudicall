<template>
	<div class="background-container">
		<div class="gradient-overlay"></div>
		<div class="content-container">
			<v-container
				style="width: 100%; max-width: 1400px; color: #fff"
				class="d-flex flex-column flex-md-row align-md-center justify-space-between ga-4 ga-md-0 py-6 py-md-16 px-4"
			>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd1b3b4d0-5fd7-4898-ab8a-5803e6cfc2fb.png?alt=media&token="
					alt="KudiCall Logo"
					class="logo"
					height="24"
					style="display: block; max-width: none; object-fit: contain;"
				/>
				<div class="d-flex justify-center ga-4" style="font-size: 16px; font-weight: 400">
					<p
						:to="n.route"
						:href="n.route"
						variant="text"
						class="px-0 px-md-4 cursor-pointer"
						style="line-height: 19.09px"
						flat
						v-for="n in urls"
						:key="n.title"
					>
						{{ n.title }}
					</p>
				</div>
				<div>
					<v-avatar v-for="s in social" :key="s.title" class="mx-2" size="40">
						<v-btn :icon="s.icon" variant="text"> </v-btn>
						<!-- <v-icon size="20" style="color: #fff" class="cursor-pointer">{{ s.icon }}</v-icon> -->
					</v-avatar>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",

	data() {
		return {
			urls: [
				{ title: "Terms of Use", route: "#" },
				{ title: "Privacy Policy", route: "#" },
				{ title: "Security", route: "#" },
			],
			social: [
				{ title: "Instagram", icon: "fab fa-instagram" },
				{ title: "Twitter", icon: "fab fa-x-twitter" },
				{ title: "Facebook", icon: "fab fa-facebook-f" },
			],
		};
	},
};
</script>

<style scoped>
.background-container {
	position: relative;
	background-image: url("https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc2f9f179-c440-4f94-b037-b22cd65e53c8.png?alt=media&token="); /* Replace with your image path */
	background-size: contain;
	background-position: center;
	height: 581px; /* Adjust the height as needed */
}

.gradient-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(180deg, rgba(12, 13, 13, 0) 0%, #0c0d0d 100%);
}

.content-container {
	position: absolute;
	z-index: 1;
	bottom: 0;
	width: 100%;
	margin: auto;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	background-color: #0c0d0d;
}

@media screen and (max-width: 768px) {
	.background-container {
		background-image: url("https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fc2f9f179-c440-4f94-b037-b22cd65e53c8.png?alt=media&token=");
		height: 478px;
	}
}
</style>
