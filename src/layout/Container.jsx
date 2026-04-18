import { Flex } from 'antd'

export default function Container({ width = 600, children }) {
	return (
		<Flex vertical gap={34} style={{ width: '100%', maxWidth: width, padding: '60px 20px', marginInline: 'auto' }}>
			{children}
		</Flex>
	)
}