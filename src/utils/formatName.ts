export function formatName(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0] // Caso o nome tenha apenas uma palavra
  return `${parts[0]} ${parts[parts.length - 1]}`
}
