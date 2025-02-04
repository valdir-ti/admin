export const formatCurrency = (value: number): string => {
  const valueFormatted = parseFloat(value.toFixed(2))

  if (!isNaN(valueFormatted)) {
    const formattedValue = valueFormatted.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formattedValue.trim()
  }

  return ''
}
