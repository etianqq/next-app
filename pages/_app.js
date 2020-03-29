import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import '../styles/index.scss'

export default class MyApp extends App {

    componentDidCatch(error, errorInfo) {
        console.log('CUSTOM ERROR HANDLING', error)
        super.componentDidCatch(error, errorInfo)
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>)
    }
}