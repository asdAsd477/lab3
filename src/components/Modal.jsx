import { Modal as AntModal } from 'antd'

export default function Modal({
	isModalOpen,
	setIsModalOpen,
	selectedDate,
	setSelectedDate,
}) {
	return (
		<AntModal
			title={`Чек-лист на ${selectedDate.format('D MMMM YYYY')}`}
			open={isModalOpen}

			onOk={() => setIsModalOpen(false)}
			onCancel={() => setIsModalOpen(false)}
			footer={() => {}}

			styles={{ 
				mask: { backdropFilter: 'blur(6px)', background: '#0009' },
				body: { padding: '20px 0' },
			}}
		>
			<p>Здесь скоро будет список чекбоксов...</p>
		</AntModal>
	)
}