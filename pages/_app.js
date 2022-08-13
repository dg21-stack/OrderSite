import '../styles/globals.css'
import MainHeader from '../components/header/MainHeader';
import {AuthContextProvider} from '../components/store/use-context';
function MyApp({ Component, pageProps }) {

  return <AuthContextProvider>
   
    <MainHeader>
    <Component {...pageProps} />
  </MainHeader>
    
    
  </AuthContextProvider>
}

export default MyApp;
