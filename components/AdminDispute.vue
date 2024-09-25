<template>
	<div class="px-4 px-md-5">
		<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec" class="pb-4">Summary</p>

		<v-row class="d-flex align-center justify-space-between my-4 ga-4 px-3">
			<AdminDisputeCard v-for="(item, index) in disputeSummary" :key="index" :name="item.name" :value="item.value" />
		</v-row>

		<v-card class="" style="background-color: transparent">
			<v-sheet rounded="lg" style="background-color: transparent" class="mt-2">
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
			<v-tabs-window v-model="tab">
				<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
					<v-card class="" style="background-color: transparent">
						<div class="d-flex justify-end">
							<div class="w-100 w-md-25">
								<SearchComponent placeholder="Search" />
							</div>
						</div>

						<v-data-table
							class="custom-table"
							v-model="selected"
							:headers="headers"
							:items="users"
							item-value="DisputeID"
							items-per-page="6"
							:hide-default-footer="users.length < 5"
							style="background-color: transparent"
						>
							<template v-slot:[`item.DisputeID`]="{ item }">
								<span
									class="text-decoration-underline cursor-pointer"
									style="color: #00b4a0"
									@click="$router.push(`/admin/dashboard/Dispute Detail/${item.DisputeID}`)"
									>#{{ item.DisputeID }}
								</span>
							</template>

							<template v-slot:[`item.status`]="{ item }">
								<v-chip class="dispute-status" :class="getStatusClass(item.status)">
									{{ item.status }}
								</v-chip>
								<!-- <span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span> -->
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
		</v-card>

		<v-dialog v-model="updateStatusModal" persistent max-width="755">
			<AdminUpdateStatus :leftBtnAction="() => (updateStatusModal = false)" :rightBtnAction="() => (updateStatusModal = false)" />
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const selected = ref([]);
const updateStatusModal = ref(false);
const headers = ref([
	{ title: "Date", key: "date" },

	{
		title: "DisputeID",
		align: "start",
		sortable: false,
		key: "DisputeID",
	},
	{ title: "OrderID", key: "OrderID" },
	{ title: "BuyerEmail", key: "buyerEmail" },
	{ title: "StoreEmail", key: "StoreEmail" },
	{ title: "Status", key: "status" },
	{ title: "", key: "actions", sortable: false },
]);
const tab = ref("tab-1");
const disputeSummary = [
	{ name: "Total Dispute", value: "20" },
	{ name: "Cancelled", value: "5" },
	{ name: "Resolved", value: "10" },
	{ name: "Pending", value: "0" },
	{ name: "In progress", value: "0" },
];
const tabs = [
	{
		text: "All",
		value: "tab-1",
	},
	{
		text: "Pending",
		value: "tab-2",
	},
	{
		text: "In progress",
		value: "tab-3",
	},
	{
		text: "Cancelled",
		value: "tab-4",
	},
	{
		text: "Resolved",
		value: "tab-5",
	},
];

const users = [
	{
		DisputeID: 1234567898,
		date: "24/08/24",
		OrderID: 1234567898,
		buyerEmail: "sandraapeh@gmail.com",
		status: "Pending",
		StoreEmail: "belindabikes@gmail.com",
	},
	{
		DisputeID: 1234567899,
		date: "24/08/24",
		OrderID: 1234567898,
		buyerEmail: "sandraapeh@gmail.com",
		status: "Resolved",
		StoreEmail: "belindabikes@gmail.com",
	},
	{
		DisputeID: 1234567899,
		date: "24/08/24",
		OrderID: 1234567898,
		buyerEmail: "sandraapeh@gmail.com",
		StoreEmail: "belindabikes@gmail.com",
		status: "Cancelled",
	},
	{
		DisputeID: 1234567899,
		date: "24/08/24",
		OrderID: 1234567898,
		buyerEmail: "sandraapeh@gmail.com",
		StoreEmail: "belindabikes@gmail.com",
		status: "In progress",
	},
	{
		DisputeID: 1234567899,
		date: "24/08/24",
		OrderID: 1234567898,
		buyerEmail: "sandraapeh@gmail.com",
		StoreEmail: "belindabikes@gmail.com",
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

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Dispute%20Detail/${userInfo.DisputeID}`),
		},
		{ title: "Update Status", action: () => (updateStatusModal.value = true) },
	];
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
	/* color-scheme: linear-gradient(180deg, #f97066 2.68%, #b42318 84.82%); */
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
	background: rgba(143, 143, 143, 1);
	color: #232323;
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
</style>
