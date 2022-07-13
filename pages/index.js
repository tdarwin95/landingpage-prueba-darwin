import Layout from "../components/Layout"
import Main from "../components/Main"

function HomePage({articles}) {
    return (
        <div>
            <Layout/>
            <Main
                articles={articles}
            />
            
            <footer></footer>
        </div>
    )
}

HomePage.getInitialProps = async (ctx) => {
    const res = await fetch('https://5eed24da4cbc340016330f0d.mockapi.io/api/articles')
    const json = await res.json()
    return { articles: json }
}

export default HomePage