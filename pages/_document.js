import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(){
  return(
    <Html lang="pl">
      <Head>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}