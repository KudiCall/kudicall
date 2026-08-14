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
				// Preconnect to speed up Firebase Storage image fetches (saves ~140ms per Lighthouse)
				{ rel: "preconnect", href: "https://firebasestorage.googleapis.com" },
				// Preconnect to speed up Google Fonts fetches (saves ~490-510ms per Lighthouse)
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
				// Preload the LCP hero image (desktop) so the browser fetches it immediately
				{
					rel: "preload",
					as: "image",
					href: "https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2F71e70cc2-7bc2-4edc-b616-897e1803ee9a.png?alt=media&token=",
					fetchpriority: "high",
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
