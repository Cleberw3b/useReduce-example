import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  render() {
    return (
      <html lang="pt-br">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1, shrink-to-fit=no"
          />
          <meta charSet="utf-8" />
          <meta name="author" content="CleberW3b - Cléber Oliveira" key="author" />
          <meta name="robots" content="noindex" />
          <meta name="revisit-after" content="1 day" />
          <meta name="language" content="Portuguese" />
          <meta name="generator" content="N/A" />
          <meta name="theme-color" content="#000000" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
