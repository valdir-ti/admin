import { getErrorMessage } from '../getErrorMessage'

describe('GetErrorMessage', () => {
  it('should returns an error message to an instance of Error', () => {
    const error = new Error('Personalized Error')
    const result = getErrorMessage(error)
    expect(result).toBe('Personalized Error')
  })

  it('should returns an error message to object with "message property"', () => {
    const error = { message: 'Error on object' }
    const result = getErrorMessage(error)
    expect(result).toBe('Error on object')
  })

  it('should returns a string directly', () => {
    const error = 'Error as string'
    const result = getErrorMessage(error)
    expect(result).toBe('Error as string')
  })

  it('should returns a default message to others cases', () => {
    const error = 123
    const result = getErrorMessage(error as unknown)
    expect(result).toBe('Something went wrong!')
  })

  it('should returns a default message to null or undefined error ', () => {
    const error = null
    const result = getErrorMessage(error as unknown)
    expect(result).toBe('Something went wrong!')
  })
})
