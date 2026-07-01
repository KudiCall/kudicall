<template>
	<div class="px-4 px-md-5" style="padding-bottom: 100">
		<AdminUsersChart />

		<div class="d-flex justify-space-between align-center mt-10">
			<v-sheet rounded="lg" style="background-color: transparent">
				<v-tabs v-model="tab" :items="tabs" selected-class="selected-class" slider-color="transparent">
					<template v-slot:tab="{ item }">
						<v-tab
							:text="item.text"
							:value="item.value"
							:class="tab === item.value ? 'my-tab-active' : 'my-tab'"
							class="pl-0 pr-1"
							style="font-size: 18px; font-weight: 500; line-height: 22px"
						>
							{{ item.text }}
						</v-tab>
					</template>
				</v-tabs>
			</v-sheet>
			<div class="d-flex ga-2 align-center">
				<v-img eager src="/images/refresh.svg" width="40" height="40" class="cursor-pointer img-tinted" @click="refreshData"></v-img>
				<v-img @click="filterCountry = true" eager src="/images/global.svg" width="24" height="24" class="cursor-pointer img-tinted"></v-img>
				<v-img @click="filterOptions = true" eager src="/images/filter.png" width="40" height="40" class="cursor-pointer img-tinted"></v-img>
			</div>
		</div>

		<v-tabs-window v-model="tab">
			<v-tabs-window-item v-for="item in tabs" :key="item.value" :value="item.value">
				<v-card class="px-4" style="background-color: transparent">
					<div class="d-flex align-center">
						<div class="search-container">
							<SearchComponent placeholder="Search table" />
						</div>
						<div class="d-flex align-center ga-3 ml-auto">
							<span class="selection-text">{{ selected.length }} of {{ filteredUsers.length }} Selected</span>
							<div class="d-flex align-center ga-3 ml-auto" v-if="selected.length > 0">
								<div class="d-flex align-center ga-1">
									<v-icon color="#D37A39" size="20">mdi mdi-account-remove</v-icon>
									<span class="action-text">Suspend</span>
								</div>
								<div class="d-flex align-center cursor-pointer" @click="confirmDeleteUsers = true">
									<v-img
										eager
										src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg"
										width="40"
										height="40"
									></v-img>
									<span class="action-text">Delete</span>
								</div>
								<div class="d-flex align-center ga-1">
									<v-icon color="#1288FC" size="20">mdi mdi-account</v-icon>
									<span class="action-text">Re-activate</span>
								</div>
							</div>

							<div class="pagination-controls d-flex align-center ga-2">
								<v-btn icon size="small" class="pagination-btn" :disabled="currentPage <= 1" @click="previousPage">
									<v-icon size="16">mdi mdi-chevron-left</v-icon>
								</v-btn>
								<v-btn icon size="small" class="pagination-btn" :disabled="currentPage >= totalPages" @click="nextPage">
									<v-icon size="16">mdi mdi-chevron-right</v-icon>
								</v-btn>
							</div>
						</div>
					</div>

					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="paginatedUsers"
						item-value="UserID"
						items-per-page="6"
						:hide-default-footer="paginatedUsers.length < 6"
						show-select
						style="background-color: transparent"
					>
						<template v-slot:[`item.UserID`]="{ item }">
							<span @click="$router.push(`/admin/dashboard/Users%20details/${item.UserID}`)" class="cursor-pointer">{{ item.UserID }}</span>
						</template>
						<template v-slot:[`item.status`]="{ item }">
							<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
						</template>
						<template v-slot:[`item.walletBalance`]="{ item }">
							<span>₦{{ formatNumber(item.walletBalance) }}</span>
						</template>
						<template v-slot:[`item.purchases`]="{ item }">
							<span>{{ formatNumber(item.purchases) }}</span>
						</template>
						<template v-slot:[`item.sales`]="{ item }">
							<span>₦{{ formatNumber(item.sales) }}</span>
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

		<!-- Suspend User Modal -->
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

		<!-- Delete Users Modal -->
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

		<!-- Country Filter Modal -->
		<v-dialog v-model="filterCountry" persistent max-width="350">
			<v-card class="filter-card" flat>
				<div class="filter-content">
					<div class="filter-options">
						<div class="filter-option" v-for="country in countries" :key="country.value">
							<v-checkbox v-model="selectedCountries" :value="country.value" color="primary" class="filter-checkbox" hide-details>
								<template v-slot:label>
									<div class="d-flex align-center ga-2">
										<div class="country-flag" :class="country.flagClass"></div>
										<span class="filter-label">{{ country.label }}</span>
									</div>
								</template>
							</v-checkbox>
						</div>
					</div>
				</div>

				<div class="filter-actions">
					<v-btn width="140" class="discard-btn" rounded="lg" size="large" @click="discardCountryFilter"> Discard </v-btn>
					<v-btn width="140" class="apply-btn" rounded="lg" size="large" @click="applyCountryFilter"> Apply filter </v-btn>
				</div>
			</v-card>
		</v-dialog>

		<!-- User/Vendor Filter Modal -->
		<v-dialog v-model="filterOptions" persistent max-width="400">
			<v-card class="filter-card" flat>
				<!-- Replace the existing filter-tabs section with this -->
				<div class="filter-tabs">
					<div class="tab-headers">
						<div
							v-for="filterTab in filterTabs"
							:key="filterTab.value"
							@click="activeFilterTab = filterTab.value"
							:class="['tab-header', { active: activeFilterTab === filterTab.value }]"
						>
							{{ filterTab.label }}
						</div>
					</div>
				</div>

				<!-- Replace the entire filter-options section with this -->
				<div class="filter-options">
					<!-- All Users Tab Content -->
					<template v-if="tab === 'All'">
						<template v-if="activeFilterTab === 'all'">
							<div class="filter-option" v-for="option in allUsersFilters" :key="option.value">
								<v-radio-group v-model="selectedAllUsersFilter" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>

						<template v-if="activeFilterTab === 'status'">
							<div class="filter-option" v-for="option in statusOptions" :key="option.value">
								<v-radio-group v-model="selectedStatusFilter" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>
					</template>

					<!-- Vendors Tab Content -->
					<template v-if="tab === 'Vendors'">
						<template v-if="activeFilterTab === 'store-type'">
							<div class="filter-option" v-for="option in storeTypeOptions" :key="option.value">
								<v-radio-group v-model="selectedStoreType" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>

						<template v-if="activeFilterTab === 'status'">
							<div class="filter-option" v-for="option in statusOptions" :key="option.value">
								<v-radio-group v-model="selectedStatusFilter" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>

						<template v-if="activeFilterTab === 'verification'">
							<div class="filter-option" v-for="option in verificationOptions" :key="option.value">
								<v-radio-group v-model="selectedVerification" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>

						<template v-if="activeFilterTab === 'badge'">
							<div class="filter-option" v-for="option in badgeOptions" :key="option.value">
								<v-radio-group v-model="selectedBadge" hide-details>
									<v-radio :value="option.value" color="primary" class="filter-radio">
										<template v-slot:label>
											<div class="radio-label-container">
												<span class="filter-label">{{ option.label }}</span>
											</div>
										</template>
									</v-radio>
								</v-radio-group>
							</div>
						</template>
					</template>
				</div>

				<div class="filter-actions">
					<v-btn width="140" class="discard-btn" rounded="lg" size="large" @click="discardOptionsFilter"> Discard </v-btn>
					<v-btn width="140" class="apply-btn" rounded="lg" size="large" @click="applyOptionsFilter"> Apply filter </v-btn>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

// Reactive data
const selected = ref([]);
const confirmSuspendModal = ref(false);
const confirmDeleteUsers = ref(false);
const currentPage = ref(1);
const itemsPerPage = 6;
const selectAll = ref(false);
const filterCountry = ref(false);
const filterOptions = ref(false);

// Filter states
const selectedCountries = ref(["all"]);
const activeFilterTab = ref("all");
const activeVendorSubtab = ref("store-type");

// All Users Filter
const selectedAllUsersFilter = ref("all-users");

// Vendor Filters
const selectedStoreType = ref("all");
const selectedStatusFilter = ref("active");
const selectedVerification = ref("all");
const selectedBadge = ref("all");

// Applied filters (for actual filtering)
const appliedFilters = ref({
	countries: ["all"],
	userType: "all-users",
	storeType: "all",
	status: "active",
	verification: "all",
	badge: "all",
});

const headers = ref([
	{
		title: "User ID",
		align: "start",
		sortable: true,
		key: "UserID",
	},
	{ title: "Full name", key: "fullName", sortable: true },
	{ title: "User type", key: "userType", sortable: true },
	{ title: "Strikes", key: "strikes", sortable: true },
	{ title: "Wallet bal.", key: "walletBalance", sortable: true },
	{ title: "Purchases", key: "purchases", sortable: true },
	{ title: "Sales", key: "sales", sortable: true },
	{ title: "Status", key: "status", sortable: false },
	{ title: "Action", key: "actions", sortable: false },
]);

const tab = ref("All");
const tabs = [
	{
		text: "All",
		value: "All",
	},
	{
		text: "Vendors",
		value: "Vendors",
	},
];

// Filter options data
const countries = [
	{ label: "All", value: "all", flagClass: "flag-all" },
	{ label: "Nigeria", value: "nigeria", flagClass: "flag-nigeria" },
];

const filterTabs = computed(() => {
	if (tab.value === "All") {
		return [
			{ label: "User type", value: "all" },
			{ label: "Status", value: "status" },
		];
	} else {
		return [
			{ label: "Store type", value: "store-type" },
			{ label: "Status", value: "status" },
			{ label: "Verification", value: "verification" },
			{ label: "Badge", value: "badge" },
		];
	}
});

const allUsersFilters = [
	{ label: "All users", value: "all-users" },
	{ label: "Vendors", value: "vendors" },
];

const storeTypeOptions = [
	{ label: "All", value: "all" },
	{ label: "Product", value: "product" },
	{ label: "Service", value: "service" },
];

const statusOptions = [
	{ label: "Active", value: "active" },
	{ label: "Inactive", value: "inactive" },
	{ label: "Suspended", value: "suspended" },
];

const verificationOptions = [
	{ label: "All", value: "all" },
	{ label: "Verified", value: "verified" },
	{ label: "Unverified", value: "unverified" },
];

const badgeOptions = [
	{ label: "All", value: "all" },
	{ label: "Top sellers", value: "top-sellers" },
	{ label: "New vendor", value: "new-vendor" },
	{ label: "Fast response", value: "fast-response" },
];

// Sample users data with additional properties for filtering
const users = ref([
	{
		UserID: 123456790,
		fullName: "Emmanuel Bakare",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
		userType: "Vendor",
		strikes: 0,
		walletBalance: 5080000,
		purchases: 9670,
		sales: 690080500,
		status: "Active",
		country: "nigeria",
		storeType: "product",
		verification: "verified",
		badge: "top-sellers",
	},
	{
		UserID: 123456791,
		fullName: "Sarah Johnson",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
		userType: "User",
		strikes: 0,
		walletBalance: 2080000,
		purchases: 5670,
		sales: 0,
		status: "Inactive",
		country: "nigeria",
		storeType: null,
		verification: null,
		badge: null,
	},
	{
		UserID: 123456792,
		fullName: "Michael Chen",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		userType: "Vendor",
		strikes: 1,
		walletBalance: 3080000,
		purchases: 8670,
		sales: 450080500,
		status: "Suspended",
		country: "nigeria",
		storeType: "service",
		verification: "unverified",
		badge: "new-vendor",
	},
	{
		UserID: 123456793,
		fullName: "Lisa Anderson",
		avatar: "https://randomuser.me/api/portraits/women/4.jpg",
		userType: "Vendor",
		strikes: 0,
		walletBalance: 7080000,
		purchases: 12670,
		sales: 890080500,
		status: "Active",
		country: "nigeria",
		storeType: "product",
		verification: "verified",
		badge: "fast-response",
	},
	{
		UserID: 123456794,
		fullName: "David Wilson",
		avatar: "https://randomuser.me/api/portraits/men/5.jpg",
		userType: "User",
		strikes: 0,
		walletBalance: 1580000,
		purchases: 3670,
		sales: 0,
		status: "Active",
		country: "nigeria",
		storeType: null,
		verification: null,
		badge: null,
	},
	{
		UserID: 123456795,
		fullName: "Maria Garcia",
		avatar: "https://randomuser.me/api/portraits/women/6.jpg",
		userType: "Vendor",
		strikes: 2,
		walletBalance: 4080000,
		purchases: 7670,
		sales: 320080500,
		status: "Suspended",
		country: "nigeria",
		storeType: "service",
		verification: "verified",
		badge: "top-sellers",
	},
	{
		UserID: 123456796,
		fullName: "James Brown",
		avatar: "https://randomuser.me/api/portraits/men/7.jpg",
		userType: "Vendor",
		strikes: 0,
		walletBalance: 6080000,
		purchases: 11670,
		sales: 720080500,
		status: "Inactive",
		country: "nigeria",
		storeType: "product",
		verification: "unverified",
		badge: "new-vendor",
	},
]);

// Computed properties
const filteredUsers = computed(() => {
	let filtered = users.value;

	// Filter by tab (All vs Vendors)
	if (tab.value === "Vendors") {
		filtered = filtered.filter((user) => user.userType === "Vendor");
	}

	// Apply country filter
	if (!appliedFilters.value.countries.includes("all")) {
		filtered = filtered.filter((user) => appliedFilters.value.countries.includes(user.country));
	}

	// Apply user type filter (only when All tab is active)
	if (tab.value === "All" && appliedFilters.value.userType === "vendors") {
		filtered = filtered.filter((user) => user.userType === "Vendor");
	}

	// Apply vendor-specific filters (only for vendors)
	if (tab.value === "Vendors") {
		// Store type filter
		if (appliedFilters.value.storeType !== "all") {
			filtered = filtered.filter((user) => user.storeType === appliedFilters.value.storeType);
		}

		// Status filter
		if (appliedFilters.value.status !== "all") {
			filtered = filtered.filter((user) => user.status.toLowerCase() === appliedFilters.value.status);
		}

		// Verification filter
		if (appliedFilters.value.verification !== "all") {
			filtered = filtered.filter((user) => user.verification === appliedFilters.value.verification);
		}

		// Badge filter
		if (appliedFilters.value.badge !== "all") {
			filtered = filtered.filter((user) => user.badge === appliedFilters.value.badge);
		}
	}

	return filtered;
});

const totalPages = computed(() => Math.ceil(filteredUsers.value.length / itemsPerPage));

const paginatedUsers = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return filteredUsers.value.slice(start, end);
});

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
};

const previousPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
};

const refreshData = () => {
	// Reset all filters
	appliedFilters.value = {
		countries: ["all"],
		userType: "all-users",
		storeType: "all",
		status: "active",
		verification: "all",
		badge: "all",
	};

	// Reset current page
	currentPage.value = 1;

	// Clear selections
	selected.value = [];

	// Reset filter modal states
	selectedCountries.value = ["all"];
	selectedAllUsersFilter.value = "all-users";
	selectedStoreType.value = "all";
	selectedStatusFilter.value = "active";
	selectedVerification.value = "all";
	selectedBadge.value = "all";
};

const formatNumber = (num) => {
	return new Intl.NumberFormat().format(num);
};

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Users%20details/${userInfo.UserID}`),
		},
		{
			title: `${userInfo.status === "Active" ? "Suspend" : "Reactivate"}`,
			action: () => (confirmSuspendModal.value = true),
		},
	];
};

const getStatusClass = (status) => {
	switch (status) {
		case "Suspended":
			return "user-status-suspended";
		case "Inactive":
			return "user-status-inactive";
		case "Active":
			return "user-status-active";
		default:
			return "";
	}
};

// Filter methods
const applyCountryFilter = () => {
	appliedFilters.value.countries = [...selectedCountries.value];
	currentPage.value = 1; // Reset to first page
	filterCountry.value = false;
};

const discardCountryFilter = () => {
	selectedCountries.value = [...appliedFilters.value.countries];
	filterCountry.value = false;
};

const applyOptionsFilter = () => {
	if (tab.value === "All") {
		appliedFilters.value.userType = selectedAllUsersFilter.value;
		appliedFilters.value.status = selectedStatusFilter.value;

		// Console log for All tab
		console.log("Applied filters for All tab:", {
			userType: selectedAllUsersFilter.value,
			status: selectedStatusFilter.value,
		});
	} else {
		// Apply vendor filters based on active tab
		switch (activeFilterTab.value) {
			case "store-type":
				appliedFilters.value.storeType = selectedStoreType.value;
				console.log("Applied store type filter:", selectedStoreType.value);
				break;
			case "status":
				appliedFilters.value.status = selectedStatusFilter.value;
				console.log("Applied status filter:", selectedStatusFilter.value);
				break;
			case "verification":
				appliedFilters.value.verification = selectedVerification.value;
				console.log("Applied verification filter:", selectedVerification.value);
				break;
			case "badge":
				appliedFilters.value.badge = selectedBadge.value;
				console.log("Applied badge filter:", selectedBadge.value);
				break;
		}
	}
	currentPage.value = 1; // Reset to first page
	filterOptions.value = false;
};

const discardOptionsFilter = () => {
	// Reset modal states to applied values
	selectedAllUsersFilter.value = appliedFilters.value.userType;
	selectedStoreType.value = appliedFilters.value.storeType;
	selectedStatusFilter.value = appliedFilters.value.status;
	selectedVerification.value = appliedFilters.value.verification;
	selectedBadge.value = appliedFilters.value.badge;
	filterOptions.value = false;
};

// Watch for tab changes to update filter options
watch(tab, (newTab) => {
	if (newTab === "All") {
		activeFilterTab.value = "all";
	} else {
		activeFilterTab.value = "vendors";
		activeVendorSubtab.value = "store-type";
	}
});

// Static data
const removeActionInfo = ["Permanently remove their account and all associated data", "Remove their ability to log in and access the platform"];
const suspendActionInfo = ["Remove their ability to log in and access the platform until you reactivate them"];
</script>

<style scoped>
.search-container {
	width: 280px;
}

.selection-text {
	font-size: 16px;
	color: #b5b5b5;
	font-weight: 500;
}

.action-text {
	font-size: 16px;
	font-weight: 500;
	color: #f7f7f7;
}

.pagination-btn {
	background-color: #1a1a1a !important;
	color: #ececec !important;
	min-width: 32px !important;
	width: 32px !important;
	height: 32px !important;
}

.pagination-btn:disabled {
	opacity: 0.3 !important;
}

.custom-table {
	background-color: transparent !important;
}

.custom-table :deep(.v-table__wrapper) {
	background-color: transparent !important;
}

.custom-table :deep(.v-data-table__th) {
	background-color: transparent !important;
	border-bottom: 1px solid #2a2a2a !important;
	font-size: 14px !important;
	font-weight: 500 !important;
	color: #8f8f8f !important;
	padding: 16px 12px !important;
	height: auto !important;
}

.custom-table :deep(.v-data-table__tbody tr) {
	background-color: #0a0a0a !important;
	border: 1px solid transparent;
	margin-bottom: 8px;
	border-radius: 8px;
}

.custom-table :deep(.v-data-table__tbody tr:hover) {
	background-color: rgba(255, 255, 255, 0.02) !important;
}

.custom-table :deep(.v-data-table__tbody tr.v-data-table__selected) {
	border-color: #1288fc !important;
	background-color: rgba(18, 136, 252, 0.1) !important;
}

.custom-table :deep(.v-checkbox .v-selection-control__input) {
	border: 1.5px solid #292929 !important;
	border-radius: 4px !important;
	background-color: transparent !important;
}

.custom-table :deep(.v-checkbox .v-selection-control__input .v-icon) {
	color: #1288fc !important;
}

.user-status {
	border-radius: 6px;
	padding: 4px 12px;
	font-size: 12px;
	line-height: 16px;
	font-weight: 500;
	text-align: center;
	display: inline-block;
	min-width: 80px;
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

.my-tab {
	color: #8f8f8f;
}

.my-tab-active {
	color: #ececec;
}

.img-tinted {
	filter: brightness(0.6);
}

.cursor-pointer {
	cursor: pointer;
}

.selected-class {
	text-decoration: underline 2px;
	text-underline-offset: 8px;
}

/* Filter Modal Styles */
.filter-card {
	background-color: #1c1c1c !important;
	border-radius: 20px !important;
	padding: 20px !important;
	color: #ececec;
}

.filter-header {
	margin-bottom: 20px;
}

.filter-header h3 {
	color: #ececec;
	font-size: 20px;
	font-weight: 500;
	line-height: 28px;
	margin: 0;
}

.filter-content {
	margin-bottom: 24px;
}

.filter-tabs {
	margin-bottom: 20px;
}

.tab-headers {
	display: flex;
	gap: 12px;
	/* border-bottom: 1px solid #3a3a3a; */
}

.tab-header {
	padding: 12px 16px;
	color: #8f8f8f;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	font-size: 18px;
	font-weight: 500;
	transition: all 0.2s;
	padding: 0;
}

.tab-header.active {
	color: #ececec;
	border-bottom-color: #ececec;
	padding: 0;
}

.tab-header:hover {
	color: #ececec;
}

.vendor-subtabs {
	margin-bottom: 16px;
}

.subtab-headers {
	display: flex;
	gap: 0;
	border-bottom: 1px solid #3a3a3a;
}

.subtab-header {
	padding: 8px 12px;
	color: #8f8f8f;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	font-size: 12px;
	font-weight: 500;
	transition: all 0.2s;
	white-space: nowrap;
}

.subtab-header.active {
	color: #ececec;
	border-bottom-color: #1288fc;
}

.subtab-header:hover {
	color: #ececec;
}

.filter-options {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.filter-option {
	padding: 4px 0;
}

.filter-checkbox :deep(.v-selection-control) {
	min-height: auto;
}

.filter-checkbox :deep(.v-selection-control__wrapper) {
	height: auto;
}

.filter-checkbox :deep(.v-selection-control__input .v-icon) {
	color: #1288fc !important;
}

.filter-radio :deep(.v-selection-control) {
	min-height: auto;
	margin: 0;
}

.filter-radio :deep(.v-selection-control__wrapper) {
	height: auto;
}

.filter-radio :deep(.v-selection-control__input) {
	margin-right: 12px;
}

.filter-label {
	color: #ececec;
	font-size: 14px;
	font-weight: 400;
}

.country-flag {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #4a4a4a;
	position: relative;
}

.flag-all::before {
	content: "🌍";
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
}

.flag-nigeria::before {
	content: "🇳🇬";
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 12px;
}

.filter-actions {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	margin-top: 20px;
}

.discard-btn {
	background-color: #3e3e3e !important;
	color: #ececec !important;
	font-weight: 600 !important;
	font-size: 16px !important;
	text-transform: none !important;
}

.apply-btn {
	background-color: #1288fc !important;
	color: #ffffff !important;
	font-weight: 600 !important;
	font-size: 16px !important;
	text-transform: none !important;
}

.discard-btn:hover {
	background-color: #4a4a4a !important;
}

.apply-btn:hover {
	background-color: #0d7ae8 !important;
}
</style>
