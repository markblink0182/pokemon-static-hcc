import Head from 'next/head'
import { FunctionComponent, PropsWithChildren } from "react";
import { Navbar } from '../ui';

interface Props{
  title?: string;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin;
export const Layout: FunctionComponent<PropsWithChildren<Props>>= ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon app'}</title>
            <meta name='author' content='Mark D L Cruz' />
            <meta name='description' content={`Información sobre el pokemon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>
          <Navbar />
        <main style={{ padding: '0px 20px'}}>
            { children }
        </main> 
    </>
  )
}

