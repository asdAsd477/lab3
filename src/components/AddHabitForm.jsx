import { useHabitStore } from '@/hooks/useHabitStore.js'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Flex, Form, Input } from 'antd'
import { useRef } from 'react'

export default function AddHabitForm() {
	const addHabit = useHabitStore(store => store.addHabit)

	const inputRef = useRef(null)
	const [form] = Form.useForm()

	const onFinish = fields => {
		addHabit(fields.habit)
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