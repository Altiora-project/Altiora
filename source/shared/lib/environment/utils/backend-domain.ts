const backendDomain = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL

if (!backendDomain) {
  throw new Error('[ ERROR ] Backend domain is not defined')
}

export { backendDomain }
