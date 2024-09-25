<template>
	<div style="background-color: #111212">
		<v-row class="d-flex">
			<v-col
				cols="12"
				lg="24"
				:class="!(currentPage == 'dash') ? 'px-0' : ''"
				style="position: absolute; top: 0; left: 0; z-index: 99"
				:md="!sidebar ? '3' : '24'"
				class="pb-0 pt-0 dash"
			>
				<v-slide-x-transition>
					<AdminSidePanel :currentPage="currentPage" :sidebar="sidebar" @sideFn="sideFn" @changePage="changePage" />
				</v-slide-x-transition>
			</v-col>

			<v-col
				style="position: fixed; right: 0; z-index: 99; height: 102vh; transition: all 0.2s ease-out"
				class="dash maincont"
				:class="sidebar ? 'px-0 ' : 'px-0'"
				cols="12"
				:md="!sidebar ? '12' : '10'"
			>
				<v-card
					style="overflow: scroll; background-color: #0c0d0d"
					id="mainsect"
					min-height="100vh"
					height="100%"
					width="100%"
					:class="!(currentPage == 'dash') ? '' : 'pr-8 py-8'"
					flat
					min
				>
					<div
						class="d-flex justify-space-between align-center px-5"
						style="height: 96px; background-color: #0c0d0d; position: sticky; z-index: 99; top: 0; border-bottom: 1px solid #ffffff0d"
					>
						<div v-if="currentPage != 'User details'" class="h-100 d-flex align-center">
							<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="text-capitalize">{{ currentPage }}</p>
						</div>

						<!-- <div
							v-else-if="currentPage == 'User details' || currentPage == 'Finance Detail' || currentPage == 'Dispute Detail'"
							class="h-100 d-flex align-center"
						> -->
						<div v-else class="h-100 d-flex align-center">
							<v-icon @click="$router.back()" size="32" class="mr-2" icon="mdi mdi-chevron-left"></v-icon>
							<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="text-capitalize">#{{ paramId }}</p>
						</div>
						<!-- <div v-else class="h-100 d-flex align-center">
							<v-btn
								v-if="!(currentPage == 'Create Post') || currentPage == 'Create Article'"
								@click="handleClick"
								size="large"
								v-bind="props"
								variant="text"
								class="pa-0"
							>
								<v-icon size="24" class="mr-2" icon="mdi mdi-chevron-left"></v-icon>
								lslsl
							</v-btn>
						</div> -->

						<div class="d-flex ga-4 align-center d-md-none">
							<v-avatar size="38" class="pa-2" color="#313131">
								<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1723051734/OnCall/search-normal_zl2ush.svg" alt="search" cover></v-img>
							</v-avatar>
							<v-icon
								@click="useAdminStore().sideBtn = !useAdminStore().sideBtn"
								:icon="useAdminStore().sideBtn ? 'mdi mdi-text' : 'mdi mdi-close-circle-outline'"
								size="32"
								color="#ECECEC"
							></v-icon>
						</div>

						<div class="d-none d-md-flex ga-8 align-center w-50">
							<SearchComponent placeholder="Search" />
							<div class="d-flex ga-2 align-center">
								<v-avatar size="56" class="avatar pa-3">
									<v-img width="32" height="32" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172529/OnCall/message_oe3euj.png"></v-img>
								</v-avatar>
								<v-avatar size="56" class="avatar pa-3">
									<v-img
										width="32"
										height="32"
										src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172545/OnCall/notification-bing_zdxw8u.png"
									></v-img>
								</v-avatar>
								<v-avatar size="56" class="">
									<v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
								</v-avatar>
							</div>
						</div>
					</div>
					<v-window :touch="false" style="padding-top: 6px; background-color: #0c0d0d" v-model="currentPage">
						<v-window-item :value="'Dashboard'">
							<AdminDashboard />
						</v-window-item>
						<v-window-item :value="'Users'">
							<AdminUsers @changePage="changePage" />
						</v-window-item>
						<v-window-item :value="'User details'">
							<AdminUserDetail />
						</v-window-item>
						<v-window-item :value="'Finance'">
							<AdminFinance />
						</v-window-item>
						<v-window-item :value="'Finance Detail'">
							<AdminFinanceDetail />
						</v-window-item>
						<v-window-item :value="'Dispute'">
							<AdminDispute />
						</v-window-item>
						<v-window-item :value="'Dispute Detail'">
							<AdminDisputeDetail />
						</v-window-item>
						<v-window-item :value="'Admin'">
							<p class="pa-8">Admin page</p>
						</v-window-item>
						<v-window-item :value="'Category'">
							<p class="pa-8">Category page</p>
						</v-window-item>
						<v-window-item :value="'Messages'">
							<p class="pa-8">Messages page</p>
						</v-window-item>
						<v-window-item :value="'Notifications'">
							<p class="pa-8">Notifications page</p>
						</v-window-item>
					</v-window>
				</v-card>
			</v-col>
		</v-row>

		<v-dialog v-model="confirmLogout" persistent max-width="550">
			<ConfirmActionModal
				title="Logout"
				message="Are you sure you want to logout of OnCall?"
				leftBtn="Cancel"
				rightBtn="Logout"
				img="/images/logout.svg"
				:leftBtnAction="() => (confirmLogout = false)"
				:rightBtnAction="() => (confirmLogout = $router.push('/admin/login'))"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
import { useAdminStore } from "~/stores/adminStore";
import { useRouter, useRoute } from "#vue-router";
import SearchComponent from "~/components/SearchComponent.vue";

const sidebar = computed(() => useAdminStore().sideBtn);
const router = useRouter();
const route = useRoute();
const confirmLogout = ref(false);

const paramId = route.params.slug;

const currentPage = ref(route.params.name ? route.params.name : "Dashboard");

// console.log("curr", route.params.slug);
watch(
	() => route.params.name,
	(name) => {
		currentPage.value = name;
	}
);

const handleClick = () => {
	if (currentPage.value === "User details") {
		router.push("/Users");
	} else if (currentPage.value === "Create Post" || currentPage.value === "Edit Post") {
		router.push("/admin/dashboard/Posts");
	} else if (currentPage.value === "Create Article" || currentPage.value === "Edit Article") {
		router.push("/admin/dashboard/Articles");
	} else {
		router.push("/admin/dashboard/Users");
	}
};

function changePage(n) {
	if (n == "Logout") {
		return (confirmLogout.value = true);
		// return router.push("/admin/login");
	}
	return router.push(`/admin/dashboard/${n}`);
}

// function changeTab(n){
// 	// router.push(`/admin/dashboard/Settings/${n}`)
// 	route.params.tab = n
// }
function sideFn() {
	useAdminStore().sideBtn = false;
}

// const curPageValue = computed(() => {
// 	if (currentPage.value === "User details") {
// 		return "Users";
// 	} else if (currentPage.value === "Create Post" || currentPage.value === "Edit Post") {
// 		return "Posts";
// 	} else if (currentPage.value === "Create Article" || currentPage.value === "Edit Article") {
// 		return "Articles";
// 	} else {
// 		return "Users";
// 	}
// });
</script>

<style>
.maincont.v-col-md-12 {
	max-width: calc(100% - 85px);
}

@media (min-width: 600px) {
	.dash.v-col-md-3 {
		flex: 0 0 20% !important;
		max-width: 20% !important;
	}
	.dash.v-col-md-9 {
		flex: 0 0 80% !important;
		max-width: 80% !important;
	}
}

.avatar {
	background: rgba(48, 48, 48, 0.1);
}
</style>
