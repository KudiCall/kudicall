import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
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
						background: "#121212",
						surface: "#121212",
					},
				},
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
