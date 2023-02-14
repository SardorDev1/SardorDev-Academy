
import Layout from '@/companents/Layout'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
export default function App({ Component, pageProps }) {


  const [loading, setLoading] = useState(true)


  useEffect(() => {
setTimeout(() => {
  setLoading(false)
}, 1000);
  })


  return (<>
    {loading === true ? <h1>Loading</h1>  : (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}


  </>)


}
