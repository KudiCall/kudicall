<template>
	<div class="px-4 px-md-5 mb-10">
		<v-row dense>
			<v-col cols="12" md="8">
				<v-card variant="outlined" class="px-4 pb-4 pt-2 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<div class="d-flex justify-space-between align-center mb-4">
						<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">About user</p>
						<v-menu>
							<template v-slot:activator="{ props }">
								<div>
									<v-img v-bind="props" eager src="/images/more-square.png" width="24" height="24" class="cursor-pointer" />
								</div>
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
					</div>
					<div class="d-flex flex-column flex-md-row align-center ga-10">
						<v-avatar size="120" style="border: 1px solid rgba(236, 236, 236, 1)">
							<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png" cover></v-img>
						</v-avatar>
						<div class="d-flex flex-1 flex-column ga-2">
							<p>
								<span class="mr-5" style="color: #8f8f8f">#1234567879</span>
								<span :class="getStatusClass('Active')" class="user-status">{{ "Active" }}</span>
							</p>
							<p style="font-weight: 800; font-size: 32px; line-height: 1; color: #ececec">Stephanie Sunday</p>
							<p>+234 815 7689 905</p>
							<div>
								<span class="mr-5">
									<span class="mr-2" style="color: #454545; font-weight: 600">User type</span>
									<span style="color: #b5b5b5; font-weight: 600">Buyer | Vendor</span>
								</span>
								<span class="mr-5">
									<span class="mr-2" style="color: #454545; font-weight: 600">Location</span>
									<span style="color: #b5b5b5; font-weight: 600">Nigeria <span class="dot">.</span> Abuja</span>
								</span>
								<span>
									<span class="mr-2" style="color: #454545; font-weight: 600">Since</span>
									<span style="color: #b5b5b5; font-weight: 600">August 02 <span class="dot">.</span> 2024</span>
								</span>
							</div>
						</div>
					</div>
				</v-card>

				<v-card variant="outlined" class="px-3 pb-3 ga-4 my-5" style="border: 0.5px solid #303030; border-radius: 12px">
					<div class="d-flex justify-space-between align-center mb-3">
						<p class="font-weight-bold text-h6 mb-0" style="color: #ececec">Overview</p>
						<div>
							<v-img @click="filterOptions = true" eager src="/images/filter.png" width="40" height="40" class="cursor-pointer" />
						</div>
					</div>

					<div class="d-flex flex-column flex-md-row justify-space-between align-center">
						<div v-for="item in overView" :key="item.name" class="text-center">
							<p style="font-weight: 700; font-size: 20px; line-height: 34px; color: #ececec">{{ item.value }}</p>
							<p style="font-weight: 500; font-size: 16px; line-height: 22.4px; color: #8f8f8f">{{ item.name }}</p>
						</div>
					</div>
				</v-card>

				<v-card variant="outlined" class="px-3 pb-3 ga-4 my-5" style="border: 0.5px solid #303030; border-radius: 12px">
					<p style="font-weight: 700; font-size: 20px; line-height: 34px; color: #ececec" class="">Activity history</p>
					<div class="my-4">
						<v-sheet rounded="lg" style="background-color: transparent">
							<v-tabs v-model="tab" :items="tabs" selected-class="selected-class" slider-color="transparent">
								<template v-slot:tab="{ item }">
									<v-tab
										:ripple="false"
										:text="item.text"
										:value="item.value"
										:class="tab === item.value ? 'my-tab-active' : 'my-tab'"
										class="pl-0"
										style="font-size: 14px; font-weight: 500; line-height: 22px"
									>
										{{ item.text }}
									</v-tab>
								</template>
							</v-tabs>
						</v-sheet>
						<div class="w-50">
							<SearchComponent placeholder="Search" />
						</div>
					</div>

					<v-tabs-window v-model="tab">
						<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
							<component :is="getComponent(tab)" />
						</v-tabs-window-item>
					</v-tabs-window>
				</v-card>
			</v-col>

			<v-col cols="12" md="4">
				<v-card variant="outlined" class="px-4" style="border: 0.5px solid #303030; border-radius: 8px">
					<div class="d-flex align-center justify-space-between">
						<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec">Activity</p>
						<div class="w-66">
							<SearchComponent placeholder="Search" />
						</div>
					</div>

					<div v-for="(act, idx) in activityList" :key="idx" class="pb-5">
						<div class="activity-content flex-1">
							<div class="d-flex align-center ga-2">
								<v-icon size="18" :color="act.color">{{ act.icon }}</v-icon>
								<p class="activity-title">{{ act.title }}</p>
							</div>

							<!-- Long description (suspension / reactivated) -->
							<p v-if="act.type === 'suspension' || act.type === 'reactivated'" class="activity-desc">
								{{ act.description }}
							</p>

							<!-- Strike / Calls (id + subject + source) -->
							<div v-else-if="['strike', 'call_outgoing', 'call_incoming'].includes(act.type)">
								<p class="d-flex align-center">
									<a class="activity-link" href="#" @click.prevent="onIdClick(act)">{{ act.id }}</a>
									<span class="mx-2">•</span>
									<!-- <span class="muted">{{ act.subject }}</span> -->

									<span class="d-flex ga-1 align-center">
										<v-avatar size="16">
											<v-img :src="act.userImg" cover />
										</v-avatar>
										<span style="font-size: 14; color: #ececec">{{ act.subject }}</span>
									</span>
								</p>
							</div>

							<!-- Monetary rows (deposit / withdrawal / transfer) -->
							<div v-else-if="['deposit', 'withdrawal', 'transfer'].includes(act.type)">
								<p>
									{{ act.amount }}
									<span class="mx-2">•</span>
									<a class="activity-link" href="#" @click.prevent="onIdClick(act)">{{ act.id }}</a>
								</p>
							</div>

							<!-- small meta row (avatar + name) -->
							<div class="d-flex align-center justify-space-between">
								<div v-if="act.type === 'suspension' || act.type === 'reactivated' || act.type === 'strike'" class="d-flex align-center ga-2">
									<v-avatar size="16">
										<v-img :src="act.userImg" cover />
									</v-avatar>
									<span class="muted">{{ act.user }}</span>
								</div>
								<!-- <div v-else-if="['deposit', 'withdrawal', 'transfer'].includes(act.type)"> -->
								<p v-if="act.source" class="muted">
									Source <span style="color: #b5b5b5; font-size: 12px">{{ act.source }}</span>
								</p>
								<p v-if="act.recipient && act.type === 'withdrawal'" class="muted">
									Recipient <span class="muted">{{ act.recipient }}</span>
								</p>
								<p v-if="act.recipient && act.type === 'transfer'" class="muted d-flex ga-2">
									<span>Recipient</span>
									<span class="d-flex ga-1 align-center">
										<v-avatar size="16">
											<v-img :src="act.userImg" cover />
										</v-avatar>
										<span style="color: #b5b5b5">{{ act.recipient }}</span>
									</span>
								</p>

								<div class="activity-date">{{ act.date }}</div>
							</div>
						</div>
					</div>
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

const overView = ref([
	{ name: "Current wallet bal.", value: "N2,000,000" },
	{ name: "Total purchases", value: "300,000" },
	{ name: "Total sales", value: "15,904,000" },
	{ name: "Strike", value: "1" },
	{ name: "Escrow", value: "600,000" },
]);

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
		{
			title: "Visit store",
			action: () => {},
		},
		{ title: `${userInfo.status == "Active" ? "Suspend" : "Reactivate"}`, action: () => (confirmSuspendModal.value = true) },
		{ title: "Delete User", action: () => (confirmDeleteUser.value = true) },
	];
};

// --- add below your existing refs in <script setup> ---

const activityList = ref([
	{
		type: "suspension",
		title: "Account suspended",
		description: "This user has received two strikes for spam calls",
		icon: "mdi mdi-account-cancel-outline",
		color: "#f97066",
		bg: "linear-gradient(180deg, rgba(249,112,102,0.12), rgba(180,35,24,0.06))",
		user: "Stella Opara",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "strike",
		title: "Strike issued",
		id: "182738",
		subject: "Oma’s kitchen",
		icon: "mdi mdi-star-circle",
		color: "#ffb020",
		bg: "linear-gradient(180deg, rgba(255,184,32,0.08), rgba(255,157,0,0.02))",
		user: "Stella Opara",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "call_outgoing",
		title: "Outgoing Call",
		id: "182738",
		subject: "Oma’s kitchen",
		source: "Call from Kudibook",
		icon: "mdi mdi-phone-outgoing",
		color: "#3b82f6",
		bg: "transparent",
		user: "Stella Opara",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "call_incoming",
		title: "Incoming Call",
		id: "182738",
		subject: "Oma’s kitchen",
		source: "Call from Kudibook",
		icon: "mdi mdi-phone-incoming",
		color: "#3b82f6",
		bg: "transparent",
		user: "Stella Opara",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "deposit",
		title: "Wallet deposit",
		amount: "₦6,800",
		id: "182738",
		source: "Credit card",
		icon: "mdi mdi-wallet",
		color: "#00b4a0",
		bg: "transparent",
		user: "Credit card",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "withdrawal",
		title: "Withdrawal",
		amount: "₦13,000",
		id: "182738",
		recipient: "UBA | 2089327730 | Okoye Benjamin",
		icon: "mdi mdi-bank-transfer-out",
		color: "#b983ff",
		bg: "transparent",
		user: "Okoye Benjamin",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "transfer",
		title: "Transfer",
		amount: "₦13,000",
		id: "182738",
		recipient: "Oma’s kitchen",
		icon: "mdi mdi-swap-horizontal",
		color: "#00b4a0",
		bg: "transparent",
		user: "Oma’s kitchen",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
	{
		type: "reactivated",
		title: "Account reactivated",
		description: "The issue with this user’s account has been resolved hence, their account reactivated.",
		icon: "mdi mdi-account-check-outline",
		color: "#00b4a0",
		bg: "linear-gradient(180deg, rgba(0,180,160,0.08), rgba(0,108,96,0.03))",
		user: "Stella Opara",
		userImg: "https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png",
		date: "08/02/24 • 11:15",
	},
]);

// small handler for clicks on the link/id — swap for router/open when ready
const onIdClick = (act) => {
	// placeholder: replace with actual navigation / modal open to show details
	console.log("activity clicked:", act);
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
	/* background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%); */
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

.selected-class {
	text-decoration: underline 2px;
	text-underline-offset: 8px;
}
.my-tab {
	color: #8f8f8f;
}

.my-tab-active {
	color: #ececec;
}

/* Activity list styling */
.activity-item {
	/* padding: 16px 0;
	border-bottom: 1px solid rgba(255, 255, 255, 0.03);
	gap: 12px; */
}
.activity-icon {
	width: 44px;
	height: 44px;
	min-width: 44px;
	border-radius: 10px;
	margin-right: 12px;
	display: flex;
}
.activity-content {
	min-width: 0;
} /* allow truncation */
.activity-title {
	font-weight: 500;
	font-size: 14px;
	color: #6a6a6a;
}
.activity-desc {
	color: #ececec;
	margin: 0 0 6px;
	font-size: 14px;
	line-height: 1.3;
}
.activity-strong {
	/* font-weight: 700;
	font-size: 16px;
	color: #ececec;
	margin: 0; */
}
.activity-small {
	font-size: 13px;
	color: #8f8f8f;
	/* margin: 4px 0 0; */
}
.activity-date {
	min-width: 110px;
	color: #8f8f8f;
	font-size: 12px;
	text-align: right;
	/* margin-left: 12px; */
}
.activity-link {
	color: #ececec;
	text-decoration: underline;
}
.muted {
	color: #6a6a6a;
	font-size: 12px;
}
</style>
