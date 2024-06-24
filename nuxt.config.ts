// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
	devtools: { enabled: true },
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
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }));
			});
		},
		//...
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
});
