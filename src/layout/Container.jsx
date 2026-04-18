import { Flex } from 'antd'

export default function Container({ children }) {
	return (
		<Flex vertical align="center" style={{ padding: '60px 20px' }}>
			<div style={{ width: '100%', maxWidth: 600 }}>
				<Flex vertical gap={34}>
					{children}
				</Flex>
			</div>
		</Flex>
	)
}