import Document, { Html, Head, Main, NextScript } from 'next/document';
import { render } from 'react-dom';
import React from 'react';
// import Document from 'next/document';

export default class MyDocument extends Document{
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render(){
    return(
      <Html lang="pl">
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}