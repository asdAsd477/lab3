
import { describe, it, expect } from 'vitest'
import { formatTimestamp } from './formatTimestamp'

describe('formatTimestamp utility', () => {
	it('should correctly format a specific date', () => {
		// 1. Arrange: Фиксированная дата (12 апреля 2026, 10:30)
		const timestamp = new Date('2026-04-12T10:30:00').getTime()
		
		// 2. Act
		const result = formatTimestamp(timestamp)
		
		// 3. Assert: Ожидаем строку без " г."
		expect(result).toContain('12 апреля 2026')
		expect(result).toContain('10:30')
		expect(result).not.toContain(' г.')
	})

	it('should handle zero timestamp (epoch)', () => {
		const result = formatTimestamp(0)
		expect(result).toContain('1 января 1970') // начало эпохи Unix
	})
})
