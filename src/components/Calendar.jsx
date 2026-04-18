import { Calendar as AntCalendar, Typography } from 'antd'

import locale from 'antd/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'

export default function Calendar({
	isModalOpen,
	setIsModalOpen,
	selectedDate,
	setSelectedDate,
}) {
	const today = dayjs().startOf('day')

	const fullCellRender = (date) => {
		const isToday = date.isSame(today, 'day');
		const isSelected = date.isSame(selectedDate, 'day');
		const isCurrentMonth = date.isSame(selectedDate, 'month');
		const isFuture = date.isAfter(today, 'day');

		const cellStyle = {
			height: '100px',
			padding: '10px',
			border: isToday ? '2px solid #52c41a' : '1px solid #303030',
			borderRadius: '8px',
			backgroundColor: isSelected ? 'rgba(82, 196, 26, 0.15)' : (isCurrentMonth ? '#1a1a1a' : 'transparent'),
			opacity: isFuture ? 0.4 : 1,
			cursor: isFuture ? 'not-allowed' : 'pointer',
			transition: 'all 0.3s'
		};

		return (
			<div 
				style={cellStyle} 
				onClick={() => !isFuture && setIsModalOpen(true)}
				// onClick={(e) => e.stopPropagation()}
			>
				<Typography.Text strong={isToday}>{date.date()}</Typography.Text>
				<div style={{ marginTop: 10, fontSize: '12px', color: '#52c41a' }}>
					{!isFuture && "3 из 5"}
				</div>
			</div>
		);
	};


	return (
		<AntCalendar
			mode="month"
			style={{
				borderRadius: 20,
				padding: '20px 30px',
			}}

			fullCellRender={fullCellRender}
			locale={locale}
			onSelect={setSelectedDate}
		/>
	)
}