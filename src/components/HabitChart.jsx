import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js'

import dayjs from 'dayjs'
import { useHabitStore } from '@/hooks/useHabitStore.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
)

export default function HabitChart() {
	const history = useHabitStore(s => s.history)
	const habitsCount = useHabitStore(s => s.habits).filter(h => !h.deletedAt).length

	const startOfMonth = dayjs().startOf('month')
	const daysInMonth = dayjs().daysInMonth()
	
	const labels = []
	const counts = []

	for(let i = 0; i < daysInMonth; i++) {
		const d = startOfMonth.add(i, 'day')
		labels.push(d.format('D MMM'))
		counts.push(history[d.format('YYYY-MM-DD')]?.length || 0)
	}

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				label: 'Выполнено привычек',
				data: counts,

				backgroundColor: 'rgba(82, 196, 26, 0.2)',
				// tension: .3,
				cubicInterpolationMode: 'monotone',

				borderWidth: 2,
				borderColor: '#52c41a',

				pointRadius: 3,
				pointBackgroundColor: '#52c41a',
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		plugins: {
			legend: { display: false },
			tooltip: {
				backgroundColor: '#444',
				padding: 10,
			},
		},
		scales: {
			x: {
				grid: { display: false },
				ticks: { color: '#8c8c8c', font: { size: 10 } },
			},
			y: {
				min: 0,
				max: habitsCount+1 || 5,
				ticks: {
					stepSize: 1,
					color: '#8c8c8c',
				},
				grid: { color: '#333' },
			},
		},
	}


	return (
		<div style={{ height: '500px', background: '#202020', padding: '40px 30px 30px', borderRadius: '20px' }}>
			<Line data={data} options={options} />
		</div>
	)
}