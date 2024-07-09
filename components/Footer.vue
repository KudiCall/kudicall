<template>
	<div class="background-container">
		<div class="gradient-overlay"></div>
		<div class="content-container">
			<v-container
				style="width: 100%; max-width: 1400px; color: #fff"
				class="d-flex flex-column flex-md-row justify-space-between ga-4 ga-md-0 py-6 py-md-16 px-4"
			>
				<h2 class="logo pacifico">OnCall</h2>
				<div class="d-flex justify-center text--white ga-3" style="font-size: 16px; font-weight: 400">
					<v-btn :to="n.route" :href="n.route" variant="text" class="px-0 px-md-4" flat v-for="n in urls" :key="n.title" style="font-size: 16px">
						{{ n.title }}
					</v-btn>
				</div>
				<div>
					<v-avatar v-for="s in social" :key="s.title" class="mx-2" size="40">
						<v-icon size="20" style="color: #fff" class="cursor-pointer">{{ s.icon }}</v-icon>
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
	background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719693233/OnCall/On_Call_vgvwkf.png"); /* Replace with your image path */
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
		background-image: url("https://res.cloudinary.com/dd26v0ffw/image/upload/v1719694262/OnCall/On_Call_1mobile.png");
		height: 478px;
	}
}
</style>
