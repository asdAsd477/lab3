import { useCalendarContext } from '@/components/CalendarProvider.jsx'
import { useHabitStore } from '@/hooks/useHabitStore.js'
import { getDayColor } from '@/utils/habitUtils.js'
import { Calendar as AntCalendar, Flex } from 'antd'

import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'

export default function HabitsCalendar() {
	const habits = useHabitStore(state => state.habits)
	const history = useHabitStore(state => state.history)

	const { setIsModalOpen, setSelectedDate } = useCalendarContext()
	const today = dayjs().startOf('day')

	const fullCellRender = date => {
		const isToday = date.isSame(today, 'day')
		const isCurrentMonth = date.isSame(dayjs(), 'month')
		const isFuture = date.isAfter(today, 'day')

		const style = {
			border: '2px solid #2a2a2a',
			padding: 14,
			borderRadius: 5,

			background: isFuture ? '#444' : getDayColor(date, habits, history),
			cursor: isFuture ? 'not-allowed' : 'pointer',

			opacity: isCurrentMonth ? 1 : .25,
			boxShadow: `inset 0 0 0 ${isToday ? 3 : 0}px #fff6`,
		}

		const onClick = e => {
			e.stopPropagation()
			if(isFuture) return

			setSelectedDate(date)
			setIsModalOpen(true)
		}

		return (
			<Flex
				style={style} 
				onClick={e => onClick(e)}

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
				userSelect: 'none',
			}}

			fullCellRender={fullCellRender}
			onSelect={setSelectedDate}
			locale={locale}
		/>
	)
}