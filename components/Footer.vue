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
					<NuxtLink
						v-for="n in urls"
						:key="n.title"
						:to="n.route"
						class="footer-link px-0 px-md-4"
					>
						{{ n.title }}
					</NuxtLink>
				</div>
				<div>
					<v-avatar v-for="s in social" :key="s.title" class="mx-2" size="40">
						<v-btn :aria-label="s.title" variant="text" class="d-flex align-center justify-center">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color: #fff">
								<path :d="s.svgPath" />
							</svg>
						</v-btn>
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
				{ title: "Terms of Use", route: "/terms" },
				{ title: "Privacy Policy", route: "/privacy" },
				{ title: "Security", route: "/security" },
			],
			social: [
				{ title: "Instagram", svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
				{ title: "Twitter", svgPath: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
				{ title: "Facebook", svgPath: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
			],
		};
	},
};
</script>

<style scoped>
.background-container {
	position: relative;
	background-image: url("/images/footer-bg.webp"); /* Replace with your image path */
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

.footer-link {
	color: #fff;
	text-decoration: none;
	line-height: 19.09px;
	transition: opacity 0.2s ease;
	opacity: 0.85;
}

.footer-link:hover {
	opacity: 1;
	text-decoration: underline;
}

@media screen and (max-width: 768px) {
	.background-container {
		background-image: url("/images/footer-bg.webp");
		height: 478px;
	}
}
</style>
