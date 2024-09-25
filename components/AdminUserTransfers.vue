<template>
	<v-card class="px-md-4" style="background-color: transparent">
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
				<span @click="$router.push(`/admin/dashboard/Finance Detail/${item.TxnID}`)" class="cursor-pointer">{{ item.TxnID }}</span>
			</template>
			<template v-slot:[`item.status`]="{ item }">
				<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
			</template>

			<template #no-data>
				<div class="text-center py-16" style="font-size: 20px; color: #ececec">
					<p>No user yet</p>
				</div>
			</template>
		</v-data-table>
	</v-card>
</template>

<script setup>
const selected = ref([]);
const headers = ref([
	{
		title: "Txn. ID",
		align: "start",
		sortable: false,
		key: "TxnID",
	},
	{ title: "Channel", key: "channel" },
	{ title: "Date", key: "date" },
	{ title: "Amount", key: "amount" },
	{ title: "Status", key: "status" },
	{ title: "Note", key: "note" },
	{ title: "", key: "actions", sortable: false },
]);
const users = [
	{
		TxnID: 1234567898,
		date: "08/24",
		channel: "Bank transfer",
		amount: "30",
		status: "Failed",
		note: "Insufficient fund",
	},
	{
		TxnID: 1234567899,
		date: "08/24",
		channel: "USSD",
		amount: "100",
		status: "Failed",
		note: "Network failure",
	},
	{
		TxnID: 1234567899,
		date: "08/24",
		channel: "Bank transfer",
		amount: "100",
		status: "Pending",
		note: "-",
	},
	{
		TxnID: 1234567899,
		date: "08/24",
		channel: "Bank transfer",
		amount: "30",
		status: "Completed",
		note: "-",
	},
	{
		TxnID: 1234567899,
		date: "08/24",
		channel: "Bank transfer",
		amount: "30",
		status: "Pending",
		note: "This is a note",
	},
];

const getStatusClass = (status) => {
	switch (status) {
		case "Failed":
			return "user-status-failed";
		case "Pending":
			return "user-status-pending";
		case "Completed":
			return "user-status-completed";
		default:
			return "";
	}
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
.user-status-pending {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.user-status-completed {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}

.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}
</style>
