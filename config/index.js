const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://api.humoq.com' : 'https://api.humoq.com'