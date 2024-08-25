<template>
	<div class="px-4 px-md-5">
		<div class="d-flex justify-space-between align-center mb-4">
			<v-sheet rounded="lg" style="background-color: transparent">
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
			<div class="w-66 w-md-25">
				<SearchComponent placeholder="Search" />
			</div>
		</div>
		<v-row dense>
			<v-col cols="12" md="9">
				<v-tabs-window v-model="tab">
					<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
						<v-card class="px-4" style="background-color: transparent">
							<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Filter by</p>

							<v-row style="font-weight: 500; font-size: 18px; line-height: 25.2px; color: #ececec" class="my-5">
								<v-col>
									<p class="mb-2">Select country</p>
									<v-btn
										class="d-flex justify-space-between"
										style="width: 100%"
										icon-size="24"
										rounded
										size="x-large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
									>
										All
									</v-btn>
								</v-col>
								<v-col>
									<p class="mb-2">Select status</p>
									<v-btn
										class="d-flex justify-space-between"
										style="width: 100%"
										icon-size="24"
										rounded
										size="x-large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
									>
										All
									</v-btn>
								</v-col>
								<v-col>
									<p class="mb-2">Select city</p>
									<v-btn
										class="d-flex justify-space-between"
										style="width: 100%"
										icon-size="24"
										rounded
										size="x-large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
									>
										All
									</v-btn>
								</v-col>
							</v-row>

							<div class="d-flex mb-4">
								<div class="d-flex align-center ga-5 ml-auto">
									<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">{{ selected.length }} 0f {{ users.length }} Selected</span>
									<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg" width="28" height="28"></v-img>
								</div>
							</div>
							<v-data-table
								class="custom-table"
								v-model="selected"
								:headers="headers"
								:items="users"
								item-value="UserID"
								items-per-page="6"
								:hide-default-footer="users.length < 5"
								show-select
								style="background-color: transparent"
							>
								<template v-slot:[`item.UserID`]="{ item }">
									<span @click="$router.push('/admin/dashboard/User%20details')" class="cursor-pointer">{{ item.UserID }}</span>
								</template>
								<template v-slot:[`item.status`]="{ item }">
									<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
								</template>
								<template v-slot:[`item.actions`]="{ item }">
									<v-icon icon="mdi mdi-dots-vertical" color="#ECECEC" @click="console.log(item.UserID)" />
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
			</v-col>

			<v-col cols="12" md="3">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Users analytics</p>
					<AdminUsersChart />
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
const users = ref([]);
const selected = ref([]);
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
const tab = ref("tab-1");
const tabs = [
	{
		text: "All",
		value: "tab-1",
	},
	{
		text: "Buyers",
		value: "tab-2",
	},
	{
		text: "Vendors",
		value: "tab-3",
	},
	{
		text: "Vendors & Buyers",
		value: "tab-4",
	},
	{
		text: "Suspended",
		value: "tab-5",
	},
];

const choose = (x) => {
	ctx.emit("changePage", x);
};

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
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},

		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},

		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},
		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
		},

		{
			UserID: 1234567899,
			country: "Nigeria",
			phoneNo: "+2348193789403",
			category: "Buyer",
			status: "In active",
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

onMounted(() => {
	initialize();
});

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
