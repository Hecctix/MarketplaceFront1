import "../styles/globals.css";

//INTERNAL IMPORT
import  {NavBar, Footer}  from '../components/componentindex';


const MyApp = ({ Component, pageProps })=> (
<div>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
</div>
);

export default MyApp;