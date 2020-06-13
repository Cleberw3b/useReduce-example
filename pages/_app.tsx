import { AppProps, AppContext } from 'next/app'
import { NextPageContext } from 'next'
import Layout from "components/layout/layout"
import UserAuthProvider from 'auth_provider/provider'
import "public/theme.scss"


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserAuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout >
        </UserAuthProvider>
    )
}

MyApp.getInitialProps = async (props: AppContext) => {

    const { Component, ctx }: AppContext = props
    const { req, res }: NextPageContext = ctx

    const isAuthenticated = false

    if (!isAuthenticated && ctx.pathname !== '/login')
    {
        res?.writeHead(302, {
            Location: '/login',
            'Content-Type': 'text/html; charset=utf-8',
        })
        res?.end()

    } else if (isAuthenticated && ctx.pathname === '/login')
    {
        res?.writeHead(302, {
            Location: '/',
            'Content-Type': 'text/html; charset=utf-8'
        })
        res?.end()
    }

    let pageProps: any = {}
    if (Component.getInitialProps)
        pageProps = await Component.getInitialProps(ctx)

    return { pageProps }
}

export default MyApp
