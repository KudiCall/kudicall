<template>
	<v-app>
	<div class="legal-page">
		<div class="legal-topbar">
			<v-container style="max-width: 1400px">
				<div class="d-flex align-center justify-space-between py-4">
					<NuxtLink to="/" class="d-flex align-center text-decoration-none">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd1b3b4d0-5fd7-4898-ab8a-5803e6cfc2fb.png?alt=media&token="
							alt="KudiCall Logo"
							height="24"
							style="display: block; max-width: none; object-fit: contain;"
						/>
					</NuxtLink>
					<NuxtLink to="/" class="back-link d-flex align-center">
						<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="mr-1" style="color: #fff">
							<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
						</svg>
						Back to Home
					</NuxtLink>
				</div>
			</v-container>
		</div>

		<v-container style="max-width: 860px" class="py-12 px-6">
			<p class="legal-date">Last updated: August 13, 2026</p>
			<h1 class="legal-title">Privacy Policy</h1>
			<p class="legal-intro">
				Your privacy matters to us. This Privacy Policy explains how KudiCall collects, uses, and protects
				your personal information when you use our platform.
			</p>

			<div v-for="section in sections" :key="section.title" class="legal-section">
				<h2 class="section-title">{{ section.title }}</h2>
				<p class="section-body">{{ section.body }}</p>
			</div>

			<div class="legal-contact">
				<p>For privacy-related inquiries, contact our Data Protection Officer at <a href="mailto:privacy@kudicall.com" class="legal-link">privacy@kudicall.com</a></p>
			</div>
		</v-container>
	</div>
	</v-app>
</template>

<script>
export default {
	name: "PrivacyPage",
	data() {
		return {
			sections: [
				{
					title: "1. Information We Collect",
					body: "We collect information you provide directly to us, such as your name, email address, phone number, and payment details when you create an account or make a transaction. We also collect usage data, device identifiers, and location information to improve our service.",
				},
				{
					title: "2. How We Use Your Information",
					body: "We use your information to operate and improve KudiCall, process transactions, send you service-related communications, provide customer support, detect and prevent fraud, and comply with legal obligations. We do not sell your personal data to third parties.",
				},
				{
					title: "3. Sharing Your Information",
					body: "We may share your information with vendors when you initiate a transaction, with payment processors to complete payments, and with service providers who help us operate our platform. All third parties are contractually obligated to protect your data.",
				},
				{
					title: "4. Data Retention",
					body: "We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time, subject to legal retention obligations. Transaction records are retained for a minimum of 7 years for compliance purposes.",
				},
				{
					title: "5. Cookies and Tracking",
					body: "We use cookies and similar technologies to maintain your session, remember preferences, and analyze usage patterns. You can control cookie settings in your browser, though disabling certain cookies may limit platform functionality.",
				},
				{
					title: "6. Security",
					body: "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
				},
				{
					title: "7. Your Rights",
					body: "Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data. You may also have the right to data portability and to withdraw consent at any time. Contact us to exercise any of these rights.",
				},
				{
					title: "8. Changes to This Policy",
					body: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our platform or sending you an email. Your continued use of KudiCall after changes take effect constitutes your acceptance of the updated policy.",
				},
			],
		};
	},
	head() {
		return {
			title: "Privacy Policy | KudiCall",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Learn how KudiCall collects, uses, and protects your personal information.",
				},
			],
		};
	},
};
</script>

<style scoped>
.legal-page {
	background-color: #0c0d0d;
	min-height: 100vh;
	color: #fff;
}

.legal-topbar {
	position: sticky;
	top: 0;
	z-index: 999;
	background: rgba(12, 13, 13, 0.95);
	backdrop-filter: blur(8px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.back-link {
	display: flex;
	align-items: center;
	color: #c8c8c8;
	text-decoration: none;
	font-size: 14px;
	transition: color 0.2s ease;
}
.back-link:hover {
	color: #fff;
}

.legal-date {
	font-size: 13px;
	color: #777;
	margin-bottom: 12px;
}

.legal-title {
	font-size: 48px;
	font-weight: 700;
	line-height: 1.2;
	margin-bottom: 24px;
}

.legal-intro {
	font-size: 18px;
	line-height: 1.7;
	color: #c8c8c8;
	margin-bottom: 48px;
	padding-bottom: 32px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.legal-section {
	margin-bottom: 36px;
}

.section-title {
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 12px;
	color: #fff;
}

.section-body {
	font-size: 16px;
	line-height: 1.8;
	color: #c8c8c8;
}

.legal-contact {
	margin-top: 56px;
	padding-top: 24px;
	border-top: 1px solid rgba(255, 255, 255, 0.08);
	font-size: 15px;
	color: #c8c8c8;
}

.legal-link {
	color: #1388fc;
	text-decoration: none;
}
.legal-link:hover {
	text-decoration: underline;
}

@media (max-width: 768px) {
	.legal-title {
		font-size: 32px;
	}
	.legal-intro {
		font-size: 16px;
	}
}
</style>
