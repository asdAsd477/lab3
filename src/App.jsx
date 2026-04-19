import Header from '@/layout/Header.jsx'
import { Layout, ConfigProvider, theme } from 'antd'
import { Outlet } from 'react-router'

const { Content } = Layout

const customTheme = {
	algorithm: theme.darkAlgorithm,
	token: {
		fontSize: 18,
		controlHeight: 40,

		colorBgLayout: '#181818',
		colorBgContainer: '#2a2a2a',

		colorPrimary: '#52c41a',
		colorLink: '#73d13d',
	},
	components: {
		Layout: {
			headerBg: '#101010',
			headerHeight: 80,
			headerPadding: '0 50px',
		},
		Typography: {
			titleMarginBottom: 0,
			titleMarginTop: 0,
		},
		List: {
			colorSplit: '#333',
		},

		Form: {
			itemMarginInlineEnd: 0,
			itemMarginBottom: 0,
		},
	}
}

export default function App() {
	return (
		<ConfigProvider theme={customTheme}>
			<Layout style={{ minHeight: '100vh' }}>
				<Header />
				<Content style={{ viewTransitionName: 'page-content' }}>
					<Outlet />
				</Content>
			</Layout>
		</ConfigProvider>
	)
}