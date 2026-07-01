const API_URL = import.meta.env.VITE_API_URL || 'https://kudicall.onrender.com';

export const submitWaitlist = async (data) => {
	console.log("Submitting waitlist...");
	
	try {
		const response = await fetch(`${API_URL}/api/waitlist`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log("Waitlist submitted successfully.");
		return result;
	} catch (error) {
		console.log("Submission failed.", error);
		// Return a structured error so the modal can display it
		return { success: false, message: error.message };
	}
};
