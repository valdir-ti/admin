import { MdExpandLess, MdExpandMore, MdHorizontalRule } from 'react-icons/md'

type VariationIconProps = {
  value: string
}

const VariationIcon = ({ value }: VariationIconProps) => {
  const numericValue = parseFloat(value)

  if (numericValue > 0) {
    return (
      <MdExpandLess
        data-testid="expand-less-icon"
        className="text-[28px] text-green-500 font-bold"
      />
    )
  }
  if (numericValue < 0) {
    return (
      <MdExpandMore
        data-testid="expand-more-icon"
        className="text-[28px] text-red-500 font-bold"
      />
    )
  }
  if (numericValue === 0) {
    return (
      <MdHorizontalRule
        data-testid="expand-rule-icon"
        className="text-[28px] text-white-500 font-bold"
      />
    )
  }

  return (
    <MdHorizontalRule
      data-testid="expand-rule-icon"
      className="text-[28px] text-white-500 font-bold"
    />
  )
}

export default VariationIcon
