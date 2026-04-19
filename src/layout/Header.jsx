import { PATHS } from '@/constants/paths.js'

import { Link, useLocation } from 'react-router'
import { Typography, Layout, Flex, Space } from 'antd'

const { Text } = Typography
const { Header: AntHeader } = Layout

export default function Header() {
	const location = useLocation()

	const items = [
		{ key: PATHS.HOME, label: 'Главная' },
		{ key: PATHS.CALENDAR, label: 'Календарь' },
		{ key: PATHS.STATS, label: 'Статистика' },
	]

	return (
		<AntHeader>
			<Flex justify="space-between" align="center">
				<Link href="/" style={{ lineHeight: 1 }} viewTransition>
					<Text style={{fontSize: 24}}>🌱 habits.</Text>
				</Link>

				<Space size="large">
					{items.map(item => {
						let style = {}

						if(location.pathname === item.key) style = {
							borderBottom: '2px solid',
							pointerEvents: 'none',
						}

						return <Link to={item.key} style={style} viewTransition>
							{item.label}
						</Link>
					})}
				</Space>
			</Flex>
		</AntHeader>
	)
}