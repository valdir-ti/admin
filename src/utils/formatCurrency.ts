export const formatCurrency = (value: string): string => {
  const valueFormatted = parseFloat(value.replace(',', '.'))

  if (!isNaN(valueFormatted)) {
    return valueFormatted.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  } else {
    return ''
  }
}
