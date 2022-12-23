import { Provider } from 'react-redux'
import { store } from '../src/App/Store'
import './styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return( 
   <>
      <SessionProvider session={pageProps.session} refetchInterval={5 * 60} >
   <Provider store={store}>
      <Component {...pageProps} />
   </Provider>
   </SessionProvider> 
   <Toaster
     position='bottom-right'
      toastOptions={{
      style: {
        fontSize: '14px',
      }
     }}/>
   </>
  
  
)}

export default MyApp
