export const formatTimestamp = timestamp => {
	return new Date(timestamp).toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	}).replace(' г.', '')
}