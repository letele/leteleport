import { withStylesContext } from '../components'
import '../styles/globals.css'
import '../styles/articleStyles.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withStylesContext(MyApp)
