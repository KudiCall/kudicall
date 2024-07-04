import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, fa } from "vuetify/iconsets/fa";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: "darkThemeConfig",
			themes: {
				darkThemeConfig,
				lightThemeConfig,
			},
		},
		icons: {
			defaultSet: "fa",
			aliases,
			sets: {
				fa,
				mdi,
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});

const darkThemeConfig = {
	dark: true,
	colors: {
		primary: "#1388FC",
		secondary: "#c8c8c8",
		background: "#0C0D0D",
		black: "#1C1C1C",
		white: "#fff",
	},
};

const lightThemeConfig = {
	dark: false,
	colors: {
		primary: "#1388FC",
		secondary: "#c8c",
		background: "#fff",
		black: "#1C1C1C",
		white: "#000",
	},
};
