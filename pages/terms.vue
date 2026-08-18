<template>
	<v-app>
	<div class="legal-page">
		<!-- Minimal header -->
		<div class="legal-topbar">
			<v-container style="max-width: 1400px">
				<div class="d-flex align-center justify-space-between py-4">
					<NuxtLink to="/" class="d-flex align-center text-decoration-none">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/inhouse-image-storage.firebasestorage.app/o/uploads%2F9%2Fd1b3b4d0-5fd7-4898-ab8a-5803e6cfc2fb.png?alt=media&token="
							alt="KudiCall Logo"
							height="24"
							width="149"
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

		<!-- Content -->
		<v-container style="max-width: 860px" class="py-12 px-6" tag="main">
			<p class="legal-date">Last updated: August 13, 2026</p>
			<h1 class="legal-title">Terms of Use</h1>
			<p class="legal-intro">
				Please read these Terms of Use carefully before using KudiCall. By accessing or using our platform,
				you agree to be bound by these terms.
			</p>

			<div v-for="section in sections" :key="section.title" class="legal-section">
				<h2 class="section-title">{{ section.title }}</h2>
				<p class="section-body">{{ section.body }}</p>
			</div>

			<div class="legal-contact">
				<p>If you have any questions about these Terms, contact us at <a href="mailto:legal@kudicall.com" class="legal-link">legal@kudicall.com</a></p>
			</div>
		</v-container>
	</div>
	</v-app>
</template>

<script>
export default {
	name: "TermsPage",
	data() {
		return {
			sections: [
				{
					title: "1. Acceptance of Terms",
					body: "By creating an account or using KudiCall, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms. If you are using KudiCall on behalf of a business, you represent that you have authority to bind that business to these Terms.",
				},
				{
					title: "2. Description of Service",
					body: "KudiCall is a platform that enables buyers to discover vendors and communicate with them via voice calls, and facilitates secure payments through an escrow system. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice.",
				},
				{
					title: "3. User Accounts",
					body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. KudiCall will not be liable for any loss resulting from unauthorized use of your account that occurs before you notify us.",
				},
				{
					title: "4. Payments and Escrow",
					body: "Payments made through KudiCall are held in escrow until the buyer confirms delivery or completion of a service. KudiCall charges a service fee on each transaction. Refunds are processed in accordance with our Refund Policy. We do not guarantee the quality of goods or services provided by vendors.",
				},
				{
					title: "5. Prohibited Conduct",
					body: "You agree not to use KudiCall to engage in fraud, harassment, or any illegal activities. You may not attempt to circumvent our payment system, post false reviews, or impersonate any person or entity. Violation of these rules may result in immediate account termination.",
				},
				{
					title: "6. Intellectual Property",
					body: "All content, trademarks, logos, and software on KudiCall are owned by KudiCall or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.",
				},
				{
					title: "7. Limitation of Liability",
					body: "To the maximum extent permitted by law, KudiCall shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the total fees paid by you in the six months preceding the claim.",
				},
				{
					title: "8. Changes to Terms",
					body: "We may update these Terms from time to time. We will notify registered users of significant changes via email or an in-app notification. Your continued use of KudiCall after changes take effect constitutes acceptance of the revised Terms.",
				},
			],
		};
	},
	head() {
		return {
			title: "Terms of Use | KudiCall",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Read the KudiCall Terms of Use to understand the rules and guidelines for using our platform.",
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
