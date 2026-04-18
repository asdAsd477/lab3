import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './global.css'

import App from '@/App.jsx'
import HomePage from '@/pages/HomePage.jsx'
import AboutPage from '@/pages/AboutPage.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/about', element: <AboutPage /> },
		]
	}
])

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)