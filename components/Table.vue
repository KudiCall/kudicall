<template>
	<v-data-table
		class="custom-table"
		v-model="selected"
		:headers="headers"
		:items="users"
		item-value="UserID"
		items-per-page="7"
		show-select
		style="background-color: transparent"
	>
		<template v-slot:[`item.UserID`]="{ item }">
			<span class="userId">{{ item.UserID }}</span>
		</template>
		<template v-slot:[`item.status`]="{ item }">
			<span :class="getStatusClass(item.status)" class="user-status cursor-pointer">{{ item.status }}</span>
		</template>
		<template v-slot:[`item.actions`]="{ item }">
			<v-icon icon="mdi mdi-dots-vertical" color="#ECECEC" @click="console.log(item)" />
		</template>
		<template #no-data>
			<v-btn color="primary" @click="initialize"> Reset </v-btn>
		</template>
	</v-data-table>

	<pre>{{ selected }}</pre>
</template>

<script setup>
const selected = ref([]);
const users = ref([]);
const headers = ref([
	{
		title: "UserID",
		align: "start",
		sortable: false,
		key: "UserID",
	},
	{ title: "Country", key: "country" },
	{ title: "Phone number", key: "phoneNo" },
	{ title: "User category", key: "category" },
	{ title: "Status", key: "status" },
	{ title: "", key: "actions", sortable: false },
]);

const initialize = () => {
	users.value = [
		{
			UserID: 1234567898,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "Active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "Suspended",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
	];
};

const getStatusClass = (status) => {
	switch (status) {
		case "Suspended":
			return "user-status-suspended";
		case "In active":
			return "user-status-inactive";
		case "Active":
			return "user-status-active";

		default:
			return "";
	}
};

onMounted(() => {
	initialize();
});
</script>

<style scoped>
.userId {
	color: pink !important;
	cursor: pointer; /* This is likely what you want */
}

:deep(.userId) {
	color: pink !important;
	cursor: pointer;
}
.user-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}
.user-status-suspended {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
}
.user-status-inactive {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.user-status-active {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}
.custom-table {
	font-weight: 500 !important;
	font-size: 16px !important;
	line-height: 22.4px;
}
.custom-table :deep(.v-data-table__wrapper > table > thead > tr) {
	background-color: #141515 !important;
	color: #fff !important;
}

.custom-table :deep(.v-data-table__wrapper > table > tbody > tr) {
	background-color: #1c1c1c !important;
	color: #fff !important;
	border: none !important;
}
</style>
