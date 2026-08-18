<template>
	<v-dialog v-model="dialog" max-width="500px">
		<v-card style="background-color: #121212; color: white; border-radius: 16px;">
			<v-card-title class="text-h5 font-weight-bold pt-6 px-6 d-flex justify-space-between align-center">
				Join the Waitlist
				<v-btn icon variant="text" size="small" @click="close" :disabled="loading" aria-label="Close dialog">
					<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="color: #fff">
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
					</svg>
				</v-btn>
			</v-card-title>
			<v-card-text class="px-6 pb-6 pt-2">
				<p class="text-body-1 text-grey-lighten-1 mb-2" style="font-size: 16px;">
					Be among the first to know when KudiCall launches.
				</p>
				<p class="text-caption text-primary mb-6">
					Join hundreds of businesses preparing to try KudiCall.
				</p>

				<v-alert
					v-if="successMessage"
					type="success"
					variant="tonal"
					class="mb-4"
				>
					{{ successMessage }}
				</v-alert>

				<v-alert
					v-if="errorMessage"
					type="error"
					variant="tonal"
					class="mb-4"
				>
					{{ errorMessage }}
				</v-alert>

				<v-form ref="form" @submit.prevent="submit" v-model="valid" :disabled="loading">
					<v-text-field
						v-model="name"
						label="Full Name"
						:rules="nameRules"
						variant="outlined"
						color="primary"
						required
						class="mb-2 custom-input"
						:disabled="loading"
						rounded="lg"
					></v-text-field>
					<v-text-field
						v-model="email"
						label="Email Address"
						:rules="emailRules"
						variant="outlined"
						color="primary"
						required
						class="mb-2 custom-input"
						:disabled="loading"
						rounded="lg"
					></v-text-field>
					<v-select
						v-model="businessType"
						:items="businessTypeOptions"
						label="Business Type"
						:rules="businessTypeRules"
						variant="outlined"
						color="primary"
						required
						class="mb-4 custom-input"
						:disabled="loading"
						rounded="lg"
					></v-select>
					<v-btn
						type="submit"
						color="primary"
						size="large"
						block
						rounded
						class="text-none font-weight-medium"
						:loading="loading"
						:disabled="!valid || loading"
					>
						Join Waitlist
					</v-btn>
				</v-form>
				<p class="text-center text-caption text-grey-lighten-1 mt-4">
					We'll only email you about early access, beta invitations and important product updates.
				</p>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
import { submitWaitlist } from "../services/waitlistService.js";

export default {
	name: "WaitlistModal",
	data() {
		return {
			dialog: false,
			valid: false,
			loading: false,
			successMessage: "",
			errorMessage: "",
			name: "",
			email: "",
			businessType: null,
			businessTypeOptions: [
				"Fashion",
				"Restaurant",
				"Supermarket",
				"Electronics",
				"Pharmacy",
				"Beauty",
				"Services",
				"Other"
			],
			nameRules: [
				(v) => !!v || "Name is required",
				(v) => (v && v.length >= 2) || "Name must be at least 2 characters",
			],
			emailRules: [
				(v) => !!v || "Email is required",
				(v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
			],
			businessTypeRules: [
				(v) => !!v || "Business Type is required"
			]
		};
	},
	methods: {
		open() {
			this.dialog = true;
			this.resetState();
		},
		close() {
			this.dialog = false;
			this.resetState();
		},
		resetState() {
			this.loading = false;
			this.successMessage = "";
			this.errorMessage = "";
			this.name = "";
			this.email = "";
			this.businessType = null;
			if (this.$refs.form) {
				this.$refs.form.resetValidation();
			}
		},
		async submit() {
			const { valid } = await this.$refs.form.validate();
			if (!valid) return;

			this.loading = true;
			this.successMessage = "";
			this.errorMessage = "";

			try {
				const response = await submitWaitlist({
					fullName: this.name,
					email: this.email,
					businessType: this.businessType,
				});

				if (response.success) {
					this.successMessage = response.message;
					if (this.$refs.form) {
						this.$refs.form.reset();
					}
					// Close modal after a short delay so the user can read the success message
					setTimeout(() => {
						this.close();
					}, 2000);
				} else {
					this.errorMessage = response.message || "Unable to join the waitlist at the moment. Please try again later.";
				}
			} catch (error) {
				console.error("Waitlist submission error:", error);
				this.errorMessage = "Unable to join the waitlist at the moment. Please try again later.";
			} finally {
				this.loading = false;
			}
		}
	}
};
</script>

<style scoped>
.custom-input :deep(.v-field) {
	border-radius: 12px;
}
.custom-input :deep(.v-field__input),
.custom-input :deep(.v-label) {
	font-family: 'Nunito', sans-serif !important;
	font-weight: 500 !important;
	font-size: 16px !important;
}
</style>
