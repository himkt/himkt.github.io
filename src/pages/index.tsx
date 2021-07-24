import Layout from "../templates/layout";


const IndexPage = () => (
    <Layout title="Index">
        <div className="container">
            <h1 className="title">It works!</h1>
            <ul>
                <li><a href="/interest">Interest</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </div>
    </Layout>
)


export default IndexPage
