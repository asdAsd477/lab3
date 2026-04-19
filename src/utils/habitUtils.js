export const getDayStatus = (date, habits, history) => {
	const dateKey = date.format('YYYY-MM-DD')
	const completed = (history[dateKey] || []).length
	const total = habits.filter(h => !h.deletedAt).length

	if(completed === 0) return 'empty' // Если ничего не сделано
	if(completed === total) return 'full' // Если сделано всё
	return 'partial' // Если сделано частично
}

export const getDayColor = (date, habits, history) => {
	const status = getDayStatus(date, habits, history)
	const COLORS = {
		empty: '#733',
		partial: '#773',
		full: '#373',
	}

	return COLORS[status] || '#444'
}

export const getDayEmoji = (date, habits, history) => {
	const status = getDayStatus(date, habits, history)
	const EMOJIS = {
		empty: '🔴',
		partial: '🟡',
		full: '🟢',
	}

	return EMOJIS[status] || '🤷'
}