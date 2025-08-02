if (!process.env.NEXT_PUBLIC_IMAGE_HOST) {
  throw new Error('[ ERROR ] Image-host is not defined')
}
const imageHost = process.env.NEXT_PUBLIC_IMAGE_HOST

export { imageHost }
