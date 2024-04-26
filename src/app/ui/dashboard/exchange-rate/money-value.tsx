import { formatCurrency } from '@/utils/formatCurrency'
import VariationIcon from './variation-icon'

type MoneyValueProps = {
  name: string
  value: string
  variation: string
}

const MoneyValue = ({ name, value, variation }: MoneyValueProps) => {
  return (
    <h3 className="font-semibold text-base">
      <p className="flex items-center" data-testid="format-money">
        {name}: {formatCurrency(value)}
        <span className="ml-2">
          <VariationIcon data-testid="variation-icon" value={variation} />
        </span>
      </p>
    </h3>
  )
}

export default MoneyValue
