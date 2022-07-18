import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if(isSSR) {
    return null
  }
  

  return (
    <div>
      Navbar
      <div className='flex gap-6 md:gap-20'>
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          Sidebar
        </div> 
      </div>
      <div className="mt-4 flex flex-col gap-40 overflow-auto videos flex-1 h-[88vh]">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
