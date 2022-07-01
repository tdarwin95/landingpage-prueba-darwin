import Head from 'next/head'
import Header from './Header/Header'

function Layout() {
	return (
        <div>
            <Head>
                <title>Pruba Darwin</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" />
            </Head>
            <Header />
        </div>
	)
}

export default Layout