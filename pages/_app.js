import '@/styles/index.css'
import App from 'next/app';
import { Component } from 'react';

export default class MyApp extends App{
  render(){
    const { Component, pageProps } = this.props;
    return <Component {...pageProps}/>
  }
}