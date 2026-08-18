import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: false,
	app: {
		head: {
			title: "KudiCall",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content: "Discover a new way to Shop, Connect, and Experience!!",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon-16x16.png" },
				// Preconnect to speed up Google Fonts fetches (saves ~490-510ms per Lighthouse)
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
				// Preload the LCP hero image (desktop) so the browser fetches it immediately
				{
					rel: "preload",
					as: "image",
					href: "/images/hero-desktop.webp",
					fetchpriority: "high",
					type: "image/webp",
				},
				// Parallel load Google Fonts asynchronously as a combined stylesheet link to eliminate render-blocking @import
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Pacifico&display=swap",
					media: "print",
					onload: "this.media='all'",
				},
			],
		},
	},

	build: {
		transpile: ["vuetify"],
	},
	modules: [
		"@pinia/nuxt",
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				if (!config.plugins) {
					config.plugins = [];
				}
				config.plugins.push(vuetify({}));
				config.plugins.push({
					name: 'vuetify-vimg-patch',
					transform(code, id) {
						if (id.includes('components/VImg/VImg.mjs')) {
							return {
								code: code.replace(
									'function pollForSize(img) {',
									'function pollForSize(img) {\n      if (!img) return;'
								),
								map: null
							};
						}
					}
				});
			});
		},
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	css: ["~/assets/css/main.css"],
});
