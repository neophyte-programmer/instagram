import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot} from "recoil"

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    // Wrap app in session to know if user is authenticated or not
	  <SessionProvider session={session}>
		  {/* State Management with recoil */}
		  <RecoilRoot>
			<Component {...pageProps} />
		  </RecoilRoot>
		</SessionProvider>
	)
}

export default MyApp
