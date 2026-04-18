import { Typography } from 'antd'
import { useState } from 'react'

import Container from '@/layout/Container.jsx'
import HabitForm from '@/components/HabitForm.jsx'
import HabitList from '@/components/HabitList.jsx'

const { Title } = Typography

export default function HomePage() {
	const [habits, setHabits] = useState(['Покормить кота', 'Сделать уроки'])

	return (
		<Container>
			<Title level={2}>Добавить привычку</Title>
			<HabitForm setHabits={setHabits} />
			<HabitList habits={habits} />
		</Container>
	)
}