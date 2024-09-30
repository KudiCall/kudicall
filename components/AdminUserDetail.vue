<template>
	<div class="px-4 px-md-5 mb-10">
		<v-row dense>
			<v-col cols="12" md="8">
				<v-card variant="outlined" class="pa-4 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-4" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">About user</p>
					<div class="d-flex flex-column flex-md-row align-center ga-10">
						<v-avatar size="200" style="border: 1px solid rgba(236, 236, 236, 1)">
							<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png" cover></v-img>
						</v-avatar>
						<div class="d-flex flex-1 flex-column ga-2">
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
					</div>
				</v-card>
				<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Activity history</p>
				<div class="my-4">
					<v-sheet rounded="lg" style="background-color: transparent">
						<v-tabs v-model="tab" :items="tabs" slider-color="transparent" class="tabs" id="tabs">
							<template v-slot:tab="{ item }">
								<v-tab
									:text="item.text"
									:value="item.text"
									rounded
									:class="tab === item.text ? 'my-chip--active' : 'my-chip'"
									class="d-flex align-center justify-center mx-1"
									style="font-size: 14px; line-height: 19.4px; font-weight: 500; color: #ececec"
								>
									<v-icon v-if="tab === item.text" left class="mr-2">fas fa-circle-check</v-icon>
									{{ item.text }}
								</v-tab>
							</template>
						</v-tabs>
					</v-sheet>
					<div class="w-66 w-md-50 ml-auto">
						<SearchComponent placeholder="Search" />
					</div>
				</div>
				<v-tabs-window v-model="tab">
					<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
						<component :is="getComponent(tab)" />
					</v-tabs-window-item>
				</v-tabs-window>
			</v-col>

			<v-col cols="12" md="4">
				<v-menu>
					<template v-slot:activator="{ props }">
						<v-btn v-bind="props" class="btn mb-10" size="x-large" rounded append-icon="mdi mdi-menu-down">Actions</v-btn>
					</template>

					<v-list style="background-color: #141515; min-width: 160px; border-radius: 12px">
						<v-list-item
							v-for="(menuItem, i) in menuItems({ UserID: 1, status: 'Active' })"
							:key="i"
							@click="menuItem.action"
							rounded-xl
							style="color: #ececec; font-weight: 500"
						>
							<v-list-item-title>{{ menuItem.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
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
		<v-dialog v-model="confirmDeleteUser" persistent max-width="755">
			<ConfirmActionModal
				title="Delete user"
				message="Are you sure you want to delete this user? This action cannot be undone."
				infoTitle="Deleting a user will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmDeleteUser = false)"
				:rightBtnAction="() => (confirmDeleteUser = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import AdminUserPurchases from "@/components/AdminUserPurchases.vue";
import AdminUserSales from "@/components/AdminUserSales.vue";
import AdminUserDispute from "@/components/AdminUserDispute.vue";
import AdminUserCollaborator from "@/components/AdminUserCollaborator.vue";
import AdminUserDeposits from "@/components/AdminUserDeposits.vue";
import AdminUserWithdrawals from "@/components/AdminUserWithdrawals.vue";
import AdminUserTransfers from "@/components/AdminUserTransfers.vue";
const tab = ref("Sales");
const confirmSuspendModal = ref(false);
const confirmDeleteUser = ref(false);
const tabs = [
	{
		text: "Sales",
		value: "Sales",
	},
	{
		text: "Purchases",
		value: "Purchases",
	},
	{
		text: "Dispute",
		value: "Dispute",
	},
	{
		text: "Collaborator",
		value: "Collaborator",
	},
	{
		text: "Deposits",
		value: "Deposits",
	},
	{
		text: "Withdrawals",
		value: "Withdrawals",
	},
	{
		text: "Transfers",
		value: "Transfers",
	},
];

// Function to return a component based on the tab chosen
const getComponent = (tab) => {
	switch (tab) {
		case "Purchases":
			return AdminUserPurchases;
		case "Sales":
			return AdminUserSales;
		case "Dispute":
			return AdminUserDispute;
		case "Collaborator":
			return AdminUserCollaborator;
		case "Deposits":
			return AdminUserDeposits;
		case "Withdrawals":
			return AdminUserWithdrawals;
		default:
			return AdminUserTransfers;
	}
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

const menuItems = (userInfo) => {
	return [
		{
			title: "Message user",
			action: () => router.push(`/admin/dashboard/Users%20details/${userInfo.UserID}`),
		},
		{ title: `${userInfo.status == "Active" ? "Suspend" : "Reactivate"}`, action: () => (confirmSuspendModal.value = true) },
		{ title: "Delete User", action: () => (confirmDeleteUser.value = true) },
	];
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

#tabs :deep(.v-slide-group__next) {
	display: none !important;
}

#tabs :deep(.v-slide-group__prev) {
	display: none !important;
}
</style>
