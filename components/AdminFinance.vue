<template>
	<div class="px-4 px-md-5">
		<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec" class="pb-4">Summary</p>

		<div class="d-flex align-center mb-4 overflow-auto ga-4">
			<AdminFinanceCard v-for="(item, index) in financeSummary" :key="index" :name="item.name" :value="item.value" />
		</div>
		<v-row dense>
			<v-col cols="12" md="9">
				<v-card variant="outlined" class="pa-3" style="border: 0.5px solid #303030; border-radius: 8px">
					<div class="d-flex justify-space-between align-center">
						<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec" class="">Transactions</p>

						<v-menu>
							<template v-slot:activator="{ props }">
								<v-btn
									v-bind="props"
									class="d-flex justify-space-between px-2"
									icon-size="24"
									rounded
									size="large"
									color="#161818"
									append-icon="mdi mdi-chevron-down"
									style="font-size: 16px; font-weight: 400; line-height: 22.4px; border-radius: 8px"
								>
									This month
								</v-btn>
							</template>

							<v-card class="pa-4 mt-4" width="275px" style="background-color: #141515; border-radius: 12px">
								<v-card-title class="d-flex justify-start">
									<div>
										<h3 style="font-weight: 700; font-size: 18px; line-height: 24.5px; color: #ececec">Transaction time</h3>
										<p style="font-weight: 400; font-size: 16px; line-height: 22.4px; color: #8f8f8f">Select target duration</p>
									</div>
								</v-card-title>

								<!-- Static Radio Option -->
								<div class="px-4 my-4 d-flex justify-space-between align-center">
									<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">All</p>
									<div>
										<v-radio color="#1288FC" v-model="selectedDuration" value="All"></v-radio>
									</div>
								</div>

								<!-- Dynamic Radio Options -->
								<div class="px-4" style="background-color: transparent">
									<div
										v-for="duration in ['Today', 'This week', 'This month', 'This year']"
										:key="duration"
										class="d-flex justify-space-between align-center mb-2"
									>
										<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ duration }}</p>
										<div>
											<v-radio color="#1288FC" v-model="selectedDuration" :value="duration"></v-radio>
										</div>
									</div>
								</div>
							</v-card>
						</v-menu>
					</div>

					<v-sheet rounded="lg" style="background-color: transparent" class="my-4">
						<v-tabs v-model="tab" :items="tabs" slider-color="transparent">
							<template v-slot:tab="{ item }">
								<v-tab
									:text="item.text"
									:value="item.value"
									rounded
									:class="tab === item.value ? 'my-chip--active' : 'my-chip'"
									class="d-flex align-center justify-center mx-1"
									style="font-size: 14px; line-height: 19.4px; font-weight: 500; color: #ececec"
								>
									<v-icon v-if="tab === item.value" left class="mr-2">fas fa-circle-check</v-icon>
									{{ item.text }}
								</v-tab>
							</template>
						</v-tabs>
					</v-sheet>
					<v-tabs-window v-model="tab">
						<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
							<v-card class="px-md-4" style="background-color: transparent">
								<div class="d-flex justify-end">
									<div class="w-100 w-md-33">
										<SearchComponent placeholder="Search" />
									</div>
								</div>

								<v-data-table
									class="custom-table"
									v-model="selected"
									:headers="headers"
									:items="users"
									item-value="TxnID"
									items-per-page="6"
									:hide-default-footer="users.length < 5"
									style="background-color: transparent"
								>
									<template v-slot:[`item.TxnID`]="{ item }">
										<span @click="$router.push(`/admin/dashboard/Finance Detail/${item.TxnID}`)" class="cursor-pointer">#{{ item.TxnID }}</span>
									</template>
									<template v-slot:[`item.user`]="{ item }">
										<div class="d-flex align-center">
											<v-avatar size="24" class="mr-2">
												<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
											</v-avatar>
											<p>{{ item.user }}</p>
										</div>
									</template>
									<template v-slot:[`item.amount`]="{ item }">
										<span> ${{ item.amount }}</span>
									</template>
									<template v-slot:[`item.status`]="{ item }">
										<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
									</template>
									<!-- <template v-slot:[`item.actions`]="{ item }">
										<v-icon icon="mdi mdi-dots-vertical" color="#ECECEC" @click="console.log(item.TxnID)" />
									</template> -->
									<template v-slot:[`item.actions`]="{ item }">
										<v-menu>
											<template v-slot:activator="{ props }">
												<v-icon v-bind="props" icon="mdi mdi-dots-vertical" color="#ECECEC" />
											</template>

											<v-list style="background-color: #141515; min-width: 160px; border-radius: 12px">
												<v-list-item
													v-for="(menuItem, i) in menuItems(item)"
													:key="i"
													@click.stop="menuItem.action"
													rounded-xl
													style="color: #ececec; font-weight: 500"
												>
													<v-list-item-title>{{ menuItem.title }}</v-list-item-title>
												</v-list-item>
											</v-list>
										</v-menu>
									</template>
									<template #no-data>
										<div class="text-center py-16" style="font-size: 20px; color: #ececec">
											<p>No user yet</p>
										</div>
									</template>
								</v-data-table>
							</v-card>
						</v-tabs-window-item>
					</v-tabs-window>
				</v-card>
			</v-col>

			<v-col cols="12" md="3">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec" class="pb-8">Financial charts</p>
					<AdminUsersChart />
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const selected = ref([]);
const headers = ref([
	{
		title: "Txn. ID",
		align: "start",
		sortable: false,
		key: "TxnID",
	},
	{ title: "Date", key: "date" },
	{ title: "Channel", key: "channel" },
	{ title: "User", key: "user" },
	{ title: "Amount", key: "amount" },
	{ title: "Status", key: "status" },
	{ title: "Note", key: "note" },
	{ title: "", key: "actions", sortable: false },
]);
const tab = ref("Withdrawals");
const selectedDuration = ref("All");
const financeSummary = [
	{ name: "Total Deposits", value: "2,000,000,000,000" },
	{ name: "Total Withdrawals", value: "2,000,000,000,000" },
	{ name: "Total Transfers", value: "8,000,000" },
	{ name: "Current Wallet bal.", value: "100,000,000" },
	{ name: "Current Escrow bal.", value: "1000" },
];
const tabs = [
	{
		text: "Withdrawals",
		value: "Withdrawals",
	},
	{
		text: "Deposits",
		value: "Deposits",
	},
	{
		text: "Transfers",
		value: "Transfers",
	},
	{
		text: "Escrow",
		value: "Escrow",
	},
];

const users = [
	{
		TxnID: 1234567898,
		date: "24/08/24",
		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "30",
		status: "Completed",
		note: "This is a note",
	},
	{
		TxnID: 1234567899,
		date: "24/08/24",
		channel: "USSD",
		user: "Felicia Murray",
		amount: "100",
		status: "Failed",
		note: "Network failure",
	},
	{
		TxnID: 1234567899,
		date: "24/08/24",
		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "100",
		status: "Completed",
		note: "-",
	},
	{
		TxnID: 1234567899,
		date: "24/08/24",
		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "30",
		status: "Completed",
		note: "-",
	},
	{
		TxnID: 1234567899,
		date: "24/08/24",
		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "30",
		status: "Completed",
		note: "This is a note",
	},
];

const getStatusClass = (status) => {
	switch (status) {
		case "Failed":
			return "user-status-failed";

		case "Completed":
			return "user-status-completed";
		default:
			return "";
	}
};

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Finance%20Detail/${userInfo.TxnID}`),
		},
		{ title: `${userInfo.status && "Resolve Dispute"}`, action: () => router.push(`/admin/dashboard/Dispute`) },
	];
};
</script>

<style scoped>
.user-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}
.user-status-failed {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
}
/* .user-status-inactive {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
} */

.user-status-completed {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}

.my-chip {
	background-color: #161818;
	border-radius: 16px !important;
}

.my-chip--active {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.2) 15%, rgba(0, 108, 96, 0.2) 85.96%);
	/* border: 1px solid; */
	/* border-image-source: linear-gradient(185.49deg, #00b4a0 15%, #006c60 85.96%); */
	border-radius: 16px !important;
}

.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}
</style>
