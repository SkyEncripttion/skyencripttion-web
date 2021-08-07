import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document
{
    static async getInitialProps(ctx: DocumentContext)
    {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render()
    {
        return (
            <Html lang="en">
                <Head>
                    <meta name="author" content="SkyEncripttion" />
                    <meta name="theme-color" content="#212226" />
                    <meta name="msapplication-navbutton-color" content="#212226" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="#212226" />
                    {/* Global site tag (gtag.js) - Google Analytics */ }
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MSBDK4R712" />
                    <script
                        dangerouslySetInnerHTML={ {
                            __html: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\n\ngtag('config', 'G-MSBDK4R712');`
                        } }
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument