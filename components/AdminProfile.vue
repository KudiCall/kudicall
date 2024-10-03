<template>
	<div class="px-4 px-md-5 mb-10">
		<v-row dense>
			<v-col cols="12" md="8">
				<v-card variant="outlined" class="pa-4 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<div class="d-flex justify-space-between">
						<p class="mb-4" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">About admin</p>
					</div>
					<div class="d-flex flex-column flex-md-row align-center ga-10">
						<div class="avatar-wrapper">
							<v-avatar size="200" style="border: 1px solid rgba(236, 236, 236, 1)">
								<v-img eager src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1725086683/OnCall/Ellipse_2324_hmn7ct.png" cover></v-img>
							</v-avatar>
							<v-img eager src="/images/upload-icon.svg" class="upload-icon" width="40" height="40" />
						</div>
						<div class="d-flex flex-1 flex-column ga-2">
							<p style="font-weight: 800; font-size: 32px; color: rgba(236, 236, 236, 1)">Michael Faraday</p>
							<p>michaelfaraday@gmail.com</p>
							<div>
								<span class="mr-10">
									<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">User type</span>
									<span style="color: rgba(181, 181, 181, 1); font-weight: 600">Admin</span>
								</span>
								<span>
									<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Since</span>
									<span style="color: rgba(181, 181, 181, 1); font-weight: 600">August 02 <span class="dot">.</span> 2024</span>
								</span>
							</div>
							<span>
								<span class="mr-2" style="color: rgba(69, 69, 69, 1); font-weight: 600">Permissions</span>
								<span style="color: rgba(181, 181, 181, 1); font-weight: 600"
									>Manage disputes <span class="dot">.</span> Manage categories <span class="dot">.</span> Manage users</span
								>
							</span>
						</div>
					</div>
				</v-card>
				<v-card variant="outlined" class="pa-4 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-10" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">Account security</p>
					<div class="d-flex justify-space-between align-center">
						<p class="mb-4" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">2FA</p>
						<v-btn size="large" rounded class="redBtn" @click="confirmDisable2fa = true">Disable</v-btn>
					</div>
				</v-card>
				<v-card v-show="openSetup" variant="outlined" class="pa-4 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p class="mb-10" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">Account security</p>
					<div class="d-flex justify-space-between align-center">
						<p class="mb-4" style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec">2FA</p>
						<v-btn v-if="!isSetup2FA && !confirm2FAPin" size="large" rounded class="btn" @click="setup2FA">Set up 2FA</v-btn>
						<v-btn v-if="isSetup2FA && !confirm2FAPin" size="large" rounded class="btn" @click="continueSetup2FA">Continue set up</v-btn>
						<v-btn v-if="isCompleteSetup" size="large" rounded class="btn" @click="openSetup = false">Complete set up</v-btn>
					</div>
					<!-- 2FA setup code below -->
					<div v-if="isSetup2FA" class="d-flex mt-10 ga-10">
						<div style="width: 431px">
							<p class="mb-8" style="font-size: 20px; font-weight: 700; color: #b5b5b5; line-height: 28px">
								Set up 2FA by copying the code or scanning the QR code with your authenticator app
							</p>
							<v-text-field
								prepend-inner-icon="mdi mdi-content-copy"
								type="text"
								variant="solo"
								placeholder="Enter code"
								autocomplete="off"
								width="315px"
							></v-text-field>
						</div>
						<div>
							<v-img eager src="/images/qr-code.png" width="200" height="200"></v-img>
						</div>
					</div>
					<div v-if="confirm2FAPin" style="width: 431px">
						<p class="mb-8" style="font-size: 20px; font-weight: 700; color: #b5b5b5; line-height: 28px">Enter code from your 2FA app</p>
						<v-text-field
							prepend-inner-icon="mdi mdi-content-copy"
							type="text"
							variant="solo"
							placeholder="Enter code"
							autocomplete="off"
							width="315px"
						></v-text-field>
					</div>
				</v-card>
				<v-card variant="outlined" class="pa-4 mb-10" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 700; font-size: 24px; line-height: 34px; color: #ececec" class="">Activity history</p>

					<div class="pb-4" style="border-bottom: 1px solid #292929">
						<div class="d-flex justify-space-between align-center my-5">
							<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #b5b5b5" class="">Dispute</p>

							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn
										v-bind="props"
										class="d-flex justify-space-between px-2"
										icon-size="24"
										rounded
										size="large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
										style="font-size: 16px; font-weight: 400; line-height: 22.4px; border-radius: 8px"
									>
										This month
									</v-btn>
								</template>

								<v-card class="pa-2 mt-4" width="141px" style="background-color: #141515; border-radius: 12px">
									<!-- Dynamic Radio Options -->
									<div class="px-4" style="background-color: transparent">
										<div
											v-for="duration in ['All', 'Today', 'This week', 'This month']"
											:key="duration"
											class="d-flex justify-space-between align-center mb-2"
										>
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ duration }}</p>
										</div>
									</div>
								</v-card>
							</v-menu>
						</div>
						<div class="d-flex justify-space-between align-center ga-4 my-2 my-text">
							<div class="d-flex justify-space-between align-center w-50">
								<p>In progress</p>
								<p>24</p>
							</div>
							<div class="dot">.</div>
							<div class="d-flex justify-space-between align-center w-50">
								<p>Resolved</p>
								<p>24</p>
							</div>
						</div>
						<div class="d-flex justify-space-between align-center w-50 pr-5 my-text">
							<p>In progress</p>
							<p>24</p>
						</div>
					</div>
					<div class="pb-4" style="border-bottom: 1px solid #292929">
						<p class="my-5" style="font-weight: 700; font-size: 20px; line-height: 28px; color: #b5b5b5">Login history</p>
						<div class="d-flex justify-space-between align-center ga-4 mb-5 my-text">
							<div class="d-flex justify-space-between align-center w-50">
								<p>Last login</p>
								<p>24/08/24</p>
							</div>
							<div class="dot">.</div>
							<div class="d-flex justify-space-between align-center w-50">
								<p>Avg. login duration</p>
								<p>01:45hrs</p>
							</div>
						</div>
						<div class="d-flex justify-space-between align-center w-50 pr-5 my-text">
							<p>Total login</p>
							<p>32</p>
						</div>
					</div>
					<div class="pb-4" style="border-bottom: 1px solid #292929">
						<div class="d-flex justify-space-between align-center my-5">
							<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #b5b5b5" class="">Categories</p>

							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn
										v-bind="props"
										class="d-flex justify-space-between px-2"
										icon-size="24"
										rounded
										size="large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
										style="font-size: 16px; font-weight: 400; line-height: 22.4px; border-radius: 8px"
									>
										This month
									</v-btn>
								</template>

								<v-card class="pa-2 mt-4" width="141px" style="background-color: #141515; border-radius: 12px">
									<div class="px-4" style="background-color: transparent">
										<div
											v-for="duration in ['All', 'Today', 'This week', 'This month']"
											:key="duration"
											class="d-flex justify-space-between align-center mb-2"
										>
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ duration }}</p>
										</div>
									</div>
								</v-card>
							</v-menu>
						</div>
						<div class="d-flex justify-space-between align-center ga-4 mb-5 my-text">
							<div class="d-flex justify-space-between align-center w-50">
								<p>Created</p>
								<p>2</p>
							</div>
							<div class="dot">.</div>
							<div class="d-flex justify-space-between align-center w-50">
								<p>Edited</p>
								<p>0</p>
							</div>
						</div>
						<div class="d-flex justify-space-between align-center w-50 pr-5 my-text">
							<p>Deleted</p>
							<p>0</p>
						</div>
					</div>
					<div class="pb-4" style="border-bottom: 1px solid #292929">
						<div class="d-flex justify-space-between align-center my-5">
							<p style="font-weight: 700; font-size: 20px; line-height: 28px; color: #b5b5b5" class="">Users</p>

							<v-menu>
								<template v-slot:activator="{ props }">
									<v-btn
										v-bind="props"
										class="d-flex justify-space-between px-2"
										icon-size="24"
										rounded
										size="large"
										color="#161818"
										append-icon="mdi mdi-chevron-down"
										style="font-size: 16px; font-weight: 400; line-height: 22.4px; border-radius: 8px"
									>
										This month
									</v-btn>
								</template>

								<v-card class="pa-2 mt-4" width="140px" style="background-color: #141515; border-radius: 12px">
									<div class="px-4" style="background-color: transparent">
										<div
											v-for="duration in ['All', 'Today', 'This week', 'This month']"
											:key="duration"
											class="d-flex justify-space-between align-center mb-2"
										>
											<p style="font-weight: 500; font-size: 18px; line-height: 24.5px; color: #ececec">{{ duration }}</p>
										</div>
									</div>
								</v-card>
							</v-menu>
						</div>
						<div class="d-flex justify-space-between align-center ga-4 my-2 my-text">
							<div class="d-flex justify-space-between align-center w-50">
								<p>Suspended</p>
								<p>2</p>
							</div>
							<div class="dot">.</div>
							<div class="d-flex justify-space-between align-center w-50">
								<p>Reactivated</p>
								<p>0</p>
							</div>
						</div>
						<div class="d-flex justify-space-between align-center ga-4 my-2 my-text">
							<div class="d-flex justify-space-between align-center w-50">
								<p>Deleted</p>
								<p>2</p>
							</div>
							<div class="dot">.</div>
							<div class="d-flex justify-space-between align-center w-50">
								<p>Messaged</p>
								<p>0</p>
							</div>
						</div>
					</div>
				</v-card>
			</v-col>

			<v-col cols="12" md="4">
				<v-card variant="outlined" class="pa-5" style="border: 0.5px solid #303030; border-radius: 8px">
					<p style="font-weight: 500; font-size: 20px; line-height: 34px; color: #ececec" class="pb-8">Performance analytics</p>

					<v-row dense="">
						<v-col cols="12" v-for="n in performanceData" :key="n.title">
							<v-card variant="outlined" class="mb-2 py-2" style="border: 0.5px solid #303030; background-color: #111212">
								<v-card-text>
									<v-avatar
										class="pa-1"
										size="32"
										style="background: linear-gradient(185.49deg, rgba(18, 136, 252, 0.1) 15%, rgba(11, 82, 151, 0.1) 85.96%)"
									>
										<v-img eager :src="n.img"></v-img>
									</v-avatar>
								</v-card-text>
								<v-card-title style="font-weight: 400; font-size: 16px; line-height: 22px; color: #8f8f8f">{{ n.title }}</v-card-title>
								<v-card-text style="font-weight: 700; font-size: 20px; line-height: 28px; color: #ececec"> {{ n.value }} </v-card-text>
								<v-card-text v-if="n.percentage" class="pt-0" style="font-weight: 600; font-size: 12px; line-height: 16px; color: #454545">
									This week <v-icon size="10" icon="mdi mdi-trending-up" color="#039855" /><span class="ml-2" style="color: #039855"
										>{{ n.percentage }}%</span
									>
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>

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
		<v-dialog v-model="confirmDisable2fa" persistent max-width="600">
			<ConfirmActionModal
				title="2FA"
				message="Are you sure you want to disable 2FA"
				leftBtn="Cancel"
				rightBtn="Disable 2FA"
				img="/images/shield-security.svg"
				:leftBtnAction="() => (confirmDisable2fa = false)"
				:rightBtnAction="() => (openSetup = true)"
			/>
		</v-dialog>
	</div>
</template>

<script setup>
const confirmSuspendModal = ref(false);
const confirmDisable2fa = ref(false);
const openSetup = ref(false);
const isSetup2FA = ref(false);
const confirm2FAPin = ref(false);
const isCompleteSetup = ref(false);

const setup2FA = () => {
	isSetup2FA.value = true;
	confirm2FAPin.value = false;
};

const continueSetup2FA = () => {
	isSetup2FA.value = false;
	confirm2FAPin.value = true;
	isCompleteSetup.value = true;
};

const performanceData = [
	{ title: "Users suspended", value: "200", img: "/images/account-remove.svg" },
	{ title: "Users deleted", value: "0", img: "/images/account-remove.svg" },
	{ title: "Disputes resolved", value: "1", percentage: 0, img: "/images/warning-icon.svg" },
	{ title: "Categories created", value: "0", percentage: 5, img: "/images/tag.svg" },
];

const suspendActionInfo = ["Remove their ability to log in and access the platform until you reactivate them"];
</script>

<style scoped>
.btn {
	background: linear-gradient(185.49deg, #1288fc 15%, #0b5297 85.96%);
}
.redBtn {
	background: linear-gradient(180deg, #f97066 2.68%, #b42318 84.82%);
}

.btn :deep(.v-icon) {
	font-size: 36px;
}

.my-text {
	font-size: 18px;
	line-height: 24px;
	font-weight: 400;
	color: #b5b5b5;
}

.avatar-wrapper {
	position: relative;
	display: inline-block;
}

.upload-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(255, 255, 255, 0.7); /* Optional, for better visibility */
	padding: 10px;
	border-radius: 50%;
	cursor: pointer;
}
</style>
