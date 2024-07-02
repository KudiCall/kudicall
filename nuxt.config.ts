import vuetify from "vite-plugin-vuetify";
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
					content: "The world first and largest e-commerce platform",
				},
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "" }],
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
	// vite: {
	// 	vue: {
	// 		template: {
	// 			transformAssetUrls,
	// 		},
	// 	},
	// },
	vite: { ssr: { noExternal: ["vuetify"] } },
	css: ["~/assets/css/main.css"],
});
