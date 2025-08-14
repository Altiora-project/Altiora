export const backendDomain = () => {
  if (!backendDomain) {
    throw new Error('[ ERROR ] Backend domain is not defined')
  }

  return process.env.API_URL
}
