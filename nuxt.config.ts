import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: false,
	app: {
		// head: {
		// 	title: "OnCall",
		// 	meta: [
		// 		{ charset: "utf-8" },
		// 		{ name: "viewport", content: "width=device-width, initial-scale=1" },
		// 		{
		// 			hid: "description",
		// 			name: "description",
		// 			content: "Discover a new way to Shop, Connect, and Experience!!",
		// 		},
		// 	],
		// 	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon1.png" }],
		// },
		head: {
			title: "OnCall",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description",
					name: "description",
					content: "Discover a new way to Shop, Connect, and Experience!!",
				},
				// Open Graph tags
				{ hid: "og:title", property: "og:title", content: "OnCall" },
				{ hid: "og:description", property: "og:description", content: "Discover a new way to Shop, Connect, and Experience!!" },
				{
					hid: "og:image",
					property: "og:image",
					content: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1727115612/OnCall/favicon1_owh5zd.png",
				},
				{ hid: "og:type", property: "og:type", content: "website" },
				{ hid: "og:url", property: "og:url", content: "https://www.oncall-shop.netlify.app" },
				// Twitter card tags
				{ hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
				{ hid: "twitter:title", name: "twitter:title", content: "OnCall" },
				{ hid: "twitter:description", name: "twitter:description", content: "Discover a new way to Shop, Connect, and Experience!!" },
				{
					hid: "twitter:image",
					name: "twitter:image",
					content: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1727115612/OnCall/favicon1_owh5zd.png",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon1.png" }],
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
