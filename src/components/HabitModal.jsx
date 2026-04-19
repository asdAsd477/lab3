import { useCalendarContext } from '@/components/CalendarProvider.jsx'
import { useHabitStore } from '@/hooks/useHabitStore.js'
import { getDayEmoji } from '@/utils/habitUtils.js'
import { Modal as AntModal, Checkbox, List } from 'antd'
import dayjs from 'dayjs'

export default function HabitModal() {
	const { isModalOpen, setIsModalOpen, selectedDate, setSelectedDate } = useCalendarContext()

	const habits = useHabitStore(store => store.habits).filter(h => !h.deletedAt)
	const history = useHabitStore(store => store.history)
	const toggleHabit = useHabitStore(store => store.toggleHabit)

	const isToday = dayjs().isSame(selectedDate, 'day')
	const renderDate = isToday ? 'сегодня' : selectedDate.format('D MMMM YYYY')
	const renderStatus = getDayEmoji(selectedDate, habits, history)

	const dateKey = selectedDate.format('YYYY-MM-DD')
	const completed = history[dateKey] || []

	return (
		<AntModal
			title={`${renderStatus} Чек-лист на ${renderDate}`}
			open={isModalOpen}

			onOk={() => setIsModalOpen(false)}
			onCancel={() => setIsModalOpen(false)}
			footer={() => {}}

			styles={{ 
				mask: { backdropFilter: 'blur(6px)', background: '#0009' },
				body: { padding: '20px 0' },
			}}
		>
			<List
				dataSource={habits}
				renderItem={habit => (
					<List.Item>
						<Checkbox
							checked={completed.includes(habit.id)}
							onChange={() => toggleHabit(dateKey, habit.id)}
						>
							{habit.title}
						</Checkbox>
					</List.Item>
				)}
			/>
		</AntModal>
	)
}