<template>
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
			item-value="OrderID"
			items-per-page="6"
			:hide-default-footer="users.length < 5"
			style="background-color: transparent"
		>
			<template v-slot:[`item.amount`]="{ item }">
				<span> ${{ item.amount }}</span>
			</template>
			<template v-slot:[`item.status`]="{ item }">
				<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
			</template>

			<template v-slot:[`item.actions`]="{ item }">
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-icon v-bind="props" icon="mdi mdi-dots-vertical" color="#ECECEC" />
					</template>

					<v-list style="background-color: #141515; min-width: 160px; border-radius: 12px">
						<v-list-item v-for="(menuItem, i) in menuItems(item)" :key="i" @click.stop="menuItem.action" rounded-xl style="font-weight: 500">
							<v-list-item-title v-if="item.status !== 'Dispute' && menuItem.title == 'Resolve Dispute'" class="my-gray">
								{{ menuItem.title }}
							</v-list-item-title>
							<v-list-item-title v-else class="my-white">
								{{ menuItem.title }}
							</v-list-item-title>
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
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const selected = ref([]);
const headers = ref([
	{
		title: "Order. ID",
		align: "start",
		sortable: false,
		key: "OrderID",
	},
	{ title: "Amount", key: "amount" },
	{ title: "Order Date", key: "orderDate" },
	{ title: "Release Date", key: "releaseDate" },
	{ title: "Status", key: "status" },
	{ title: "", key: "actions", sortable: false },
]);

const users = [
	{
		OrderID: 1234567898,
		orderDate: "24/08/24",
		releaseDate: "24/08/24",
		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "30",
		status: "Released",
	},
	{
		OrderID: 1234567899,
		orderDate: "24/08/24",
		releaseDate: "24/08/24",

		channel: "USSD",
		user: "Felicia Murray",
		amount: "100",
		status: "Held",
	},
	{
		OrderID: 1234567899,
		orderDate: "24/08/24",
		releaseDate: "24/08/24",

		channel: "Bank transfer",
		user: "Felicia Murray",
		amount: "100",
		status: "Dispute",
	},
	{
		OrderID: 1234567899,
		orderDate: "24/08/24",
		releaseDate: "24/08/24",
		amount: "30",
		status: "Pending",
	},
];

const getStatusClass = (status) => {
	switch (status) {
		case "Pending":
			return "user-status-pending";
		case "Released":
			return "user-status-released";
		case "Held":
			return "user-status-held";
		case "Dispute":
			return "user-status-dispute";
		default:
			return "";
	}
};

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Finance%20Detail/${userInfo.OrderID}`),
		},
		{
			title: "Resolve Dispute",
			action: () => {
				if (userInfo.status === "Dispute") {
					router.push(`/admin/dashboard/Dispute%20Detail/${userInfo.OrderID}`);
				} else {
					// Optional: show a notification or feedback for invalid action
					console.log("This item is not in dispute.");
				}
			},
		},
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
.user-status-held {
	background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%);
	color: #1288fc;
}
.user-status-dispute {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.user-status-released {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}

.user-status-pending {
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

.my-gray {
	color: #484444; /* Gray color */
}

.my-white {
	color: #ececec; /* White color */
}
</style>
