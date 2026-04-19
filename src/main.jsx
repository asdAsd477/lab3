import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import { PATHS } from '@/constants/paths.js'

import './global.css'

import App from '@/App.jsx'
import HomePage from '@/pages/HomePage.jsx'
import CalendarPage from '@/pages/CalendarPage.jsx'
import StatsPage from '@/pages/StatsPage.jsx'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const router = createHashRouter([
	{
		path: PATHS.HOME,
		element: <App />,
		children: [
			{ path: PATHS.HOME, element: <HomePage /> },
			{ path: PATHS.CALENDAR, element: <CalendarPage /> },
			{ path: PATHS.STATS, element: <StatsPage /> },
		]
	}
], {
	// basename: '/lab3',
})

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)