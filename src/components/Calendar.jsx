import { Calendar as AntCalendar, Flex, Typography } from 'antd'
const { Text } = Typography

import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'

export default function Calendar({
	isModalOpen,
	setIsModalOpen,
	selectedDate,
	setSelectedDate,
}) {
	const today = dayjs().startOf('day')

	const fullCellRender = date => {
		const isToday = date.isSame(today, 'day')
		const isSelected = date.isSame(selectedDate, 'day')
		const isCurrentMonth = date.isSame(selectedDate, 'month')
		const isFuture = date.isAfter(today, 'day')

		const style = {
			border: '2px solid #2a2a2a',
			padding: 14,
			borderRadius: 5,

			background: isFuture ? '#444' : '#373',
			cursor: isFuture ? 'not-allowed' : 'pointer',

			opacity: isCurrentMonth ? 1 : .25,
			boxShadow: `inset 0 0 0 ${isToday ? 3 : 0}px #fff6`,
		}

		// 0 = nothing done | 1 = something done | 2 = everything done
		const status = Math.random() * 3 | 0
		if(!isFuture && status !== 2) style.background = ['#733', '#773'][status]

		const onClick = e => {
			e.stopPropagation()
			if(!isFuture) setIsModalOpen(true)
		}

		return (
			<Flex
				style={style} 
				onClick={onClick}

				vertical
				gap="small"
				justify="right"
			>
				{date.date()}
			</Flex>
		)
	}

	return (
		<AntCalendar
			mode="month"
			style={{
				borderRadius: 20,
				padding: '20px 30px',
			}}

			fullCellRender={fullCellRender}
			onSelect={setSelectedDate}
			locale={locale}
		/>
	)
}