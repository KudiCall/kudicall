<template>
	<div class="px-4 px-md-5">
		<p style="font-weight: 500; font-size: 24px; line-height: 33px; color: #ececec" class="py-5">Welcome Maris,</p>
		<v-row>
			<v-col cols="12" md="9">
				<v-row dense style="background-color: #111212">
					<v-col v-for="item in formattedInfo" :key="item.name" cols="4" md="">
						<v-card variant="text">
							<v-card-item>
								<v-card-title style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">{{ item.value }}</v-card-title>
								<v-card-subtitle style="font-weight: 500; font-size: 16px; line-height: 22.4px; color: #8f8f8f">{{ item.name }}</v-card-subtitle>
							</v-card-item>
						</v-card>
					</v-col>
				</v-row>

				<div>
					<AdminDashboardChart />
				</div>

				<v-card variant="outlined" class="px-4 pb-4" style="border: 0.5px solid #303030">
					<div class="d-flex justify-space-between align-center">
						<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Disputes</p>
						<div class="w-66 w-md-33">
							<SearchComponent placeholder="Search" />
						</div>
					</div>
					<v-table density="default" height="300px" fixed-header style="background-color: transparent">
						<thead style="background-color: #141515">
							<tr>
								<th class="text-left">Date</th>
								<th class="text-left">Dispute ID</th>
								<th class="text-left">Order ID</th>
								<th class="text-left">Buyer Email</th>
								<th class="text-left">Store Email</th>
								<th class="text-left">Status</th>
								<th class="text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in disputes" :key="item.disputeID" class="py-4" style="background-color: #0f1010">
								<td>{{ item.date }}</td>
								<td class="text-decoration-underline cursor-pointer" style="color: #00b4a0">#{{ item.disputeID }}</td>
								<td>#{{ item.orderID }}</td>
								<td>{{ item.buyerEmail }}</td>
								<td>{{ item.storeEmail }}</td>
								<!-- <td class="dispute-status" :class="getStatusClass(item.status)">{{ item.status }}</td> -->
								<td>
									<v-chip class="dispute-status" :class="getStatusClass(item.status)">
										{{ item.status }}
									</v-chip>
								</td>

								<td>
									<v-icon icon="mdi mdi-dots-vertical" color="#ECECEC"></v-icon>
								</td>
							</tr>
						</tbody>
					</v-table>
				</v-card>
			</v-col>

			<v-col cols="12" md="3">
				<v-card class="pa-4" style="background-color: #111212">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Finance Summary</p>

					<v-card v-for="n in financeSummary" :key="n" variant="outlined" class="mb-4 py-2" style="border: 0.5px solid #303030">
						<v-card-text>
							<v-avatar
								size="32"
								:style="
									n.name === 'Withdrawals'
										? 'background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%)'
										: 'background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%)'
								"
							>
								<v-icon
									size="24"
									:color="n.name === 'Withdrawals' ? '#D92D20' : '#007E70'"
									:icon="n.name === 'Withdrawals' ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"
								></v-icon>
							</v-avatar>
						</v-card-text>
						<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">{{ n.name }}</v-card-title>
						<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> $ {{ n.value }} </v-card-text>
					</v-card>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
const info = ref([
	{ name: "User", value: 10000 },
	{ name: "Blocked", value: 1001 },
	{ name: "Buyers", value: 70001 },
	{ name: "Sellers", value: 10001 },
	{ name: "Countries", value: 32 },
]);

const formattedInfo = computed(() => {
	return info.value.map((item) => {
		if (item.name === "User" && item.value > 9000) {
			return { ...item, value: Math.round(item.value / 1000) + "K+" };
		} else if (item.name === "Blocked" && item.value > 1000) {
			return { ...item, value: Math.round(item.value / 1000) + "K+" };
		} else if (item.name === "Buyers" && item.value > 70000) {
			return { ...item, value: Math.round(item.value / 1000) + "K+" };
		} else if (item.name === "Sellers" && item.value > 10000) {
			return { ...item, value: Math.round(item.value / 1000) + "K+" };
		} else {
			return item;
		}
	});
});

const financeSummary = [
	{ name: "Deposits", value: "2,000,000,000,000" },
	{ name: "Withdrawals", value: "2,000,000,000,000" },
	{ name: "Wallet bal.", value: "90,000,000" },
	{ name: "Escrow", value: "100,000,000" },
	{ name: "Pay-outs", value: "1000" },
];

const disputes = [
	{
		date: "24/08/24",
		disputeID: 123456,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Cancelled",
	},
	{
		date: "24/08/24",
		disputeID: 123457,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Pending",
	},
	{
		date: "24/08/24",
		disputeID: 123458,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Resolved",
	},
	{
		date: "24/08/24",
		disputeID: 123458,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "In progress",
	},
];

const getStatusClass = (status) => {
	switch (status) {
		case "Cancelled":
			return "dispute-status-cancelled";
		case "In progress":
			return "dispute-status-inprogress";
		case "Resolved":
			return "dispute-status-resolved";
		case "Pending":
			return "dispute-status-pending";
		default:
			return "";
	}
};
</script>

<style scoped>
.dispute-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}
.dispute-status-cancelled {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
	/* color-scheme: linear-gradient(180deg, #f97066 2.68%, #b42318 84.82%); */
}
.dispute-status-inprogress {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.dispute-status-resolved {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}

.dispute-status-pending {
	background: #8f8f8f1a;
	color: #8f8f8f;
}

.v-table--density-default > .v-table__wrapper > table > thead > tr > th {
	font-weight: 500 !important;
	font-size: 16px !important;
	line-height: 22.4px;
	color: #fff;
}

.v-table--density-default > .v-table__wrapper > table > tbody > tr > td {
	font-weight: 500 !important;
	font-size: 16px !important;
	line-height: 22.4px;
	color: #fff;
}
</style>
