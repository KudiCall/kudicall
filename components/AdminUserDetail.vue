<template>
	<div class="px-4 px-md-5">
		<v-row dense>
			<v-col cols="12" md="8">
				<v-card variant="outlined" class="pa-5 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-4" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">About user</p>
					<v-row>
						<v-col cols="3">
							<v-avatar size="200" style="border: 1px solid rgba(236, 236, 236, 1)">
								<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png" cover></v-img>
							</v-avatar>
						</v-col>
						<v-col cols="9">
							<div class="d-flex flex-column ga-2">
								<p class="mb-3">
									<span class="mr-5" style="color: rgba(143, 143, 143, 1)">#1234567879</span>
									<span :class="getStatusClass('Active')" class="user-status">{{ "Active" }}</span>
								</p>
								<p style="font-weight: 800; font-size: 32px; color: rgba(236, 236, 236, 1)">Stephanie Sunday</p>
								<p>+234 815 7689 905</p>
								<div>
									<span class="mr-10">
										<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">User type</span>
										<span style="color: rgba(181, 181, 181, 1); font-weight: 600">Buyer | Vendor</span>
									</span>
									<span>
										<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Location</span>
										<span style="color: rgba(181, 181, 181, 1); font-weight: 600">Nigeria <span class="dot">.</span> Abuja</span>
									</span>
								</div>
								<span>
									<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Since</span>
									<span style="color: rgba(181, 181, 181, 1); font-weight: 600">August 02 <span class="dot">.</span> 2024</span>
								</span>
							</div>
						</v-col>
					</v-row>
				</v-card>
				<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Activity history</p>
				<div class="my-4">
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
					<div class="w-66 w-md-25 ml-auto">
						<SearchComponent placeholder="Search" />
					</div>
				</div>

				<v-tabs-window v-model="tab">
					<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
						<v-card class="px-4" style="background-color: transparent">
							<v-data-table
								class="custom-table"
								v-model="selected"
								:headers="headers"
								:items="users"
								item-value="UserID"
								items-per-page="6"
								:hide-default-footer="users.length < 5"
								style="background-color: transparent"
							>
								<template v-slot:[`item.UserID`]="{ item }">
									<span class="cursor-pointer text-decoration-underline" style="color: #00b4a0">#{{ item.UserID }}</span>
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

			<v-col cols="12" md="4">
				<v-btn class="btn mb-10" size="x-large" rounded append-icon="mdi mdi-menu-down">Actions</v-btn>
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Users analytics</p>
					<AdminUsersChart />

					<v-row>
						<v-col>
							<v-card variant="outlined" class="mb-4 py-2" style="border: 0.5px solid #303030; background-color: #111212">
								<v-card-text>
									<v-avatar
										class="pa-1"
										size="32"
										style="background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%)"
									>
										<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725090075/OnCall/wallet-2_cv7vmv.svg"></v-img>
									</v-avatar>
								</v-card-text>
								<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">Wallet bal.</v-card-title>
								<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> $ 2,000,000 </v-card-text>
							</v-card>
						</v-col>
						<v-col>
							<v-card variant="outlined" class="mb-4 py-2" style="border: 0.5px solid #303030; background-color: #111212">
								<v-card-text>
									<v-avatar
										class="pa-1"
										size="32"
										style="background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%)"
									>
										<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725090075/OnCall/bag-2_wajc6a.svg"></v-img>
									</v-avatar>
								</v-card-text>
								<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">Wallet bal.</v-card-title>
								<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> $ 2,000,000 </v-card-text>
							</v-card>
						</v-col>
					</v-row>
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
		text: "Purchases",
		value: "tab-1",
	},
	{
		text: "Sales",
		value: "tab-2",
	},
	{
		text: "Dispute",
		value: "tab-3",
	},
	{
		text: "Collaborator",
		value: "tab-4",
	},
	{
		text: "Deposits",
		value: "tab-5",
	},
	{
		text: "Withdrawals",
		value: "tab-5",
	},
	{
		text: "Transfers",
		value: "tab-5",
	},
];

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

.btn {
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.btn :deep(.v-icon) {
	font-size: 36px;
}
</style>
