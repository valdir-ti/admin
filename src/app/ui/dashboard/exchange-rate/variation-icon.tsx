import { MdExpandLess, MdExpandMore, MdHorizontalRule } from 'react-icons/md'

type VariationIconProps = {
  value: number
}

const VariationIcon = ({ value }: VariationIconProps) => {
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

  if (value > 0) return icons.positive
  if (value < 0) return icons.negative
  return icons.neutral
}

export default VariationIcon
