import { useState } from 'react'
import dayjs from 'dayjs'

import Container from '@/layout/Container.jsx'
import Calendar from '@/components/Calendar.jsx'
import Modal from '@/components/Modal.jsx'

import { Typography } from 'antd'
const { Title } = Typography

export default function CalendarPage() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedDate, setSelectedDate] = useState(dayjs())

	return (
		<Container width={1200}>
			<Title level={2}>📅 Календарь привычек</Title>

			<Calendar
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>

			<Modal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
		</Container>
	)
}