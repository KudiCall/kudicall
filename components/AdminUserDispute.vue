<template>
	<v-card class="px-4" style="background-color: transparent">
		<v-data-table
			class="custom-table"
			:headers="headers"
			:items="users"
			item-value="disputeID"
			items-per-page="6"
			:hide-default-footer="users.length < 5"
			style="background-color: transparent"
		>
			<template v-slot:[`item.disputeID`]="{ item }">
				<span class="cursor-pointer text-decoration-underline" style="color: #00b4a0">#{{ item.disputeID }}</span>
			</template>
			<template v-slot:[`item.opponent`]="{ item }">
				<div class="d-flex align-center">
					<v-avatar size="24" class="mr-2">
						<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
					</v-avatar>
					<p>{{ item.opponent }}</p>
				</div>
			</template>
			<template v-slot:[`item.status`]="{ item }">
				<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
			</template>

			<template v-slot:[`item.amount`]="{ item }">
				<span> ${{ item.amount }}</span>
			</template>
			<template v-slot:[`item.actions`]="{ item }">
				<v-icon icon="mdi mdi-dots-vertical" color="#ECECEC" @click="console.log(item.disputeID)" />
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
const headers = ref([
	{
		title: "Dispute ID",
		align: "start",
		sortable: false,
		key: "disputeID",
	},
	{
		title: "Order ID",
		align: "start",
		sortable: false,
		key: "orderID",
	},
	{ title: "Type", key: "type" },
	{ title: "Opponent", key: "opponent" },
	{ title: "Status", key: "status" },
	{ title: "", key: "actions", sortable: false },
]);

const users = ref([
	{
		disputeID: 567898,
		orderID: 1234567898,
		type: "User",
		opponent: "Sandra Apeh",
		status: "In progress",
	},
	{
		disputeID: 567898,
		orderID: 1034567899,
		type: "Against User",
		opponent: "Sandra Apeh",
		amount: "30",
		status: "Pending",
	},
	{
		disputeID: 567898,
		orderID: 5234567899,
		type: "User",
		opponent: "Sandra Apeh",
		status: "Resolved",
	},
]);

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
.user-status {
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
	background: rgba(143, 143, 143, 1);
	color: #232323;
}

.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}

.btn {
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}
</style>
