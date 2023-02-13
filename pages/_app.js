import '@/styles/common.scss'
import Link from 'next/link'
import Header from './Header'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
