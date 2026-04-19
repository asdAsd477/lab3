import { useHabitStore } from '@/hooks/useHabitStore.js'
import { formatTimestamp } from '@/utils/formatTimestamp.js'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Empty, List, Tooltip, Typography } from 'antd'

const { Text } = Typography

export default function HabitsList() {
	const habits = useHabitStore(store => store.habits)
	const removeHabit = useHabitStore(store => store.removeHabit)

	return (
		<List
			locale={{ emptyText: <Empty description="Привычек нет" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}

			dataSource={habits}
			renderItem={(habit, i) => (
				<List.Item
					style={{
						opacity: habit.deletedAt ? .3 : 1, // Для дебага
					}}
					actions={[
						<Button
							type="primary"
							danger

							icon={<DeleteOutlined />}
							onClick={() => removeHabit(habit.id)}
						/>
					]}
				>
					<Tooltip placement="left" title={`Добавлена ${formatTimestamp(habit.createdAt)}`}>
						<Text>{i+1}. {habit.title}</Text>
					</Tooltip>
				</List.Item>
			)}
		/>
	)
}