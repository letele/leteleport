import { useContext } from "react";
import Head from 'next/head'
import {Footer,Header,StylesContext,ThemeModal} from ".";

const withLayout = Comp => user => {
    const WrappedComp = props => {

        const {theme,backgroundSectionColor} = useContext(StylesContext)
        return (
            <>
                <Head>
                    <title>letele | {user}</title>
                    <meta name="keywords" content={user}/>
                </Head>
                <div id='layout' style={theme}>
                    <Header user={user}/>

                    <section style={backgroundSectionColor}>
                        <Comp {...props} />
                    </section>

                    <ThemeModal />

                    <Footer/>
                </div>
            </>
        )
    }
        
    return WrappedComp;
}

export default withLayout