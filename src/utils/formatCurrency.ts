export const formatCurrency = (value: string): string => {
  const valueFormatted = parseFloat(value.replace(',', '.'))

  if (!isNaN(valueFormatted)) {
    const formattedValue = valueFormatted.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
    return formattedValue.trim()
  }

  return ''
}
