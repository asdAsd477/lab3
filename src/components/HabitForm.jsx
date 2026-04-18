import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input } from 'antd'
import { useRef } from 'react'

export default function HabitForm({ setHabits }) {
	const inputRef = useRef(null)
	const [form] = Form.useForm()

	const onFinish = fields => {
		const newHabit = {
			id: crypto.randomUUID(),
			title: fields.habit,
			createdAt: +new Date,
		}
		setHabits(habits => [...habits, newHabit])

		form.resetFields()
		setTimeout(() => inputRef.current.focus())
	}

	return (
		<Form form={form} onFinish={onFinish}>
			<Flex gap="small">
				<Form.Item
					name="habit"
					style={{ flex: 1 }}
					rules={[{ required: true, message: 'Поле обязательно' }]}
				>
					<Input ref={inputRef} placeholder="Например: погладить кота" size="large" />
				</Form.Item>

				<Form.Item>
					<Button htmlType="submit" type="primary" size="large" icon={<PlusCircleOutlined />}>Добавить</Button>
				</Form.Item>
			</Flex>
		</Form>
	)
}