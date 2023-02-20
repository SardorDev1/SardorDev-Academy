
import Layout from '@/companents/Layout'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthUserProvider } from '../companents/context/AuthUserContext'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
export default function App({ Component, pageProps }) {


  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  })


  return (<>
    {loading === true ? (
      <>
        <div className="preloader">
          <div className="Loader">
            <div className="loader">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="h1">Yuklanmoqda</div>

          </div>
        </div>
      </>
    ) : (
      <>
        <AuthUserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthUserProvider>
      </>
    )}


  </>)


}
