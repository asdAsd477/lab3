import { describe, it, expect, beforeEach } from 'vitest'
import { useHabitStore } from './useHabitStore'

describe('HabitStore (Zustand)', () => {
	// "5. Тесты должны быть независимыми друг от друга"
	beforeEach(() => {
		useHabitStore.setState({ habits: [], history: {} })
	})

	it('should add a new habit to the list', () => {
		const { addHabit } = useHabitStore.getState()
		
		addHabit('Test Habit')
		
		const habits = useHabitStore.getState().habits
		expect(habits).toHaveLength(1)
		expect(habits[0].title).toBe('Test Habit')
		expect(habits[0]).toHaveProperty('id')
	})

	it('should add a habit and then mark it as deleted (soft delete)', () => {
    const title = 'Drink Water'
    
    // 1. Добавляем
    useHabitStore.getState().addHabit(title)
		let habits = useHabitStore.getState().habits
		const habitId = habits[0].id
		
		expect(habits).toHaveLength(1)
		expect(habits[0].deletedAt).toBeUndefined()

		// 2. Удаляем
		useHabitStore.getState().removeHabit(habitId)
		habits = useHabitStore.getState().habits
		
		expect(habits[0].deletedAt).not.toBeUndefined()
		expect(typeof habits[0].deletedAt).toBe('number')
	})

	it('should toggle habit completion in history', () => {
		const dateKey = '2026-04-19'
		const habitId = 123

		// 1. Включаем (добавляем ID в историю дня)
		useHabitStore.getState().toggleHabit(dateKey, habitId)
		let history = useHabitStore.getState().history
		expect(history[dateKey]).toContain(habitId)

		// 2. Выключаем (удаляем ID из истории дня)
		useHabitStore.getState().toggleHabit(dateKey, habitId)
		history = useHabitStore.getState().history
		expect(history[dateKey]).not.toContain(habitId)
	})

	it('should handle multiple habits in history for the same day', () => {
		const dateKey = '2026-04-19'
		useHabitStore.getState().toggleHabit(dateKey, 1)
		useHabitStore.getState().toggleHabit(dateKey, 2)

		const dayHistory = useHabitStore.getState().history[dateKey]
		expect(dayHistory).toHaveLength(2)
		expect(dayHistory).toEqual([1, 2])
	})
})
