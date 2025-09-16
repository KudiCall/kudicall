<!-- <template>
	<v-card width="calc(100% - 100px)" height="100vh" class="rounded-0 style-0" flat="" color="#0F1010" min="">
		<div class="" style="position: absolute; z-index: 99; left: 0px; padding-top: 32px">
			<div class="d-flex align-center justify-space-between px-8 ga-10">
				<h4 v-show="sidebar" class="logo pacifico" color="primary">OnCall</h4>
				<v-icon
					class="d-none d-md-block"
					@click="adminStore.sideBtn = !adminStore.sideBtn"
					:icon="adminStore.sideBtn ? 'fas fa-angles-left' : 'fas fa-angles-right'"
					size="18"
					color="#ECECEC"
				></v-icon>
			</div>
			<div id="menuV" class="scroll-container" style="top: 32px; position: relative; overflow-y: scroll; margin-bottom: 40px">
				<div v-for="(item, i) in items" :key="i" class="pb-8">
					<div @click="selectItem(n.text)" class="align-center px-4 text-capitalize py-2 style-2" v-for="(n, i) in item.list" :key="i" style="">
						<div class="d-flex align-center justify-space-between">
							<div class="d-flex align-center" :class="isActive(n.text) ? 'bg active-bg' : 'bg'">
								<v-avatar v-if="n.text === 'Profile'" size="24" class="mr-2">
									<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover></v-img>
								</v-avatar>
								<v-icon v-else size="24" :color="isActive(n.text) ? '#0d5fb0' : '#8f8f8f'" class="mr-2" :icon="n.icon"></v-icon>
								<p v-show="sidebar" :class="isActive(n.text) ? 'active' : 'not-active'" class="style-3 title">{{ n.text }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-card>
</template> -->

<template>
	<v-card width="calc(100% - 100px)" height="100vh" class="rounded-0 style-0" flat color="#0F1010">
		<div style="position: absolute; z-index: 99; left: 0px; padding-top: 32px">
			<div class="d-flex align-center justify-space-between px-8 ga-10">
				<!-- <h4 v-show="sidebar" class="logo pacifico" color="primary">OnCall</h4> -->
				<v-img v-show="sidebar" eager width="100" height="16" :src="'/kudicall.png'" />
				<v-icon
					class="d-none d-md-block"
					@click="adminStore.sideBtn = !adminStore.sideBtn"
					:icon="adminStore.sideBtn ? 'fas fa-angles-left' : 'fas fa-angles-right'"
					size="18"
					color="#ECECEC"
				/>
			</div>

			<!-- Ensure scroll-container uses available height dynamically -->
			<div id="menuV" class="scroll-container pt-4" style="position: relative; overflow-y: auto; margin-bottom: 40px; height: calc(100vh - 80px)">
				<div v-for="(item, i) in items" :key="i" class="pb-8">
					<div @click="selectItem(n.text)" class="align-center px-4 text-capitalize py-2 style-2" v-for="(n, i) in item.list" :key="i">
						<div class="d-flex align-center justify-space-between">
							<div class="d-flex align-center" :class="isActive(n.text) ? 'bg active-bg' : 'bg'">
								<v-avatar v-if="n.text === 'Profile'" size="24" class="mr-2">
									<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1724172633/OnCall/Group_6_yfdipz.png" cover />
								</v-avatar>
								<v-icon v-else size="24" :color="isActive(n.text) ? '#0d5fb0' : '#8f8f8f'" class="mr-2" :icon="n.icon" />
								<p v-show="sidebar" :class="isActive(n.text) ? 'active' : 'not-active'" class="style-3 title">
									{{ n.text }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</v-card>
</template>

<script>
import { useAdminStore } from "~/stores/adminStore";
export default {
	setup() {
		const adminStore = useAdminStore();
		const route = useRoute();

		// Function to check if the current route contains the sidebar item
		const isActive = (text) => {
			return route.path.split("/")[3].toLowerCase().startsWith(text.toLowerCase());
		};

		return {
			adminStore,
			isActive,
		};
	},
	beforeMount() {
		this.adminStore.selectedItem = this.currentPage;
	},
	props: ["currentPage", "sidebar"],
	data() {
		return {
			selectedItem: "Dashboard",
			selectedSubItem: "",
			items: [
				{
					name: "",
					list: [
						{ text: "Dashboard", icon: "mdi mdi-view-grid" },
						{ text: "Users", icon: "mdi mdi-account-group" },
						{ text: "Finance", icon: "mdi mdi-tag" },
						{ text: "Dispute", icon: "mdi mdi-account-group" },
						{ text: "Admin", icon: "mdi mdi-trending-up" },
						{ text: "Category", icon: "mdi mdi-warehouse" },
						{ text: "Posts", icon: "mdi mdi-warehouse" },
						{ text: "Products", icon: "mdi mdi-warehouse" },
						{ text: "Country", icon: "fas fa-globe" },
					],
				},

				{
					name: "",
					list: [
						{ text: "Profile", icon: "mdi mdi-message-badge" },
						{ text: "Logout", icon: "fas fa-arrow-right-from-bracket" },
					],
				},
			],
		};
	},

	methods: {
		selectItem(n) {
			this.selectedSubItem = "";
			this.adminStore.selectedItem = n;

			this.$emit("changePage", n);
		},
		selectSubItem(n) {
			this.selectedSubItem = n;

			this.$emit("changePage", n);
		},
		sideFn() {
			if (this.sidebar) this.$emit("sideFn");
		},
	},
};
</script>

<style>
.style-0 {
	z-index: 99;
	position: relative;
}

.style-2 {
	cursor: pointer;
}

.title {
	font-weight: 500;
	font-size: 18px;
	line-height: 25.2px;
}

.active {
	color: #0d5fb0;
}

.not-active {
	color: #8f8f8f;
}

.bg {
	border-radius: 12px;
	padding: 12px 15px;
	width: 170px;
}

.active-bg {
	background: rgba(13, 95, 176, 0.1);
}
</style>
