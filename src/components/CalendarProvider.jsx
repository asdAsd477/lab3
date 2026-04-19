import dayjs from 'dayjs'
import { createContext, useContext, useState } from 'react'

const CalendarContext = createContext(null)

export function CalendarProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedDate, setSelectedDate] = useState(dayjs())

	return (
		<CalendarContext.Provider value={{
			isModalOpen,
			setIsModalOpen,
			selectedDate,
			setSelectedDate,
		}}>
			{children}
		</CalendarContext.Provider>
	)
}

export const useCalendarContext = () => useContext(CalendarContext)