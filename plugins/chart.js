import { Bar, Line, Doughnut, Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement, ArcElement } from "chart.js";

// Register required Chart.js components
ChartJS.register(Title, Tooltip, Legend, PointElement, BarElement, CategoryScale, LinearScale, LineElement, ArcElement);

export default defineNuxtPlugin((nuxtApp) => {
	// Register chart components globally
	nuxtApp.vueApp.component("LineChart", {
		extends: Line,
	});

	nuxtApp.vueApp.component("DoughnutChart", {
		extends: Doughnut,
	});

	nuxtApp.vueApp.component("BarChart", {
		extends: Bar,
	});

	nuxtApp.vueApp.component("PieChart", {
		extends: Pie,
	});
});
