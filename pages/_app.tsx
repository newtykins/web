import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

// todo: ensure head still works
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps}>
            <Head>
                <meta property="og:title" content="newt!!" />
                <meta
                    property="og:description"
                    content="Student programmer providing simplistic solutions to modern
        problems"
                />
                <meta property="og:locale" content="en_GB" />
                <meta property="og:site_name" content="newtt.me" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://newtt.me/" />
                <meta property="og:image" content="/thumb.png" />

                <meta name="twitter:title" content="newt!!" />
                <meta
                    name="twitter:description"
                    content="Student programmer providing simplistic solutions to modern
            problems"
                />
                <meta name="twitter:image" content="/thumb.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
        </Component>
    );
}

export default MyApp;
