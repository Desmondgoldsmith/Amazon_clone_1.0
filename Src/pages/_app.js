import { Provider } from 'react-redux'
import { store } from '../App/Store'
import '../styles/globals.css'
import {Provider as NextAuthProvier} from "next-auth/client"


function MyApp({ Component, pageProps }) {
  return( 
  <Provider store={store}>
      <Component {...pageProps} />
   </Provider>
)}

export default MyApp
