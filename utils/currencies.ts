import emojiFlags from "emoji-flags";

export const getCurrencyFlag = (flagCode) => {
	const flag = emojiFlags.countryCode(flagCode);
	return flag ? flag.emoji : "🏴";
};

export const currencies = [
	{ code: "USD", name: "United States Dollar", symbol: "$", flagCode: "US" },
	{ code: "EUR", name: "Euro", symbol: "€", flagCode: "EU" },
	{ code: "GBP", name: "British Pound", symbol: "£", flagCode: "GB" },
	{ code: "JPY", name: "Japanese Yen", symbol: "¥", flagCode: "JP" },
	{ code: "NGN", name: "Nigerian Naira", symbol: "₦", flagCode: "NG" },
	{ code: "CAD", name: "Canadian Dollar", symbol: "$", flagCode: "CA" },
	{ code: "AUD", name: "Australian Dollar", symbol: "$", flagCode: "AU" },
	{ code: "CNY", name: "Chinese Yuan", symbol: "¥", flagCode: "CN" },
	{ code: "INR", name: "Indian Rupee", symbol: "₹", flagCode: "IN" },
	{ code: "BRL", name: "Brazilian Real", symbol: "R$", flagCode: "BR" },
	{ code: "ZAR", name: "South African Rand", symbol: "R", flagCode: "ZA" },
	// Add more currencies as necessary
];

export const contries = [
	{ code: "NG", name: "Nigeria", flagCode: "NG" },
	{ code: "US", name: "United States", flagCode: "US" },
	{ code: "GB", name: "United Kingdom", flagCode: "GB" },
	{ code: "CA", name: "Canada", flagCode: "CA" },
	{ code: "AU", name: "Australia", flagCode: "AU" },
	{ code: "CN", name: "China", flagCode: "CN" },
	{ code: "IN", name: "India", flagCode: "IN" },
	{ code: "BR", name: "Brazil", flagCode: "BR" },
	{ code: "ZA", name: "South Africa", flagCode: "ZA" },
	// Add more countries as necessary
];

export const states = [
	{ code: "AB", name: "Abia" },
	{ code: "AD", name: "Adamawa" },
	{ code: "AK", name: "Akwa Ibom" },
	{ code: "AN", name: "Anambra" },
	{ code: "BA", name: "Bauchi" },
	{ code: "BY", name: "Bayelsa" },
	{ code: "BE", name: "Benue" },
	{ code: "BO", name: "Borno" },
	{ code: "CR", name: "Cross River" },
	{ code: "DE", name: "Delta" },
	{ code: "EB", name: "Ebonyi" },
	{ code: "ED", name: "Edo" },
	{ code: "EK", name: "Ekiti" },
	{ code: "EN", name: "Enugu" },
	{ code: "FC", name: "Abuja" },
	{ code: "GO", name: "Gombe" },
	{ code: "IM", name: "Imo" },
	{ code: "JI", name: "Jigawa" },
	{ code: "KD", name: "Kaduna" },
	{ code: "KN", name: "Kano" },
	{ code: "KT", name: "Katsina" },
	{ code: "KE", name: "Kebbi" },
	{ code: "KO", name: "Kogi" },
	{ code: "KW", name: "Kwara" },
	{ code: "LA", name: "Lagos" },
	{ code: "NA", name: "Nasarawa" },
	{ code: "NI", name: "Niger" },
	{ code: "OG", name: "Ogun" },
	{ code: "ON", name: "Ondo" },
	{ code: "OS", name: "Osun" },
	{ code: "OY", name: "Oyo" },
	{ code: "PL", name: "Plateau" },
	{ code: "RI", name: "Rivers" },
	{ code: "SO", name: "Sokoto" },
	{ code: "TA", name: "Taraba" },
];
