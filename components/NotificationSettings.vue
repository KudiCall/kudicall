<template>
	<div>
		<v-card
			v-for="(card, index) in notificationCards"
			:key="index"
			variant="outlined"
			class="pa-5 mb-3"
			style="border: 0.5px solid #303030; border-radius: 8px"
		>
			<p class="card-title pb-2">{{ card.title }}</p>

			<div v-for="(item, idx) in card.items" :key="idx" class="d-flex justify-space-between align-center w-100">
				<div>
					<p class="item-text">{{ item }}</p>
				</div>
				<div>
					<v-checkbox-btn color="primary" />
				</div>
			</div>
		</v-card>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<NotificationSettingsSection title="Finance" :items="financeItems" />
			<NotificationSettingsSection title="Deposits" :items="depositItems" />
			<NotificationSettingsSection title="Withdrawals" :items="withdrawalItems" />
			<NotificationSettingsSection title="Transfers" :items="transferItems" />
		</v-card>

		<v-btn class="custom_btn mt-5" size="x-large" rounded>Save changes</v-btn>
	</div>
</template>

<script setup>
const notificationCards = [
	{
		title: "Notification Method",
		items: ["Email", "Dashboard alerts"],
	},
	{
		title: "User activity",
		items: ["New user registration", "New store created"],
	},
	{
		title: "System alerts",
		items: ["Server downtime", "Maintenance alerts"],
	},
	{
		title: "Dispute",
		items: ["New dispute", "Status update"],
	},
];

const financeItems = ["Escrow", "Payouts"];
const depositItems = ["Successful", "Failed", "Pending"];
const withdrawalItems = ["Successful", "Failed", "Pending"];
const transferItems = ["Successful", "Failed", "Pending"];
</script>

<style scoped>
.custom_btn {
	width: 200px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.card-title {
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	color: #b5b5b5;
}

.item-text {
	font-size: 16px;
	font-weight: 400;
	color: #fff;
}

/* .card-title {
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	color: #b5b5b5;
	padding-bottom: 8px;
} */

.section {
	margin-bottom: 24px;
}
</style>
