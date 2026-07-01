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
			item-value="TxnID"
			items-per-page="6"
			:hide-default-footer="users.length < 5"
			style="background-color: transparent"
		>
			<template v-slot:[`item.user`]="{ item }">
				<div class="d-flex align-center">
					<v-avatar size="24" class="mr-2">
						<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
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
	<v-dialog v-model="viewDetailModal" persistent max-width="600">
		<AdminTransactionDetails :data="currentTransaction" @close="viewDetailModal = false" />
	</v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const viewDetailModal = ref(false);
const currentTransaction = ref({});

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
			action: () => {
				viewDetailModal.value = true;
				currentTransaction.value = [
					{ name: "Type", value: "Withdrawal" },
					{ name: "From", value: userInfo.TxnID },
					{ name: "Amount", value: `$${userInfo.amount}` },
					{ name: "To", value: userInfo.channel },
					{ name: "Account Number", value: userInfo.TxnID },
					{ name: "Account Name", value: userInfo.user },
					{ name: "Date", value: userInfo.date },
					{ name: "Status", value: userInfo.status },
					{ name: "Note", value: userInfo.note },
				];
			},
		},
	];
};
</script>
