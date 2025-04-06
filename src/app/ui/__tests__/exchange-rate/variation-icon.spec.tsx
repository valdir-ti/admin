import { render } from '@testing-library/react'
import VariationIcon from '../../dashboard/exchange-rate/variation-icon'

describe('VariationIcon', () => {
  it('renders MdExpandLess icon for positive value', () => {
    const { getByTestId } = render(<VariationIcon value={0.0003} />)
    const icon = getByTestId('expand-less-icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders MdExpandMore icon for negative value', () => {
    const { getByTestId } = render(<VariationIcon value={-0.0003} />)
    const icon = getByTestId('expand-more-icon')
    expect(icon).toBeInTheDocument()
  })

  it('renders MdHorizontalRule icon for zero value', () => {
    const { getByTestId } = render(<VariationIcon value={0} />)
    const icon = getByTestId('expand-rule-icon')
    expect(icon).toBeInTheDocument()
  })
  it('renders MdHorizontalRule icon for no valid value', () => {
    const { getByTestId } = render(<VariationIcon value={+'ABC'} />)
    const icon = getByTestId('expand-rule-icon')
    expect(icon).toBeInTheDocument()
  })
})
