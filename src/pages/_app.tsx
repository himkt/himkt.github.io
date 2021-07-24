import { AppProps } from 'next/app'
import '../styles/index.sass'


const App = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
)


export default App
