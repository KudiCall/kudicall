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
					<NuxtLink to="/" class="back-link">
						<v-icon size="18" class="mr-1">mdi mdi-arrow-left</v-icon>
						Back to Home
					</NuxtLink>
				</div>
			</v-container>
		</div>

		<v-container style="max-width: 860px" class="py-12 px-6">
			<p class="legal-date">Last updated: August 13, 2026</p>
			<h1 class="legal-title">Security</h1>
			<p class="legal-intro">
				At KudiCall, security is fundamental to everything we build. This page explains the measures we take
				to keep your account, data, and transactions safe.
			</p>

			<div v-for="section in sections" :key="section.title" class="legal-section">
				<h2 class="section-title">{{ section.title }}</h2>
				<p class="section-body">{{ section.body }}</p>
			</div>

			<!-- Report a vulnerability CTA -->
			<div class="vuln-box">
				<div class="vuln-icon">🔒</div>
				<div>
					<h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">Found a vulnerability?</h3>
					<p style="font-size: 15px; color: #c8c8c8; line-height: 1.6;">
						We take security reports seriously. If you discover a security issue, please disclose it
						responsibly by emailing us at
						<a href="mailto:security@kudicall.com" class="legal-link">security@kudicall.com</a>.
						We will respond within 48 hours.
					</p>
				</div>
			</div>
		</v-container>
	</div>
	</v-app>
</template>

<script>
export default {
	name: "SecurityPage",
	data() {
		return {
			sections: [
				{
					title: "Data Encryption",
					body: "All data transmitted between your device and KudiCall servers is encrypted using TLS 1.3. Sensitive data at rest, including payment information and personal identifiers, is encrypted using AES-256. We never store raw payment card numbers on our servers.",
				},
				{
					title: "Secure Payments & Escrow",
					body: "Payments on KudiCall are processed through PCI-DSS compliant payment processors. Funds are held in a secure escrow account and only released upon confirmed delivery or completion. This protects both buyers and vendors from fraud.",
				},
				{
					title: "Account Security",
					body: "We support multi-factor authentication (MFA) for all accounts. Suspicious login attempts trigger automatic account locks and alert notifications. Our systems monitor for unusual activity patterns in real time to detect and respond to threats quickly.",
				},
				{
					title: "Infrastructure Security",
					body: "KudiCall's infrastructure runs on enterprise-grade cloud providers with SOC 2 Type II certification. We employ network firewalls, intrusion detection systems, and regular penetration testing. All critical systems are monitored 24/7.",
				},
				{
					title: "Access Controls",
					body: "Employee access to production systems follows the principle of least privilege. All access is logged and reviewed. Administrative actions require multi-party authorization. We conduct background checks on employees with access to sensitive data.",
				},
				{
					title: "Incident Response",
					body: "We maintain a documented incident response plan. In the event of a security breach affecting your data, we will notify you within 72 hours as required by applicable regulations. We conduct post-incident reviews to prevent recurrence.",
				},
				{
					title: "Your Responsibilities",
					body: "To help keep your account secure, use a strong unique password, enable multi-factor authentication, never share your login credentials, and log out from shared devices. Be cautious of phishing emails claiming to be from KudiCall — we will never ask for your password via email.",
				},
			],
		};
	},
	head() {
		return {
			title: "Security | KudiCall",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Learn about the security measures KudiCall uses to protect your account, data, and transactions.",
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

.vuln-box {
	display: flex;
	align-items: flex-start;
	gap: 20px;
	margin-top: 48px;
	padding: 24px;
	background: rgba(19, 136, 252, 0.07);
	border: 1px solid rgba(19, 136, 252, 0.2);
	border-radius: 16px;
}

.vuln-icon {
	font-size: 32px;
	flex-shrink: 0;
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
	.vuln-box {
		flex-direction: column;
	}
}
</style>
