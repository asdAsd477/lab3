import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { PATHS } from '@/constants/paths.js'

import './global.css'

import App from '@/App.jsx'
import HomePage from '@/pages/HomePage.jsx'
import CalendarPage from '@/pages/CalendarPage.jsx'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const router = createBrowserRouter([
	{
		path: PATHS.HOME,
		element: <App />,
		children: [
			{ path: PATHS.HOME, element: <HomePage /> },
			{ path: PATHS.CALENDAR, element: <CalendarPage /> },
		]
	}
])

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)