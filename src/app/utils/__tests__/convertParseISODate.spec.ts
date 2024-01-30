import { convertParseISODate } from '../convertParseISODate'

describe('convertParseISODate', () => {
  it('should convert and format ISO date correctly', () => {
    const isoDate = '2023-12-31T12:34:56Z'
    const formattedDate = convertParseISODate(isoDate)
    expect(formattedDate).toEqual('31.12.2023')
  })

  it('should handle invalid input gracefully', () => {
    const invalidDate = 'invalid-date'
    const formattedDate = convertParseISODate(invalidDate)
    expect(formattedDate).toEqual('Invalid Date')
  })

  it('should handle another type of invalid date input', () => {
    const anotherInvalidDate = '2023-25-45T99:99:99Z'
    const formattedDate = convertParseISODate(anotherInvalidDate)
    expect(formattedDate).toEqual('Invalid Date')
  })
})
