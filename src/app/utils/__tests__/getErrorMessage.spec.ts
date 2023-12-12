import { getErrorMessage } from '../getErrorMessage'

describe('GetErrorMessage', () => {
  it('should returns a string "Something went wrong!"', () => {
    const mockedString = 'Something went wrong!'
    const result = getErrorMessage('Something went wrong!')
    expect(result).toEqual(mockedString)
  })
})
