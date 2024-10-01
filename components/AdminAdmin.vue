<template>
	<div class="px-4 px-md-5">
		<v-row dense>
			<v-col cols="12" md="9">
				<v-card class="px-4" style="background-color: transparent">
					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="users"
						item-value="email"
						items-per-page="6"
						:hide-default-footer="users.length < 6"
						show-select
						style="background-color: transparent"
					>
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
								<p>No Record yet</p>
							</div>
						</template>
					</v-data-table>
				</v-card>
			</v-col>

			<v-col cols="12" md="3">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-4">Create admin</p>
					<v-form>
						<v-text-field prepend-inner-icon="mdi mdi-account" type="text" variant="solo" placeholder="Full name" autocomplete="off"></v-text-field>
						<v-text-field
							prepend-inner-icon="mdi mdi-email-outline"
							type="text"
							variant="solo"
							placeholder="Email address"
							autocomplete="off"
						></v-text-field>

						<div>
							<p style="font-size: 18px; font-weight: 400; color: #b5b5b5">Permissions</p>
							<v-checkbox color="primary" class="my-checkbox" v-for="n in allPermissions" :label="n"></v-checkbox>
						</div>

						<v-btn color="primary" rounded class="btn px-6 mt-10" size="x-large"> Create admin </v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="editPermissionModal" persistent max-width="600">
			<v-card class="d-flex flex-column ga-6" flat style="background-color: #1c1c1c; padding: 40px; border-radius: 40px">
				<div class="d-flex align-center justify-space-between ga-2">
					<div class="d-flex align-center ga-2">
						<p style="font-weight: 700; color: #ececec; font-size: 24px">Edit permissions</p>
					</div>
					<div>
						<v-img eager style="cursor: pointer" width="32" height="32" src="/images/close-circle.svg" @click="editPermissionModal = false" />
					</div>
				</div>
				<div>
					<p style="font-size: 18px; font-weight: 400; color: #ececec">This admin has access to the following features</p>
					<v-checkbox color="primary" class="my-checkbox" style="color: #e7f3ff" v-for="n in allPermissions" :label="n"></v-checkbox>
				</div>
				<div class="d-flex align-center justify-end mt-5" style="gap: 10px">
					<v-btn
						width="200"
						style="font-weight: 600; font-size: 16px; line-height: 22.4px"
						color="#3E3E3E"
						rounded="xl"
						size="x-large"
						@click="editPermissionModal = false"
						>Cancel</v-btn
					>
					<v-btn
						width="200"
						:class="rightBtn === 'Delete' || rightBtn === 'Logout' ? 'redBtn' : 'blueBtn'"
						style="font-weight: 600; font-size: 16px; line-height: 22.4px"
						rounded="xl"
						color="primary"
						size="x-large"
						@click="editPermissionModal = false"
						>Save changes</v-btn
					>
				</div>
			</v-card>
		</v-dialog>
		<v-dialog v-model="confirmDeleteAdmin" persistent max-width="600">
			<ConfirmActionModal
				title="Delete admin"
				message="Are you sure you want to delete this admin? This action cannot be undone."
				infoTitle="Deleting this admin will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmDeleteAdmin = false)"
				:rightBtnAction="() => (confirmDeleteAdmin = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const selected = ref([]);
const editPermissionModal = ref(false);
const confirmDeleteAdmin = ref(false);
const headers = ref([
	{
		title: "Full Name",
		align: "start",
		sortable: false,
		key: "fullName",
	},
	{ title: "Email", key: "email" },
	{ title: "Permissions", key: "permissions" },

	{ title: "", key: "actions", sortable: false },
]);

const users = ref([
	{
		fullName: "Michael Faraday",
		email: "michaelfaraday1@gmail.com",
		permissions: "Messages, Dispute, Categories",
	},
	{
		fullName: "Michael Faraday",
		email: "michaelfaraday@gmail.com",
		permissions: "Messages, Dispute, Categories",
	},
	{
		fullName: "Michael Faraday",
		email: "michaelfaraday2@gmail.com",
		permissions: "Messages, Dispute, Categories",
	},

	{
		fullName: "Michael Faraday",
		email: "michaelfaraday3@gmail.com",
		permissions: "Messages, Dispute, Categories",
	},
]);

const allPermissions = [
	"Manage users",
	"Manage categories",
	"Manage financials",
	"Manage disputes",
	//  "Manage products", "Manage Posts", "Message"
];

const menuItems = (userInfo) => {
	return [
		{
			title: "View Detail",
			action: () => router.push(`/admin/dashboard/Admin%20Detail/${userInfo.fullName}`),
		},
		{ title: "Edit Permission", action: () => (editPermissionModal.value = true) },
		{ title: `Delete`, action: () => (confirmDeleteAdmin.value = true) },
	];
};

const removeActionInfo = ["Remove their account and all associated data", "Remove their ability to log in and access the platform as an admin"];
const suspendActionInfo = ["Remove their ability to log in and access the platform until you reactivate them"];
</script>

<style scoped>
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
