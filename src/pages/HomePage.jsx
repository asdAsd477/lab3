import Container from '@/layout/Container.jsx'
import AddHabitForm from '@/components/AddHabitForm.jsx'
import HabitsList from '@/components/HabitsList.jsx'

import { Typography } from 'antd'
const { Title } = Typography

export default function HomePage() {
	return (
		<Container>
			<Title level={2}>🥬 Добавить привычку</Title>
			<AddHabitForm />
			<HabitsList />
		</Container>
	)
}