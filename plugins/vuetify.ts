import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, fa } from "vuetify/iconsets/fa";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: "dark",
			themes: {
				dark: {
					colors: {
						primary: "#1388FC",
						secondary: "#30b1dc",
						accent: "#e91e63",
						info: "#00cae3",
						warning: "#fb8c00",
						error: "#f44336",
						success: "#4caf50",
						background: "#0C0D0D",
						surface: "#0C0D0D",
						black: "#1C1C1C",
					},
				},
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
