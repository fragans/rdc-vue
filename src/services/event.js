export const getEventById = async () => {
  const result = await fetch(`${import.meta.env.VITE_SELF_HOST}/json/data.json`)
  return result.json()
}