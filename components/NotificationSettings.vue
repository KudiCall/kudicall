<!-- <template>
	<div>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Notification Method</p>

			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Email</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Dashboard alerts</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
		</v-card>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">User activity</p>

			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">New user registration</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">New store created</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
		</v-card>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">System alerts</p>

			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Server downtime</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Maintenance alerts</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
		</v-card>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Dispute</p>

			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">New dispute</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Status update</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
		</v-card>
		<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
			<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Finance</p>

			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Escrow</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div class="d-flex justify-space-between align-center w-100">
				<div>
					<p style="font-size: 16px; font-weight: 400; color: #fff">Payouts</p>
				</div>
				<div class="px-2">
					<v-checkbox-btn color="primary"></v-checkbox-btn>
				</div>
			</div>
			<div>
				<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Deposits</p>

				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Successful</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Failed</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Pending</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
			</div>
			<div>
				<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Withdrawals</p>

				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Successful</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Failed</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Pending</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
			</div>
			<div>
				<p style="font-weight: 400; font-size: 20px; line-height: 28px; color: #b5b5b5" class="pb-2">Transfers</p>

				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Successful</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Failed</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
				<div class="d-flex justify-space-between align-center w-100">
					<div>
						<p style="font-size: 16px; font-weight: 400; color: #fff">Pending</p>
					</div>
					<div class="px-2">
						<v-checkbox-btn color="primary"></v-checkbox-btn>
					</div>
				</div>
			</div>
		</v-card>

		<v-btn class="custom_btn mt-5" size="large" rounded> Save changes </v-btn>
	</div>
</template>

<script setup></script>

<style scoped>
.custom_btn {
	width: 150px;
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}
</style> -->

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
