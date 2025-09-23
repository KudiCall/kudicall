<template>
	<v-row class="ga-4">
		<!-- Active Users - Gauge Chart -->
		<v-col cols="12" md="3" class="px-4" style="background-color: #111212; border-radius: 12px">
			<div class="wallet-chart">
				<div class="d-flex justify-space-between align-center mb-1">
					<div class="d-flex align-center ga-2">
						<v-icon size="20" icon="fas fa-user" color="#8f8f8f"></v-icon>
						<p class="title">Active users</p>
					</div>
					<v-btn icon-size="24" color="#161818" append-icon="mdi mdi-chevron-down" size="small"> Weekly </v-btn>
				</div>
				<p class="subtitle">Users who login daily</p>
				<div class="gauge-center gauge-container">
					<client-only placeholder="Loading...">
						<Doughnut :options="gaugeOptions" :data="gaugeData" />
					</client-only>
					<div class="gauge-center">
						<div class="">
							<span class="subtitle">Active users</span>
							<p class="gauge-percentage">40%</p>
						</div>
					</div>
				</div>
			</div>
		</v-col>

		<!-- Total Users - Pie Chart -->
		<v-col cols="12" md="3" class="px-4" style="background-color: #111212; border-radius: 12px">
			<div class="wallet-chart" style="width: 100%">
				<div class="d-flex flex-column justify-space-between pb-8 second">
					<div>
						<div class="d-flex justify-space-between align-center mb-1">
							<div class="d-flex align-center ga-2">
								<v-icon size="20" icon="fas fa-user" color="#8f8f8f"></v-icon>
								<p class="title">Total users</p>
							</div>
							<v-btn icon-size="24" color="#161818" append-icon="mdi mdi-chevron-down" size="small"> This week </v-btn>
						</div>
						<p class="balance">5,000,000</p>
					</div>
					<div class="total-text">
						<div class="d-flex align-center ga-4 mb-2">
							<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #d9d9d9"></div>
							<p class="label">Users</p>
						</div>
						<div class="d-flex align-center ga-4">
							<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #33c3b3"></div>
							<p class="label">Vendors</p>
						</div>
					</div>
				</div>

				<div class="chart-container total-chart">
					<client-only placeholder="Loading...">
						<Pie :options="pieOptions" :data="pieData" />
					</client-only>
				</div>
			</div>
		</v-col>

		<!-- Users by Country - Donut Chart -->
		<v-col cols="12" md="3" class="px-4" style="background-color: #111212; border-radius: 12px">
			<div class="wallet-chart">
				<div class="d-flex justify-space-between align-center mb-1">
					<div class="d-flex align-center ga-2">
						<v-icon size="20" icon="fas fa-user" color="#8f8f8f"></v-icon>
						<p class="title">Users by country</p>
					</div>
					<div class="d-flex ga-2">
						<v-btn icon="mdi mdi-chevron-left" size="small" color="#161818"></v-btn>

						<v-btn icon="mdi mdi-chevron-right" size="small" color="#161818"> </v-btn>
					</div>
				</div>
				<p class="balance">15 countries</p>

				<div class="country-legend mt-6">
					<div class="d-flex align-center ga-3 mb-3">
						<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #2dd4bf"></div>
						<p class="label">Nigeria</p>
					</div>
					<div class="d-flex align-center ga-3 mb-3">
						<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #14b8a6"></div>
						<p class="label">Ghana</p>
					</div>
					<div class="d-flex align-center ga-3 mb-3">
						<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0d9488"></div>
						<p class="label">Sierra leone</p>
					</div>
					<div class="d-flex align-center ga-3 mb-3">
						<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #0f766e"></div>
						<p class="label">Morocco</p>
					</div>
					<div class="d-flex align-center ga-3">
						<div style="width: 12px; height: 12px; border-radius: 50%; background-color: #134e4a"></div>
						<p class="label">Egypt</p>
					</div>
				</div>

				<div class="chart-container country-chart">
					<client-only placeholder="Loading...">
						<Doughnut :options="countryOptions" :data="countryData" />
					</client-only>
				</div>
			</div>
		</v-col>
	</v-row>
</template>

<script setup>
import { Bar, Pie, Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

// Active Users Gauge Data
const gaugeData = ref({
	datasets: [
		{
			data: [40, 60], // 40% active, 60% inactive
			backgroundColor: ["#33c3b3", "#2a2b2b"],
			borderWidth: 0,
			cutout: "75%",
			circumference: 180,
			rotation: 270,
		},
	],
});

const gaugeOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
});

// Total Users Pie Data
const pieData = ref({
	datasets: [
		{
			backgroundColor: ["#D9D9D9", "#33C3B3"],
			data: [60, 40], // 60% users, 40% vendors
			borderWidth: 0,
		},
	],
});

const pieOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
});

// Users by Country Data
const countryData = ref({
	datasets: [
		{
			data: [35, 25, 15, 13, 12], // Nigeria, Ghana, Sierra Leone, Morocco, Egypt
			backgroundColor: ["#2dd4bf", "#14b8a6", "#0d9488", "#0f766e", "#134e4a"],
			borderWidth: 0,
			cutout: "60%",
		},
	],
});

const countryOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: false,
		},
	},
});
</script>

<style scoped>
.wallet-chart {
	border-radius: 8px;
	position: relative;
	padding: 20px;
	min-height: 250px;
	min-width: 150px;
}

.title {
	font-weight: 400;
	font-size: 12px;
	line-height: 16.83px;
	color: #ececec;
}

.subtitle {
	font-weight: 400;
	font-size: 10px;
	line-height: 14px;
	color: #8f8f8f;
	margin-bottom: 20px;
}

.balance {
	font-weight: 700;
	font-size: 15px;
	line-height: 21.08px;
	color: #ececec;
	margin-bottom: 20px;
}

.label {
	font-weight: 600;
	font-size: 11px;
	line-height: 14.73px;
	color: #8f8f8f;
}

.chart-container {
	position: absolute;
	top: 20px;
	bottom: 20px;
	right: 10px;
	width: 45%;
}

.gauge-container {
	height: 200px;
	width: 210px;
	/* right: 20px; */
	top: 50px;
	border-radius: 20;
}

.gauge-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -20%);
	text-align: center;
}

.gauge-percentage {
	font-weight: 700;
	font-size: 36px;
	color: #ececec;
}

.total-chart {
	height: 140px;
	width: 140px;
	right: 0px;
	bottom: 10px;
	margin-top: auto;
}

.total-text {
	margin-top: auto;
	bottom: 10px;
	position: absolute;
}

.country-chart {
	height: 140px;
	width: 140px;
	right: 0px;
	bottom: 10px;
	margin-top: auto;
}

.country-legend {
	position: relative;
	z-index: 1;
}
</style>
