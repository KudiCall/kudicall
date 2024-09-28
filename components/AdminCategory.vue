<!-- <template>
	<div class="px-4 px-md-5">
		<v-row dense>
			<v-col cols="12" md="9" class="mt-5">
				<v-card class="pr-8" style="background-color: transparent">
					<div class="d-flex align-center justify-space-between ga-5 mb-5">
						<div class="d-flex align-center ga-5">
							<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">{{ selected.length }} 0f {{ categories.length }} Selected</span>
							<v-img
								@click="confirmDeleteUsers = true"
								eager
								style="cursor: pointer"
								src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg"
								width="40"
								height="40"
							></v-img>
						</div>
						<v-btn class="custom_btn" size="x-large" rounded @click="addCategoryModal = true"> Create category </v-btn>
					</div>
					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="categories"
						item-value="category"
						items-per-page="6"
						:hide-default-footer="categories.length < 6"
						show-select
						style="background-color: transparent"
					>
						<template v-slot:[`item.actions`]="{ item }">
							<div class="d-flex align-center">
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
								<v-img src="/images/drag_vertical.svg" width="24" height="24" alt="drag" />
							</div>
						</template>
						<template #no-data>
							<div class="text-center py-16" style="font-size: 20px; color: #ececec">
								<p>No user yet</p>
							</div>
						</template>
					</v-data-table>
				</v-card>
			</v-col>

			<v-col cols="12" md="3">
				<div class="w-100">
					<SearchComponent placeholder="Search" />
				</div>
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Users analytics</p>
					<AdminUsersChart />
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="addCategoryModal" persistent max-width="600">
			<AdminAddCategory type="create" :leftBtnAction="() => (addCategoryModal = false)" :rightBtnAction="() => (addCategoryModal = false)" />
		</v-dialog>
		<v-dialog v-model="editCategoryModal" persistent max-width="600">
			<AdminAddCategory type="edit" :leftBtnAction="() => (editCategoryModal = false)" :rightBtnAction="() => (editCategoryModal = false)" />
		</v-dialog>
		<v-dialog v-model="confirmDeleteCategory" persistent max-width="600">
			<ConfirmActionModal
				title="Delete category"
				message="Are you sure you want to delete this category? This action cannot be undone."
				infoTitle="Deleting a category will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/box-remove.svg"
				:leftBtnAction="() => (confirmDeleteCategory = false)"
				:rightBtnAction="() => (confirmDeleteCategory = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
const selected = ref([]);
const addCategoryModal = ref(false);
const editCategoryModal = ref(false);
const confirmDeleteCategory = ref(false);
const headers = ref([
	{
		title: "Category",
		align: "start",
		sortable: false,
		key: "category",
	},
	{ title: "Posts", key: "posts" },
	{ title: "Products", key: "products" },
	{ title: "Sales", key: "sales" },
	{ title: "Action", key: "actions", sortable: false },
]);

const categories = ref([
	{
		category: "Groceries & Food",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Transport",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Health & Wellness",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Electronics",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Education",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Accommodation",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Fashion & Clothing",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},

	{
		category: "Labourer services",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
]);

const menuItems = (category) => {
	return [
		{
			title: "Edit",
			action: () => (editCategoryModal.value = true),
		},
		{
			title: "Delete",
			action: () => (confirmDeleteCategory.value = true),
		},
	];
};

const removeActionInfo = ["Remove this category and all associated data"];
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
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}
</style> -->

<!-- -->
<template>
	<div class="px-4 px-md-5">
		<v-row dense>
			<v-col cols="12" md="9" class="mt-5">
				<v-card class="pr-8" style="background-color: transparent">
					<div class="d-flex align-center justify-space-between ga-5 mb-5">
						<div class="d-flex ga-4 align-center">
							<v-checkbox color="#1288FC" class="my-checkbox" label="Select All"></v-checkbox>
							<div class="d-flex align-center ga-5">
								<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">{{ selected.length }} of {{ categories.length }} Selected</span>
								<v-img
									@click="confirmDeleteUsers = true"
									eager
									style="cursor: pointer"
									src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg"
									width="40"
									height="40"
								></v-img>
							</div>
						</div>
						<v-btn class="custom_btn" size="x-large" rounded @click="addCategoryModal = true"> Create category </v-btn>
					</div>
					<div class="mt-8">
						<v-row class="px-3 mb-4" style="background-color: #141515">
							<v-col cols="4">Category</v-col>
							<v-col>Posts</v-col>
							<v-col>Products</v-col>
							<v-col>Sales</v-col>
							<v-col cols="1">Action</v-col>
						</v-row>
						<draggable v-model="categories" @end="onDragEnd" item-key="id">
							<template #item="{ element }">
								<div>
									<v-row class="px-2 mb-5" style="background-color: #0f1010">
										<v-col class="d-flex align-center py-0" cols="4">
											<v-checkbox color="#1288FC" class="my-checkbox" label=""></v-checkbox>
											<span>{{ element.category }}</span>
										</v-col>
										<v-col>{{ element.posts }}</v-col>
										<v-col>{{ element.products }}</v-col>
										<v-col>{{ element.sales }}</v-col>
										<v-col cols="1">
											<div class="d-flex align-center">
												<v-menu>
													<template v-slot:activator="{ props }">
														<v-icon v-bind="props" icon="mdi mdi-dots-vertical" color="#ECECEC" />
													</template>
													<v-list style="background-color: #141515; min-width: 160px; border-radius: 12px">
														<v-list-item
															v-for="(menuItem, i) in menuItems(element)"
															:key="i"
															@click.stop="menuItem.action"
															rounded-xl
															style="color: #ececec; font-weight: 500"
														>
															<v-list-item-title>{{ menuItem.title }}</v-list-item-title>
														</v-list-item>
													</v-list>
												</v-menu>
												<v-img src="/images/drag_vertical.svg" width="24" height="24" alt="drag" class="drag-handle" @mousedown.stop />
											</div>
										</v-col>
									</v-row>
								</div>
							</template>
						</draggable>
					</div>
				</v-card>
			</v-col>
			<v-col cols="12" md="3">
				<div class="w-100">
					<SearchComponent placeholder="Search" />
				</div>
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Users analytics</p>
					<AdminUsersChart />
				</v-card>
			</v-col>
		</v-row>
		<v-dialog v-model="addCategoryModal" persistent max-width="600">
			<AdminAddCategory type="create" :leftBtnAction="() => (addCategoryModal = false)" :rightBtnAction="() => (addCategoryModal = false)" />
		</v-dialog>
		<v-dialog v-model="editCategoryModal" persistent max-width="600">
			<AdminAddCategory type="edit" :leftBtnAction="() => (editCategoryModal = false)" :rightBtnAction="() => (editCategoryModal = false)" />
		</v-dialog>
		<v-dialog v-model="confirmDeleteCategory" persistent max-width="600">
			<ConfirmActionModal
				title="Delete category"
				message="Are you sure you want to delete this category? This action cannot be undone."
				infoTitle="Deleting a category will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/box-remove.svg"
				:leftBtnAction="() => (confirmDeleteCategory = false)"
				:rightBtnAction="() => (confirmDeleteCategory = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

const selected = ref([]);
const addCategoryModal = ref(false);
const editCategoryModal = ref(false);
const confirmDeleteCategory = ref(false);

const categories = ref([
	{
		category: "Groceries & Food",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Transport",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Health & Wellness",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Electronics",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Education",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Accommodation",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
	{
		category: "Fashion & Clothing",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},

	{
		category: "Labourer services",
		posts: 400,
		products: "500K",
		sales: "30M+",
	},
]);

const menuItems = (category) => {
	return [
		{ title: "Edit", action: () => (editCategoryModal.value = true) },
		{ title: "Delete", action: () => (confirmDeleteCategory.value = true) },
	];
};

const onDragEnd = (event) => {
	console.log("Dragged items:", categories.value);
};
</script>

<style scoped>
.drag-handle {
	cursor: move; /* Indicates that the item can be dragged */
}

.my-checkbox :deep(.v-input__details) {
	display: none !important;
}

.custom_btn {
	font-weight: 600;
	font-size: 16px;
	line-height: 22.4px;
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}
</style>
