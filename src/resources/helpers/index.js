export function formatNumber(value, options = {}) {
	const {
		currency = false, // true = format as currency
		currencyCode = "NGN", // currency symbol
		locale = "en-NG", // locale
		minimumFractionDigits = 0,
	} = options;

	return new Intl.NumberFormat(locale, {
		style: currency ? "currency" : "decimal",
		currency: currencyCode,
		minimumFractionDigits,
	}).format(Number(value));
}
//examples formatNumber(1234567.89, { currency: true, currencyCode: 'USD', minimumFractionDigits: 2 })

export function formatDateTime(isoString) {
	const date = new Date(isoString);

	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, "0");
	const day = `${date.getDate()}`.padStart(2, "0");

	let hours = date.getHours();
	const minutes = `${date.getMinutes()}`.padStart(2, "0");

	const meridian = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
	const formattedHours = `${hours}`.padStart(2, "0");

	return {
		date: `${year}-${month}-${day}`,
		time: `${formattedHours}:${minutes} ${meridian}`,
	};
}

export function exportAsCSV() {}
export function exportAsExcel() {}
export function exportAsPDF() {}
export function exportAsJPEG() {}
