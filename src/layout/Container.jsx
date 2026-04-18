import { Flex } from 'antd'

export default function Container({ children }) {
	return (
		<Flex vertical gap={34} style={{ width: '100%', maxWidth: 600, padding: '60px 20px', marginInline: 'auto' }}>
			{children}
		</Flex>
	)
}