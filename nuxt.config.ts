import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	devtools: { enabled: false },
	ssr: false,
	app: {
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
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1720905161/OnCall/On_uktqbe.png" }],
		},
	},

	build: {
		transpile: ["vuetify"],
	},
	modules: [
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
