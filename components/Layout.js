
import Footer from "./Footer"

const Layout = ({children})=>{
    return(
        <main>
            { children }
            <Footer></Footer>
        </main>
    )
}

export default Layout;