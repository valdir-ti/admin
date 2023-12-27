export const getStringFormDataValue = (
  formData: FormData,
  field: string
): string | undefined => {
  const value = formData.get(field)

  if (typeof value === 'string' || value instanceof Blob) {
    return value as string
  }

  return undefined
}
