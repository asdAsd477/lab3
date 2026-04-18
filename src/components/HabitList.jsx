import { formatTimestamp } from '@/utils/formatTimestamp.js'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, Empty, List, Tooltip, Typography } from 'antd'

const { Text } = Typography

export default function HabitList({ habits, setHabits }) {
	const deleteHabit = id => {
		setHabits(habits => habits.filter(habit => habit.id !== id))
	}

	return (
		<List
			locale={{ emptyText: <Empty description="Привычек нет" image={Empty.PRESENTED_IMAGE_SIMPLE} /> }}

			dataSource={habits}
			renderItem={(habit, i) => (
				<List.Item actions={[
					<Button
						type="primary"
						danger

						icon={<DeleteOutlined />}
						onClick={() => deleteHabit(habit.id)}
					/>
				]}>
					<Tooltip placement="left" title={`Добавлена ${formatTimestamp(habit.createdAt)}`}>
						<Text>{i+1}. {habit.title}</Text>
					</Tooltip>
				</List.Item>
			)}
		/>
	)
}