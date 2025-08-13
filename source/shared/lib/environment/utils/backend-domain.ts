const backendDomain = process.env.API_URL

if (!backendDomain) {
  throw new Error('[ ERROR ] Backend domain is not defined')
}

export { backendDomain }
