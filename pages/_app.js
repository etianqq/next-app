import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/with-redux-store'
import '../styles/index.scss'

class MyApp extends App {

    componentDidCatch(error, errorInfo) {
        console.log('CUSTOM ERROR HANDLING', error)
        super.componentDidCatch(error, errorInfo)
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>)
    }
}

export default withReduxStore(MyApp)