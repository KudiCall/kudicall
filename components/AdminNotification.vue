<template>
	<div class="px-4 px-md-5">
		<div class="d-flex justify-space-between align-center my-5">
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
			<div class="d-flex justify-space-between ga-4" style="width: 33%">
				<v-btn class="outlined_btn px-5" size="x-large" rounded> Mark all as read </v-btn>
				<v-btn class="custom_btn" size="x-large" rounded> Clear all </v-btn>
			</div>
		</div>
		<v-row dense>
			<v-col cols="12" md="8">
				<v-card class="px-4" style="background-color: transparent">
					<NotificationCard v-for="transaction in transactionHistory" :key="transaction.id" :transaction="transaction" />
				</v-card>
			</v-col>

			<v-col cols="12" md="4">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Notification Settings</p>
					<NotificationSettings />
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmMarkAllAsRead" persistent max-width="755">
			<ConfirmActionModal
				title="Suspend user"
				message="Are you sure you want to suspend this user?"
				infoTitle="Suspending a user will:"
				:info="suspendActionInfo"
				leftBtn="Cancel"
				rightBtn="Suspend user"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmMarkAllAsRead = false)"
				:rightBtnAction="() => (confirmMarkAllAsRead = false)"
			/>
		</v-dialog>
		<v-dialog v-model="confirmClearAll" persistent max-width="755">
			<ConfirmActionModal
				title="Clear all notifications"
				message="Are you sure you want to clear all the notifications? This action cannot be undone?"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmClearAll = false)"
				:rightBtnAction="() => (confirmClearAll = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import NotificationSettings from "./NotificationSettings.vue";

const confirmMarkAllAsRead = ref(false);
const confirmClearAll = ref(false);

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

const transactionHistory = ref([
	{
		id: "123456",
		info: "UserID: #1234567890, Fullname: Selena Gonzalez, Phone number: +2345679027568, Location: Nigeria,",
		title: "New user registered",
		customerName: "Belinda Bikes",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "User Activity",
	},
	{
		id: "123456",
		info: "Affected services: API, User login",
		title: "Server downtime",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "System Alert",
	},
	{
		id: "123457",
		info: "Transaction ID: 1234567890, User: #1234567890, Amount: $100, Channel: Credit Card, Status: Successful ",
		title: "Deposit",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Finance",
	},
	{
		id: "123457",
		info: "Dispute ID: 9876543210, Raised By: buyer456, Against: seller789, Reason: Item not as described, Status: Pending",
		title: "Dispute raised",
		customerName: "Stephanie Sunday",
		customerAvatar: "https://cdn.vuetifyjs.com/images/john.jpg",
		date: "May 01, 2024",
		type: "Dispute",
	},
]);

const removeActionInfo = ["Permanently remove their account and all associated data", "Remove their ability to log in and access the platform"];
const suspendActionInfo = ["Remove their ability to log in and access the platform until you reactivate them"];
</script>

<style scoped>
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
	width: 190px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.outlined_btn {
	width: 190px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	border: 1px solid #1288fc;
	background-color: transparent;
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}
</style>
