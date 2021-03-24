import { isValidWord } from './strings'
import { convertUTCToTime } from './time'

describe('Utils', () => {
  describe('Strings', () => {
    describe('isValidWord', () => {
      it('should return true if it is a valid word', () => {
        expect(isValidWord('test')).toBeTruthy()
        expect(isValidWord('Test')).toBeTruthy()
        expect(isValidWord('TeSt')).toBeTruthy()
      })

      it('should return false if it is NOT a valid word', () => {
        expect(isValidWord('111')).toBeFalsy()
        expect(isValidWord('test-1')).toBeFalsy()
        expect(isValidWord('123')).toBeFalsy()
      })
    })
  })

  describe('Time', () => {
    describe('convertUTCToTime', () => {
      it('should return date time', () => {
        expect(convertUTCToTime(1616478965, 0)).toBe('5:56 AM')
        expect(convertUTCToTime(1616523474, 0)).toBe('6:17 PM')
        expect(convertUTCToTime(1616619342, 3600)).toBe('9:55 PM')
      })
    })
  })
})
