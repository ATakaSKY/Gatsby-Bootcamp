import React from "react"

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Home" />
                <h1>Hello.</h1>
                <h2>I'm Aakash, a full-stack developer living in beautiful Dehradun.</h2>
            </Layout>
        </div>
    )
}

export default IndexPage;
