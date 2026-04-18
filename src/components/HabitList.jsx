import { DeleteOutlined } from '@ant-design/icons'
import { Button, List, Typography } from 'antd'

const { Text } = Typography

export default function HabitList({ habits }) {
	return (
		<List
			dataSource={habits}
			renderItem={(item, i) => (
				<List.Item actions={[<Button type="primary" danger icon={<DeleteOutlined />} />]}>
					<Text>{i+1}. {item}</Text>
				</List.Item>
			)}
		/>
	)
}