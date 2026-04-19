import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useHabitStore = create(
	persist(
		set => ({
			habits: [],
			history: {}, // Структура: { "2026-04-19": [id1, id2] }

			addHabit: title => set(state => ({
				habits: [...state.habits, { id: crypto.randomUUID(), title, createdAt: Date.now() }]
			})),

			removeHabit: id => set(state => ({
				habits: state.habits.map(habit =>
					habit.id === id
						? { ...habit, deletedAt: Date.now() }
						: habit
				)
			})),

			toggleHabit: (dateKey, habitId) => set(state => {
				const dayHistory = state.history[dateKey] || []
				const isCompleted = dayHistory.includes(habitId)

				return {
					history: {
						...state.history,

						[dateKey]: isCompleted
							? dayHistory.filter(id => id !== habitId)
							: [...dayHistory, habitId]
					}
				}
			}),
		}),

		{ name: 'habits/store' }
	)
)