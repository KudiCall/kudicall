<template>
	<div class="px-4 px-md-5">
		<v-row>
			<v-col cols="12" md="9">
				<div style="background-color: #111212" class="d-flex justify-space-between align-center pa-2">
					<v-card variant="text" v-for="item in info" :key="item.name" class="text-center">
						<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">{{ item.value }}</p>
						<p style="font-weight: 500; font-size: 16px; line-height: 22.4px; color: #8f8f8f">{{ item.name }}</p>
					</v-card>
				</div>
				<div>
					<div class="d-flex justify-end">
						<div class="w-100 w-md-33">
							<SearchComponent placeholder="Search" />
						</div>
					</div>
					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="users"
						item-value="country"
						items-per-page="6"
						show-select
						style="background-color: transparent"
					>
						<template v-slot:[`item.status`]="{ item }">
							<span :class="getStatusClass(item.status)" class="user-status">{{ item.status }}</span>
						</template>
						<template v-slot:[`item.actions`]="{ item }">
							<v-menu>
								<template v-slot:activator="{ props }">
									<v-icon v-bind="props" icon="mdi mdi-dots-vertical" color="#ECECEC" />
								</template>

								<v-card class="px-4 pb-4 pt-2" style="background-color: #141515; min-width: 250px; border-radius: 12px">
									<div class="d-flex justify-space-between align-center">
										<p>{{ switchState ? "Turn off intake" : "Turn on intake" }}</p>
										<div class="">
											<v-switch @click.stop="toggleIntake" v-model="switchState" color="primary" hide-details inset></v-switch>
										</div>
									</div>
									<p class="cursor-pointer" @click="confirmDeleteCountry = true">Delete</p>
								</v-card>
							</v-menu>
						</template>
						<template #no-data>
							<div class="text-center py-16" style="font-size: 20px; color: #ececec">
								<p>No user yet</p>
							</div>
						</template>
					</v-data-table>
				</div>
			</v-col>

			<v-col cols="12" md="3">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-4">Add country</p>
					<v-form>
						<v-menu>
							<template v-slot:activator="{ props }">
								<v-btn
									v-bind="props"
									class="d-flex justify-space-between"
									style="width: 275px; color: #ececec"
									icon-size="24"
									rounded
									size="x-large"
									color="#161818"
									append-icon="mdi mdi-chevron-down"
								>
									Select Country
								</v-btn>
							</template>

							<v-card class="pa-1 mt-4" width="250px" height="400px" style="background-color: #141515; border-radius: 12px">
								<!-- Title -->
								<v-card-title class="d-flex justify-start mb-2">
									<div>
										<h3 style="font-weight: 700; font-size: 18px; line-height: 24.5px; color: #ececec">Country</h3>
										<p style="font-weight: 400; font-size: 16px; line-height: 22.4px; color: #8f8f8f">Select target country</p>
									</div>
								</v-card-title>

								<!-- Individual Items with checkboxes -->
								<div class="px-4" style="background-color: transparent">
									<div v-for="item in formattedContries" :key="item" class="d-flex justify-space-between align-center">
										<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ item.text }}</p>
										<div>
											<v-radio color="#1288FC" @click.stop></v-radio>
										</div>
									</div>
								</div>
							</v-card>
						</v-menu>

						<v-btn color="primary" rounded class="btn px-6 mt-10" size="x-large"> Add Country </v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmDeleteCountry" persistent max-width="600">
			<ConfirmActionModal
				title="Delete country"
				message="Are you sure you want to delete this country? This action cannot be undone"
				infoTitle="Deleting a country will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/global.svg"
				:leftBtnAction="() => (confirmDeleteCountry = false)"
				:rightBtnAction="() => (confirmDeleteCountry = false)"
			/>
		</v-dialog>
		<!-- Confirm Turning On Intake -->
		<v-dialog v-model="confirmOnIntake" persistent max-width="600">
			<ConfirmActionModal
				title="Turn on intake"
				message="Are you sure you want to resume receiving new users from this country?"
				leftBtn="Cancel"
				rightBtn="Turn on"
				img="/images/toggle-off-circle.svg"
				:leftBtnAction="
					() => {
						switchState = false;
						confirmOnIntake = false;
					}
				"
				:rightBtnAction="confirmTurnOnIntake"
			/>
		</v-dialog>

		<!-- Confirm Turning Off Intake -->
		<v-dialog v-model="confirmOffIntake" persistent max-width="600">
			<ConfirmActionModal
				title="Turn off intake"
				message="Are you sure you want to stop receiving new users from this country?"
				leftBtn="Cancel"
				rightBtn="Turn off"
				img="/images/toggle-on-circle.svg"
				:leftBtnAction="
					() => {
						switchState = true;
						confirmOffIntake = false;
					}
				"
				:rightBtnAction="confirmTurnOffIntake"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
const switchState = ref(false);
const confirmDeleteCountry = ref(false);
const confirmOnIntake = ref(false);
const confirmOffIntake = ref(false);

// Function to handle the switch click
const toggleIntake = () => {
	if (switchState.value) {
		confirmOffIntake.value = true; // Show the "turn off" confirmation modal
	} else {
		confirmOnIntake.value = true; // Show the "turn on" confirmation modal
	}
};

// Confirm actions for the modals
const confirmTurnOnIntake = () => {
	switchState.value = true; // Set the switch state to on
	confirmOnIntake.value = false; // Close the modal
};

const confirmTurnOffIntake = () => {
	switchState.value = false; // Set the switch state to off
	confirmOffIntake.value = false; // Close the modal
};

const headers = ref([
	{ title: "Country", key: "country" },
	{ title: "Status", key: "status" },
	{ title: "Action", key: "actions", sortable: false },
]);
const info = ref([
	{ name: "Countries", value: 2 },
	{ name: "Active", value: 1 },
	{ name: "Inactive", value: 1 },
]);

const users = ref([
	{
		country: `${getCurrencyFlag("NG")} Nigeria`,
		status: "Active",
	},

	{
		country: `${getCurrencyFlag("ZA")} South Africa`,
		status: "In active",
	},
	{
		country: `${getCurrencyFlag("CA")} Canada`,
		status: "Active",
	},
	{
		country: `${getCurrencyFlag("GH")} Ghana`,

		status: "In active",
	},
]);

const formattedContries = computed(() => {
	return contries.map((contry) => ({
		text: `${getCurrencyFlag(contry.flagCode)} ${contry.name}`,
		value: `${contry.name}`,
	}));
});

const getStatusClass = (status) => {
	switch (status) {
		case "In active":
			return "user-status-inactive";
		case "Active":
			return "user-status-active";
		default:
			return "";
	}
};

const removeActionInfo = [
	"Remove it from the list of your supported countries",
	"Prevent all existing users from this country from accessing the app",
];
</script>

<style scoped>
.user-status {
	border-radius: 6px;
	padding: 4px 10px;
	font-size: 16px;
	line-height: 22.4px;
	font-weight: 500;
	min-width: 100px;
	text-align: center;
}

.user-status-inactive {
	background: linear-gradient(180deg, rgba(211, 122, 57, 0.1) 2.68%, rgba(180, 80, 7, 0.1) 84.82%);
	color: #d37a39;
}

.user-status-active {
	background: linear-gradient(185.49deg, rgba(0, 180, 160, 0.1) 15%, rgba(0, 108, 96, 0.1) 85.96%);
	color: #00b4a0;
}
.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}
</style>
