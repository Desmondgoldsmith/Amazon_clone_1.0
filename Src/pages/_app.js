import { Provider } from 'react-redux'
import { store } from '../App/Store'
import '../styles/globals.css'
import {Provider as NextAuthProvier} from "next-auth/react"


function MyApp({ Component, pageProps }) {
  return( 
   <NextAuthProvider session = {pageProps.session} >
<Provider store={store}>
      <Component {...pageProps} />
   </Provider>
   </NextAuthProvider>
  
)}

export default MyApp
