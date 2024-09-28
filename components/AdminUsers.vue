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
								<v-col md="4" sm="12">
									<p class="mb-2">Select country</p>

									<v-menu>
										<template v-slot:activator="{ props }">
											<v-btn
												v-bind="props"
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
										</template>
										<SelectState
											title="Country"
											description="Select target country"
											:items="formattedContries"
											:allIcon="'/images/country-icon.svg'"
											@apply="handleApply"
										/>
									</v-menu>
								</v-col>
								<v-col md="4" sm="12">
									<p class="mb-2">Select status</p>

									<v-menu>
										<template v-slot:activator="{ props }">
											<v-btn
												v-bind="props"
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
										</template>

										<SelectState
											title="State"
											description="Select target state"
											:items="formattedStates"
											:allIcon="'/images/country-icon.svg'"
											@apply="handleApply"
										/>

										<!-- <v-card class="pa-2 mt-4" width="275px" height="400px" style="background-color: #141515; border-radius: 12px">
											<v-card-title class="d-flex justify-start">
												<div>
													<h3 style="font-weight: 700; font-size: 18px; line-height: 24.5px; color: #ececec">State</h3>
													<p style="font-weight: 400; font-size: 16px; line-height: 22.4px; color: #8f8f8f">Select target state</p>
												</div>
											</v-card-title>

											<div class="my-3 px-4">
												<v-btn class="custom_btn" size="large" rounded @click="applySelection"> Apply </v-btn>
											</div>

											<div class="px-4 mt-8 d-flex justify-space-between align-center">
												<div class="d-flex align-center ga-3">
													<v-img src="/images/global.svg" width="40" height="40" />
													<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">All</p>
												</div>
												<div>
													<v-radio color="#1288FC" @click.stop v-model="selectedState" value="all"></v-radio>
												</div>
											</div>

											<v-divider class="mt-4" color="#303030" style="border: 1px solid #6c6666"></v-divider>
											<div class="px-4" style="background-color: transparent">
												<div v-for="state in states" :key="state" class="d-flex justify-space-between align-center">
													<p>
														{{ state }}
													</p>
													<v-checkbox color="#1288FC" class="my-checkbox" @click.stop v-model="selectedStates" :value="state"></v-checkbox>
												</div>
											</div>
										</v-card> -->
									</v-menu>
								</v-col>
								<!-- <v-col>
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
								</v-col> -->
							</v-row>

							<div class="d-flex mb-4">
								<div class="d-flex align-center ga-5 ml-auto">
									<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">{{ selected.length }} 0f {{ users.length }} Selected</span>
									<v-img
										@click="confirmDeleteUsers = true"
										eager
										style="cursor: pointer"
										src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg"
										width="40"
										height="40"
									></v-img>
								</div>
							</div>
							<v-data-table
								class="custom-table"
								v-model="selected"
								:headers="headers"
								:items="users"
								item-value="UserID"
								items-per-page="6"
								:hide-default-footer="users.length < 6"
								show-select
								style="background-color: transparent"
							>
								<template v-slot:[`item.UserID`]="{ item }">
									<span @click="$router.push(`/admin/dashboard/Users%20details/${item.UserID}`)" class="cursor-pointer">{{ item.UserID }}</span>
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

		<v-dialog v-model="confirmSuspendModal" persistent max-width="755">
			<ConfirmActionModal
				title="Suspend user"
				message="Are you sure you want to suspend this user?"
				infoTitle="Suspending a user will:"
				:info="suspendActionInfo"
				leftBtn="Cancel"
				rightBtn="Suspend user"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmSuspendModal = false)"
				:rightBtnAction="() => (confirmSuspendModal = false)"
			/>
		</v-dialog>
		<v-dialog v-model="confirmDeleteUsers" persistent max-width="755">
			<ConfirmActionModal
				title="Delete all users"
				message="Are you sure you want to delete these users? This action cannot be undone?"
				infoTitle="Deleting a user will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmDeleteUsers = false)"
				:rightBtnAction="() => (confirmDeleteUsers = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const selected = ref([]);
const confirmSuspendModal = ref(false);
const confirmDeleteUsers = ref(false);
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
const tab = ref("All");
const tabs = [
	{
		text: "All",
		value: "All",
	},
	{
		text: "Buyers",
		value: "Buyers",
	},
	{
		text: "Vendors",
		value: "Vendors",
	},
	{
		text: "Vendors & Buyers",
		value: "Vendors & Buyers",
	},
	{
		text: "Suspended",
		value: "Suspended",
	},
];

// Method to handle the apply button click
// const applySelection = () => {
// 	console.log("Selected States:", selectedStates.value);
// 	console.log("Selected State (All/Specific):", selectedState.value);
// };

const handleApply = (selection) => {
	console.log("Selected Item:", selection.selectedItem);
	console.log("Selected Items:", selection.selectedItems);
};

const users = ref([
	{
		UserID: 1234567898,
		country: `${getCurrencyFlag("NG")} Nigeria`,
		phoneNo: "+2348193789403",
		category: "Buyer",
		status: "Active",
	},
	{
		UserID: 1034567899,
		country: `${getCurrencyFlag("US")} United States`,
		phoneNo: "+2348193789403",
		category: "Vendor",
		status: "Suspended",
	},
	{
		UserID: 5234567899,
		country: `${getCurrencyFlag("ZA")} South Africa`,
		phoneNo: "+2348193789403",
		category: "B & V",
		status: "In active",
	},
	{
		UserID: 2234567899,
		country: `${getCurrencyFlag("CA")} Canada`,
		phoneNo: "+2348193789403",
		category: "B & V",
		status: "In active",
	},
	{
		UserID: 3234567899,
		country: `${getCurrencyFlag("NG")} Nigeria`,
		phoneNo: "+2348193789403",
		category: "Buyer",
		status: "In active",
	},
	{
		UserID: 4234567899,
		country: `${getCurrencyFlag("CN")} China`,
		phoneNo: "+2348193789403",
		category: "Vendor",
		status: "In active",
	},
	{
		UserID: 5234567899,
		country: `${getCurrencyFlag("ZA")} South Africa`,
		phoneNo: "+2348193789403",
		category: "Buyer",
		status: "In active",
	},

	{
		UserID: 6234567899,
		country: `${getCurrencyFlag("NG")} Nigeria`,
		phoneNo: "+2348193789403",
		category: "Buyer",
		status: "In active",
	},
]);

const formattedContries = computed(() => {
	return contries.map((contry) => ({
		text: `${getCurrencyFlag(contry.flagCode)} ${contry.name}`,
		value: `${contry.name}`,
	}));
});

const formattedStates = computed(() => {
	return states.map((state) => ({
		text: `${state.name}`,
		value: `${state.name}`,
	}));
});

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Users%20details/${userInfo.UserID}`),
		},
		{ title: `${userInfo.status == "Active" ? "Suspend" : "Reactivate"}`, action: () => (confirmSuspendModal.value = true) },
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

const removeActionInfo = ["Permanently remove their account and all associated data", "Remove their ability to log in and access the platform"];
const suspendActionInfo = ["Remove their ability to log in and access the platform until you reactivate them"];
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
	border-radius: 16px !important;
}

.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}

.custom_btn {
	width: 150px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}
</style>
