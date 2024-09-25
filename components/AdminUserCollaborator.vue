<template>
	<div>
		<v-card class="px-4 mb-5" style="background-color: transparent">
			<p class="mb-2" style="font-size: 20px; font-weight: 700; color: #b5b5b5; line-height: 28px">Stores user collaborates in</p>
			<v-data-table
				class="custom-table"
				:headers="headers"
				:items="users"
				item-value="storeName"
				items-per-page="6"
				:hide-default-footer="users.length < 5"
				style="background-color: transparent"
			>
				<template #no-data>
					<div class="text-center py-16" style="font-size: 20px; color: #ececec">
						<p>No user yet</p>
					</div>
				</template>
			</v-data-table>
		</v-card>
		<v-card class="px-4" style="background-color: transparent">
			<p class="mb-2" style="font-size: 20px; font-weight: 700; color: #b5b5b5; line-height: 28px">User’s store collaborators</p>
			<v-data-table
				class="custom-table"
				:headers="headers"
				:items="users"
				item-value="storeName"
				items-per-page="6"
				:hide-default-footer="users.length < 5"
				style="background-color: transparent"
			>
				<template #no-data>
					<div class="text-center py-16" style="font-size: 20px; color: #ececec">
						<p>No user yet</p>
					</div>
				</template>
			</v-data-table>
		</v-card>
	</div>
</template>

<script setup>
const headers = ref([
	{
		title: "Collaborator",
		align: "start",
		sortable: false,
		key: "storeName",
	},
	{ title: "Date", key: "date" },
	{ title: "Permission", key: "permission" },
]);

const users = ref([
	{
		storeName: "Belinda Bikes",
		date: "12/12/2021",
		permission: "Profile, Order. Product",
	},
	{
		storeName: "Israel Bayo",
		date: "12/12/2021",
		permission: "Profile",
	},
	{
		storeName: "Ada shoes",
		date: "12/12/2021",
		permission: "Profile, Order. Product",
	},
]);
</script>

<style scoped>
.custom-table :deep(.v-data-table-footer__items-per-page) {
	display: none;
}
.custom-table :deep(.v-data-table__checkbox) {
	border: 1.5px solid #292929;
	border-radius: 4px;
}
</style>
