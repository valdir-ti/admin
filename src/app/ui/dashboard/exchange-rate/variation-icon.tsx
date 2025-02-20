import { MdExpandLess, MdExpandMore, MdHorizontalRule } from 'react-icons/md'

type VariationIconProps = {
  value: number
}

const VariationIcon = ({ value }: VariationIconProps) => {
  const numericValue = parseFloat(value.toFixed(2))

  const icons = {
    positive: (
      <MdExpandLess
        data-testid="expand-less-icon"
        className="text-[28px] text-green-500 font-bold"
      />
    ),
    negative: (
      <MdExpandMore
        data-testid="expand-more-icon"
        className="text-[28px] text-red-500 font-bold"
      />
    ),
    neutral: (
      <MdHorizontalRule
        data-testid="expand-rule-icon"
        className="text-[28px] text-white-500 font-bold"
      />
    )
  }

  return numericValue > 0
    ? icons.positive
    : numericValue < 0
      ? icons.negative
      : icons.neutral
}

export default VariationIcon
