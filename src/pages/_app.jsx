import Head from 'next/head'
import Header from '@/components/Header'
import '../../styles/globals.css'

import styled from 'styled-components'

export const Title = styled.title`
`


export default function App({ Component, pageProps }) {
  return(
  <>
  <Head>
  <Title>Itaboary_INK</Title>
  </Head>
   <Header/>
  <Component {...pageProps} />
  </>
  
  ) 
}
