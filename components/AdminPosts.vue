<template>
	<div class="px-4 px-md-5">
		<div class="d-flex justify-space-between align-center mb-4">
			<v-sheet rounded="lg" style="background-color: transparent">
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
			<div class="w-66 w-md-25">
				<SearchComponent placeholder="Search" />
			</div>
		</div>
		<v-row dense>
			<v-col cols="12" md="9">
				<v-card class="px-4" style="background-color: transparent">
					<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Filter by</p>

					<v-row style="font-weight: 500; font-size: 18px; line-height: 25.2px; color: #ececec" class="my-5">
						<v-col md="4" sm="12">
							<p class="mb-2">Date</p>

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
										Today
									</v-btn>
								</template>
								<v-card class="pa-2 mt-4" width="100%" style="background-color: #141515; border-radius: 12px">
									<!-- Dynamic Radio Options -->
									<div class="px-4" style="background-color: transparent">
										<div
											v-for="duration in ['Anytime', 'Today', 'Yesterday', 'This week', 'This month']"
											:key="duration"
											class="d-flex justify-space-between align-center mb-2"
										>
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ duration }}</p>
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
							<p class="mb-2">Likes/Shares</p>

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

								<v-card class="pa-2 mt-4" width="275px" height="auto" style="background-color: #141515; border-radius: 12px">
									<div class="my-3 px-4">
										<p>Likes</p>
										<div v-for="n in likes" :key="n" class="d-flex justify-space-between align-center">
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ n }}</p>
											<div>
												<v-radio color="#1288FC" @click.stop v-model="selectedState" :value="n"></v-radio>
											</div>
										</div>
									</div>

									<v-divider class="mt-4" color="#303030" style="border: 1px solid #6c6666"></v-divider>

									<div class="px-4 my-3">
										<p>Shares</p>
										<div v-for="n in shares" :key="n" class="d-flex justify-space-between align-center">
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ n }}</p>
											<div>
												<v-radio color="#1288FC" @click.stop v-model="selectedState" :value="n"></v-radio>
											</div>
										</div>
									</div>
								</v-card>
							</v-menu>
						</v-col>
					</v-row>

					<div class="d-flex mb-4">
						<div class="d-flex align-center ga-5 ml-auto">
							<span style="font-size: 18px; font-weight: 500; color: #b5b5b5">{{ selected.length }} 0f {{ posts.length }} Selected</span>
							<v-img
								@click="confirmDeletePost = true"
								eager
								style="cursor: pointer"
								src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723461122/OnCall/delete_dbkf9b.svg"
								width="40"
								height="40"
							></v-img>
						</div>
					</div>
					<v-data-table
						class="custom-table"
						v-model="selected"
						:headers="headers"
						:items="posts"
						item-value="id"
						items-per-page="6"
						:hide-default-footer="posts.length < 6"
						show-select
						style="background-color: transparent"
					>
						<template v-slot:[`item.user`]="{ item }">
							<div class="d-flex align-center">
								<v-avatar size="24" class="mr-2">
									<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
								</v-avatar>
								<p>{{ item.user }}</p>
							</div>
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
			</v-col>

			<v-col cols="12" md="3">
				<v-card variant="outlined" class="pa-2" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="mb-3">Posts performance overview</p>
					<p style="color: #ececec" class="mb-2">Top 10 performing posts</p>
					<div>
						<AdminPostCard />
					</div>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmDeletePost" persistent max-width="600">
			<ConfirmActionModal
				title="Delete post"
				message="Are you sure you want to delete this post? This action cannot be undone."
				infoTitle="Deleting a post will:"
				:info="removeActionInfo"
				leftBtn="Cancel"
				rightBtn="Delete"
				img="/images/user-remove.svg"
				:leftBtnAction="() => (confirmDeletePost = false)"
				:rightBtnAction="() => (confirmDeletePost = false)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AdminPostCard from "./AdminPostCard.vue";
const router = useRouter();

const selected = ref([]);
const confirmDeletePost = ref(false);
const headers = ref([
	{
		title: "Date",
		align: "start",
		sortable: false,
		key: "date",
	},
	{ title: "User", key: "user" },
	{ title: "Country", key: "country" },
	{ title: "Likes", key: "likes" },
	{ title: "Shares", key: "shares" },
	{ title: "", key: "actions", sortable: false },
]);
const tab = ref("Sellers");
const tabs = [
	{
		text: "Sellers",
		value: "Sellers",
	},
	{
		text: "Buyers",
		value: "Buyers",
	},
];

const handleApply = (selection) => {
	console.log("Selected Item:", selection.selectedItem);
	console.log("Selected Items:", selection.selectedItems);
};

const posts = ref([
	{
		id: "12322",
		date: "12/12/2021",
		country: `${getCurrencyFlag("NG")} Nigeria`,
		user: "John Doe",
		likes: 20,
		shares: 10,
	},
	{
		id: "22322",
		date: "12/12/2021",
		country: `${getCurrencyFlag("US")} United States`,
		user: "Bernard Benjamin",
		likes: 20,
		shares: 10,
	},
	{
		id: "32322",
		date: "12/12/2021",
		country: `${getCurrencyFlag("ZA")} South Africa`,
		user: "Amaka Taiwo",
		likes: 20,
		shares: 10,
	},
	{
		id: "42322",
		date: "12/12/2021",
		country: `${getCurrencyFlag("CA")} Canada`,
		user: "Chinaza Okafor",
		likes: 20,
		shares: 10,
	},
	{
		id: "52322",
		date: "12/12/2021",
		country: `${getCurrencyFlag("NG")} Nigeria`,
		user: "Jerome Bell",
		likes: 20,
		shares: 10,
	},
]);

const formattedContries = computed(() => {
	return contries.map((contry) => ({
		text: `${getCurrencyFlag(contry.flagCode)} ${contry.name}`,
		value: `${contry.name}`,
	}));
});

const likes = ["None", "Highest", "Lowest"];
const shares = ["None", "Highest", "Lowest"];

const menuItems = (userInfo) => {
	return [
		{
			title: "View post",
			action: () => router.push(`/admin/dashboard/Posts%20details/${userInfo.id}`),
		},
		{ title: `Delete post`, action: () => (confirmDeletePost.value = true) },
	];
};

const removeActionInfo = ["Permanently remove the post from the store’s profile"];
</script>

<style scoped>
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
