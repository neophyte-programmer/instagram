import React from 'react'
import Head from 'next/head'
import { getProviders, signIn } from 'next-auth/react'

//  Access providers from server side by destructuring props
const SignIn = ({ providers }) => {
	return (
		<div>
			<Head>
				<title>Sign In</title>
				<link rel='icon' type='image/png' href='/logo.png' />
			</Head>
			<>  
				{Object.values(providers).map((provider) => (
					<div key={provider.name}>
						<button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</>
		</div>
	)
}

// Server side rendering
export async function getServerSideProps(context) {
    // Gets available providers
    const providers = await getProviders()
    // Returns providers to client side
    return {
      props: { providers },
    }
  }
export default SignIn
