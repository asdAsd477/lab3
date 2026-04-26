import { describe, it, expect } from 'vitest'
import { getDayColor, getDayEmoji, getDayStatus } from './habitUtils'
import dayjs from 'dayjs'

describe('getDayStatus logic', () => {
	const date = dayjs('2026-04-19')

	it('should return "full" when all habits are completed', () => {
		// 1. Arrange
		const habits = [{ id: 1, createdAt: date.valueOf() }]
		const history = { '2026-04-19': [1] }

		// 2. Act
		const status = getDayStatus(date, habits, history)

		// 3. Assert
		expect(status).toBe('full')
	})

	it('should return "empty" for future dates', () => {
		const futureDate = dayjs().add(1, 'day')
		const status = getDayStatus(futureDate, [], {})
		expect(status).toBe('empty')
	})

	it('should return "partial" when some (but not all) habits are completed', () => {
		const habits = [{ id: 1 }, { id: 2 }]
		const history = { '2026-04-19': [1] } // Сделан 1 из 2

		const status = getDayStatus(date, habits, history)
		expect(status).toBe('partial')
	})

	it('should ignore deleted habits in total count', () => {
		const habits = [
			{ id: 1, deletedAt: null }, 
			{ id: 2, deletedAt: 1776545683739 } // Эта привычка удалена
		]
		const history = { '2026-04-19': [1] } 
		// В итоге: активных 1, выполнено 1. Должно быть "full".

		const status = getDayStatus(date, habits, history)
		expect(status).toBe('full')
	})

	it('should handle missing date key in history', () => {
		const habits = [{ id: 1 }]
		const history = {} // Ключа с датой вообще нет

		const status = getDayStatus(date, habits, history)
		expect(status).toBe('empty')
	})







	it('should return correct color and emoji for "full" status', () => {
		const habits = [{ id: 1 }]
		const history = { '2026-04-19': [1] }

		expect(getDayColor(date, habits, history)).toContain('#373')
		expect(getDayEmoji(date, habits, history)).toBe('🟢')
	})

	it('should return correct color and emoji for "partial" status', () => {
		const habits = [{ id: 1 }, { id: 2 }]
		const history = { '2026-04-19': [1] }

		expect(getDayColor(date, habits, history)).toContain('#773')
		expect(getDayEmoji(date, habits, history)).toBe('🟡')
	})

	it('should return correct color and emoji for "empty" status', () => {
		const habits = [{ id: 1 }]
		const history = { '2026-04-19': [] }

		expect(getDayColor(date, habits, history)).toContain('#733')
		expect(getDayEmoji(date, habits, history)).toBe('🔴')
	})
})