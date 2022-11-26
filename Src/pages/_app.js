import { Provider } from 'react-redux'
import { store } from '../Src/App/Store'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return 
  <Provider store={store}>
      <Component {...pageProps} />
   </Provider>
}

export default MyApp
