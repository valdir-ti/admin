import { format, parseISO, isValid } from 'date-fns'

export const convertParseISODate = (date: string) => {
  try {
    const parsedDate = parseISO(date)

    if (isValid(parsedDate)) {
      const formattedDate = format(parsedDate, 'dd.MM.yyyy')
      return formattedDate
    } else {
      return 'Invalid Date'
    }
  } catch (error) {
    console.error('Error parsing date:', error)
    return 'Invalid Date'
  }
}
