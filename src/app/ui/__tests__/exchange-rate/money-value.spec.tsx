import { render } from '@testing-library/react'
import MoneyValue from '../../dashboard/exchange-rate/money-value'

describe('MoneyValue', () => {
  it('should rendes correctly', () => {
    const props = {
      name: 'Dólar',
      value: 100.0,
      variation: 5.0
    }
    const { getByTestId, getByText } = render(<MoneyValue {...props} />)

    const nameElement = getByText(/Dólar/i)
    expect(nameElement).toBeInTheDocument()

    const valueElement = getByTestId('format-money')
    const expectedText = 'Dólar: R$ 100,00'
    const receivedText = valueElement.textContent?.replace(/\s+/g, ' ').trim()
    expect(receivedText).toBe(expectedText)

    const variationIcon = getByTestId('expand-less-icon')
    expect(variationIcon).toBeInTheDocument()
  })
  const testVariationIcon = (variation: number) => {
    const props = {
      name: 'Dólar',
      value: 100.0,
      variation: variation
    }
    const { getByTestId } = render(<MoneyValue {...props} />)

    let iconTestId = ''
    if (variation > 0) {
      iconTestId = 'expand-less-icon'
    } else if (variation < 0) {
      iconTestId = 'expand-more-icon'
    } else {
      iconTestId = 'expand-rule-icon'
    }
    const variationIcon = getByTestId(iconTestId)
    expect(variationIcon).toBeInTheDocument()
  }

  it('should check get icon with expand-less-icon', () => {
    testVariationIcon(5)
  })

  it('should check get icon with expand-more-icon', () => {
    testVariationIcon(-5)
  })

  it('should check get icon with expand-rule-icon', () => {
    testVariationIcon(0)
  })
})
