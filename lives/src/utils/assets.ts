export const getAssetPath = (path: string): string => {
  const basePath = process.env.NODE_ENV === "production" ? "" : ""
  return `${basePath}${path}`
}
