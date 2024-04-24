import { formatCurrency } from '../formatCurrency'

const cleanString = (str: string) => {
  return str.replace(/\s/g, '') // Remove todos os espaços em branco
}

describe('formatCurrency', () => {
  it('should returns R$ 5,15', () => {
    const inputValue = '5.1471'
    const expectedValue = 'R$ 5,15'
    const formattedValue = formatCurrency(inputValue)
    const expectedValueFormatted = cleanString(expectedValue)
    const formattedValueFormatted = cleanString(formattedValue)
    expect(expectedValueFormatted).toEqual(formattedValueFormatted)
  })
  it('should returns R$ 333.500,00', () => {
    const inputValue = '333500'
    const expectedValue = 'R$ 333.500,00'
    const formattedValue = formatCurrency(inputValue)
    const expectedValueFormatted = cleanString(expectedValue)
    const formattedValueFormatted = cleanString(formattedValue)
    expect(expectedValueFormatted).toEqual(formattedValueFormatted)
  })
  it("should returns ''", () => {
    const response = formatCurrency('ABC')
    expect(response).toEqual('')
  })
})
