<template>
	<div class="px-4 px-md-5">
		<div class="d-flex justify-space-between align-center mb-4">
			<v-sheet rounded="lg" style="background-color: transparent">
				<v-tabs v-model="tab" :items="tabs" align-tabs="center" color="white" height="50">
					<template v-slot:tab="{ item }">
						<v-tab
							:text="item.text"
							:value="item.value"
							rounded
							:class="tab === item.value ? 'my-chip--active' : 'my-chip'"
							class="mx-3 d-flex align-center justify-center"
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
								<div class="d-flex align-center ml-auto">
									<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">2 0f 10,000 Selected</span>
									<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg" width="28" height="28"></v-img>
								</div>
							</div>

							<v-data-table :items="disputes" item-value="name" show-select style="background-color: transparent">
								<template v-slot:header="{ props }">
									<tr>
										<th>
											<v-checkbox-btn
												:indeterminate="props.someSelected && !props.allSelected"
												:model-value="props.allSelected"
												color="primary"
												@update:model-value="props.selectAll(!props.allSelected)"
											/>
										</th>
										<th>Date</th>
										<th>Dispute ID</th>
										<th>Order ID</th>
										<th>Buyer Email</th>
										<th>Store Email</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</template>

								<template v-slot:item="{ item, props }">
									<tr>
										<td>
											<v-checkbox-btn :model-value="props.isSelected(item)" color="primary" @update:model-value="props.toggleSelect(item)" />
										</td>
										<td>{{ item.date }}</td>
										<td>#{{ item.disputeID }}</td>
										<td>#{{ item.orderID }}</td>
										<td>{{ item.buyerEmail }}</td>
										<td>{{ item.storeEmail }}</td>
										<td>
											<v-chip :class="getStatusClass(item.status)">
												{{ item.status }}
											</v-chip>
										</td>
										<td>
											<v-icon icon="mdi-dots-vertical" color="#ECECEC" @click="console.log(item)" />
										</td>
									</tr>
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
const disputes = [
	{
		date: "24/08/24",
		disputeID: 123456,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Cancelled",
	},
	{
		date: "24/08/24",
		disputeID: 123457,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Pending",
	},
	{
		date: "24/08/24",
		disputeID: 123458,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "Resolved",
	},
	{
		date: "24/08/24",
		disputeID: 123458,
		orderID: 123456,
		buyerEmail: "sandraapeh@gmail.com",
		storeEmail: "sandraapeh@gmail.com",
		status: "In progress",
	},
];

const getStatusClass = (status) => {
	switch (status) {
		case "Cancelled":
			return "dispute-status-cancelled";
		case "In progress":
			return "dispute-status-inprogress";
		case "Resolved":
			return "dispute-status-resolved";
		case "Pending":
			return "dispute-status-pending";
		default:
			return "";
	}
};
</script>

<style scoped>
.dispute-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	width: 89px;
	text-align: center;
}
.dispute-status-cancelled {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
}
.dispute-status-inprogress {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.dispute-status-resolved {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}

.dispute-status-pending {
	background: #8f8f8f1a;
	color: #8f8f8f;
}

.my-chip {
	background-color: #161818;
	border-radius: 16px !important;
}

.my-chip--active {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.2) 15%, rgba(0, 108, 96, 0.2) 85.96%);
	border: 1px solid;
	border-image-source: linear-gradient(185.49deg, #00b4a0 15%, #006c60 85.96%);
	border-radius: 16px !important;
}
</style>
