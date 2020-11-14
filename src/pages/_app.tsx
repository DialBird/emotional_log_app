import '@styles/globals.css'

import { AppProps } from 'next/app'
import { Provider, createClient } from 'urql'

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL!,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
