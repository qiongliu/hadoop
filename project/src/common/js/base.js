import dateFormat from 'dateformat'

export function formatDate (date,fm) {
	let format = fm || "yyyy-mm-dd"
	return dateFormat(date,format);	
}