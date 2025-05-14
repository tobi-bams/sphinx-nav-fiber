export const isWebView = () => {
  // Check for user agent identifiers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera

  console.log('User agent:', userAgent)

  console.log('Trying to see Navigator', navigator)

  return userAgent === 'Sphinx'
}

export const isAndroid = () => navigator.userAgent.includes('Android')
