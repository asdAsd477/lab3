import { useLocalStorage } from '@/hooks/useLocalStorage.js'

import Container from '@/layout/Container.jsx'
import HabitForm from '@/components/HabitForm.jsx'
import HabitList from '@/components/HabitList.jsx'

import { Typography } from 'antd'
const { Title } = Typography

export default function HomePage() {
	const [habits, setHabits] = useLocalStorage('habits/habits', [
		{id: 'a1b2', title: 'йога', createdAt: 1776044763607},
		{id: 'c3d4', title: 'тискать котика', createdAt: 1776544763607},
	])

	return (
		<Container>
			<Title level={2}>Добавить привычку</Title>
			<HabitForm setHabits={setHabits} />
			<HabitList setHabits={setHabits} habits={habits} />
		</Container>
	)
}