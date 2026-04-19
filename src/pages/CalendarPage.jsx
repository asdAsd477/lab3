import { CalendarProvider } from '@/components/CalendarProvider.jsx'

import Container from '@/layout/Container.jsx'
import HabitsCalendar from '@/components/HabitsCalendar.jsx'
import HabitModal from '@/components/HabitModal.jsx'

import { Typography } from 'antd'
const { Title } = Typography

export default function CalendarPage() {
	return (
		<CalendarProvider>
			<Container width={1000}>
				<Title level={2}>📅 Календарь привычек</Title>
				<HabitsCalendar />
				<HabitModal />
			</Container>
		</CalendarProvider>
	)
}