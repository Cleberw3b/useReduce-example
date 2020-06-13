import Error, { ErrorProps } from 'next/error'
import { NextPageContext } from 'next'

function ErrorPage({ statusCode }: ErrorProps) {
    return <Error statusCode={statusCode} />
}

ErrorPage.getInitialProps = async ({ res }: NextPageContext) => {

    const statusCode = res?.statusCode

    if (statusCode)
    {
        if (statusCode === 403)
        {
            res?.writeHead(301, {
                Location: '/login',
                'Content-Type': 'text/html; charset=utf-8',
            })
            res?.end()
        } else if (statusCode < 500)
        {
            res?.writeHead(301, {
                Location: '/',
                'Content-Type': 'text/html; charset=utf-8',
            })
            res?.end()
        }
        return { statusCode }
    } else
        return { statusCode: 500 }
}

export default ErrorPage
