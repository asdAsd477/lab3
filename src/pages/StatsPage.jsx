import HabitChart from '@/components/HabitChart.jsx';
import { useHabitStore } from '@/hooks/useHabitStore.js';
import Container from '@/layout/Container.jsx'

import { Flex, Typography } from 'antd'
import dayjs from 'dayjs';
const { Title, Text } = Typography

export default function StatsPage() {
	const history = useHabitStore(s => s.history);

	// 1. Сколько раз всего были нажаты чекбоксы
	const totalSuccess = Object.values(history).flat().length

	// 2. Самый продуктивный день
	const dates = Object.keys(history)
	const bestDate = dates.sort((a, b) => history[b].length - history[a].length)[0]
	const renderDate = dayjs(bestDate).format('DD MMMM YYYY')

	return (
		<Container width={1000}>
			<Title level={2}>📈 Статистика</Title>
			<Flex vertical gap="small">
				<p>🎯 Всего выполнено <Text strong>{totalSuccess}</Text> привычек!</p>
				<p>✨ Самый продуктивный день был <Text strong>{renderDate}</Text></p>
			</Flex>
			<HabitChart />
		</Container>
	)
}