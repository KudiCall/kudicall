<template>
	<div class="px-4 px-md-5">
		<v-row dense>
			<v-col cols="12" md="9">
				<div style="background-color: #111212" class="d-flex flex-column flex-md-row justify-space-between align-center pa-2 w-100 ga-4 my-5">
					<v-card variant="text" v-for="item in info" :key="item.name" class="text-center">
						<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">{{ item.value }}</p>
						<p style="font-weight: 500; font-size: 16px; line-height: 22.4px; color: #8f8f8f">{{ item.name }}</p>
					</v-card>
				</div>
				<v-card class="px-4" style="background-color: transparent">
					<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Filter by</p>

					<v-row style="font-weight: 500; font-size: 18px; line-height: 25.2px; color: #ececec" class="my-5">
						<v-col md="4" sm="12">
							<p class="mb-2">Category</p>

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
										Electronics
									</v-btn>
								</template>
								<v-card class="pa-3 mt-4" width="275px" height="auto" style="background-color: #141515; border-radius: 12px">
									<div v-for="n in categories" :key="n" class="d-flex justify-space-between align-center">
										<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ n }}</p>
										<div>
											<v-radio color="#1288FC" @click.stop :value="n"></v-radio>
										</div>
									</div>
								</v-card>
							</v-menu>
						</v-col>

						<v-col md="4" sm="12">
							<p class="mb-2">Select country</p>

							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn
										v-bind="props"
										class="d-flex justify-space-between"
										style="width: 275px"
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
							<p class="mb-2">Status</p>

							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn
										v-bind="props"
										class="d-flex justify-space-between"
										style="width: 275px"
										icon-size="24"
										rounded
										size="x-large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
									>
										All
									</v-btn>
								</template>

								<v-card class="pa-3 mt-4" width="275px" height="auto" style="background-color: #141515; border-radius: 12px">
									<div v-for="n in allstatus" :key="n" class="d-flex justify-space-between align-center">
										<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ n }}</p>
										<div>
											<v-radio color="#1288FC" @click.stop :value="n"></v-radio>
										</div>
									</div>
								</v-card>
							</v-menu>
						</v-col>
					</v-row>

					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="products"
						item-value="id"
						items-per-page="6"
						:hide-default-footer="products.length < 6"
						show-select
						style="background-color: transparent"
					>
						<template v-slot:[`item.productname`]="{ item }">
							<div class="d-flex align-center">
								<v-avatar size="24" class="mr-2">
									<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
								</v-avatar>
								<p class="text-truncate">{{ item.productname }}</p>
							</div>
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
								<p>No record yet</p>
							</div>
						</template>
					</v-data-table>
				</v-card>
			</v-col>

			<v-col cols="12" md="3">
				<div class="w-100">
					<SearchComponent placeholder="Search" />
				</div>
				<v-card variant="outlined" class="pa-2" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="mb-3">Product analytics</p>
					<div>
						<ProductAnalyticsCard v-for="(item, index) in financeSummary" :key="index" :name="item.name" :value="item.value" :img="item.img" />
					</div>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmSuspend" persistent max-width="600">
			<ConfirmActionModal
				title="Suspend product"
				message="Are you sure you want to suspend this product? This action cannot be undone."
				infoTitle="Suspending a product will:"
				:info="suspendInfo"
				leftBtn="Cancel"
				rightBtn="Suspend"
				img="/images/bag.svg"
				:leftBtnAction="() => (confirmSuspend = false)"
				:rightBtnAction="() => (confirmSuspend = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ProductAnalyticsCard from "./ProductAnalyticsCard.vue";
const router = useRouter();

const selected = ref([]);
const confirmSuspend = ref(false);
const headers = ref([
	{
		title: "Category",
		align: "start",
		sortable: false,
		key: "category",
	},
	{ title: "Product name", key: "productname" },
	{ title: "Store", key: "store" },
	{ title: "Status", key: "status" },
	{ title: "Price", key: "price" },
	{ title: "", key: "actions", sortable: false },
]);
const info = ref([
	{ name: "Products", value: "90k+" },
	{ name: "Out of stock", value: "1k+" },
	{ name: "Deleted by admin", value: "7K+" },
	{ name: "Deleted by store", value: "7K+" },
	{ name: "Sales", value: "$32K" },
]);

const handleApply = (selection) => {
	console.log("Selected Item:", selection.selectedItem);
	console.log("Selected Items:", selection.selectedItems);
};

const products = ref([
	{
		id: "12322",
		category: "Fashion",
		store: `Belinda Bikes`,
		productname: "Addidas summer 2024 Sneakers",
		status: "Available",
		price: "$ 100",
	},
	{
		id: "22322",
		category: "Fashion",
		store: `Belinda Bikes`,
		productname: "Addidas summer 2024 Sneakers",
		status: "Suspended",
		price: "$ 100",
	},
	{
		id: "32322",
		category: "Fashion",
		store: `Belinda Bikes`,
		productname: "Headphone",
		status: "Out of stock",
		price: "$ 100",
	},
	{
		id: "42322",
		category: "Fashion",
		store: `Belinda Bikes`,
		productname: "Headphone",
		status: "Appealed",
		price: "$ 100",
	},
	{
		id: "52322",
		category: "Fashion",
		store: `Belinda Bikes`,
		productname: "Addidas summer 2024 Sneakers",
		status: "Available",
		price: "$ 100",
	},
]);

const formattedContries = computed(() => {
	return contries.map((contry) => ({
		text: `${getCurrencyFlag(contry.flagCode)} ${contry.name}`,
		value: `${contry.name}`,
	}));
});

const financeSummary = [
	{ name: "Total Sales", value: "$ 120,000", img: "/images/money-3.svg" },
	{ name: "Total Products", value: "90,000", img: "/images/bag-2.svg" },
	{ name: "Out of stock", value: "50", img: "/images/bag-2.svg" },
	{ name: "Deleted by admin", value: "1,000", img: "/images/trash.svg" },
	{ name: "Deleted by store", value: "200", img: "/images/trash.svg" },
];

const categories = ["Fashion", "Grocery", "Electronics"];
const allstatus = ["All", "Available", "Out of stock", "Suspended", "Appealed"];

const menuItems = (userInfo) => {
	return [
		{
			title: "View product",
			action: () => router.push(`/admin/dashboard/Products%20details/${userInfo.productname}`),
		},
		{ title: `View store`, action: () => {} },
		{ title: `Suspend`, action: () => {} },
		{ title: `Activate`, action: () => {} },
	];
};

const getStatusClass = (status) => {
	switch (status) {
		case "Available":
			return "user-status-available";
		case "Suspended":
			return "user-status-suspended";
		case "Out of stock":
			return "user-status-outofstock";
		case "Appealed":
			return "user-status-appealed";
		default:
			return "";
	}
};

const suspendInfo = [
	"Permanently remove the product from buyer’s view of this store’s catalogue, Store owners will however, still see the product and it’s suspended status",
];
const activateInfo = [
	"Permanently remove the product from buyer’s view of this store’s catalogue, Store owners will however, still see the product and it’s suspended status",
];
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
.user-status-available {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}
.user-status-suspended {
	background: linear-gradient(180deg, rgba(249, 112, 102, 0.1) 2.68%, rgba(180, 35, 24, 0.1) 84.82%);
	color: #f97066;
}
.user-status-outofstock {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}
.user-status-appealed {
	background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%);
	color: #1288fc;
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
