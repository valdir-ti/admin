import { convertStringToBoolean } from '../convertStringToBoolean'

describe('convertStringToBoolean', () => {
  it('deve retornar true para "true"', () => {
    expect(convertStringToBoolean('true')).toBe(true)
  })

  it('deve retornar false para "false"', () => {
    expect(convertStringToBoolean('false')).toBe(false)
  })

  it('deve retornar false para null', () => {
    expect(convertStringToBoolean(null)).toBe(false)
  })

  it('deve retornar false para undefined', () => {
    expect(convertStringToBoolean(undefined)).toBe(false)
  })
})
