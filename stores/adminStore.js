import { defineStore } from "pinia";

export const useAdminStore = defineStore("admin", {
	state: () => ({
		sideBtn: true,
		selectedItem: "Dashboard",
	}),
});
