<template>
	<v-row class="d-flex flex-column flex-md-row my-10 ga-4">
		<v-col cols="12" md="6" class="px-4" style="background-color: #111212; border-radius: 12px; flex: 1">
			<div class="wallet-chart">
				<div class="d-flex justify-space-between align-center mb-1">
					<p class="title">Wallet bal.</p>
					<v-btn icon-size="24" color="#161818" append-icon="mdi mdi-chevron-down"> Daily </v-btn>
				</div>
				<p class="balance">$334,657,900</p>
				<client-only placeholder="Loading...">
					<div class="chart-container px-10">
						<Bar :options="barOptions" :data="barData" />
					</div>
				</client-only>
			</div>
		</v-col>
		<v-col cols="12" md="6" class="px-4" style="background-color: #111212; border-radius: 12px; flex: 1">
			<div class="wallet-chart">
				<v-row>
					<v-col cols="6" class="d-flex flex-column justify-space-between pb-8">
						<div>
							<p class="title mb-2"><v-icon class="mb-1" size="20" icon="fas fa-user"></v-icon> Total users</p>
							<p class="balance">50,000</p>
						</div>
						<div class="mt-auto">
							<div class="d-flex align-center ga-4">
								<div style="width: 12px; height: 12px; border-radius: 4px; background-color: #d9d9d9"></div>
								<p>Buyer</p>
							</div>
							<div class="d-flex align-center ga-4">
								<div style="width: 12px; height: 12px; border-radius: 4px; background-color: #33c3b3"></div>
								<p>Sellers</p>
							</div>
							<div class="d-flex align-center ga-4">
								<div style="width: 12px; height: 12px; border-radius: 4px; background-color: #99e1d9"></div>
								<p>Buyers & Vendors</p>
							</div>
						</div>
					</v-col>
					<v-col cols="6">
						<client-only placeholder="Loading...">
							<div>
								<Pie :options="pieOptions" :data="pieData" />
							</div>
						</client-only>
					</v-col>
				</v-row>
			</div>
		</v-col>
	</v-row>
</template>

<script setup>
import { Bar, Pie } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const barData = ref({
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	datasets: [
		{
			label: "Wallet bal.",
			backgroundColor: "#14b8a6",
			data: [1000000000, 600000000, 200000000, 400000000, 300000000, 500000000, 200000000],
			borderRadius: 40,
		},
	],
});

const barOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		y: {
			ticks: {
				color: "#8f8f8f",
				font: {
					size: 14,
				},
				callback: function (value) {
					if (value >= 1000000000) return value / 1000000000 + "B";
					if (value >= 1000000) return value / 1000000 + "M";
					return value;
				},
			},
			beginAtZero: true,
			max: 1000000000, // 1B
			stepSize: 200000000, // 200M intervals
		},
		x: {
			ticks: {
				color: "#8f8f8f",
				font: {
					size: 14,
				},
			},
		},
	},
});

const pieData = ref({
	datasets: [
		{
			backgroundColor: ["#D9D9D9", "#33C3B3", "#99E1D9"],
			data: [40, 30, 30],
		},
	],
});

const pieOptions = ref({
	responsive: true,
	maintainAspectRatio: false,
});
</script>

<style scoped>
.wallet-chart {
	border-radius: 8px;
	max-height: 300px;
	min-height: 300px;
	position: relative;
}

.title {
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: #ececec;
}

.balance {
	font-weight: 700;
	font-size: 20px;
	color: #ececec;
	margin-bottom: 20px;
}

.chart-container {
	position: absolute;
	top: 50px;
	bottom: 10px;
	left: 0;
	right: 0;
}
</style>
