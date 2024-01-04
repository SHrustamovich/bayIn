import { Suspense } from "react";
import Header from "./header";
import HeaderContent from "./header-content";
import HeaderTop from "./header-top";
<<<<<<< Updated upstream
import Lazy from "./lazy";
import { fullroute } from "../constants/router";
import { Route, Routes } from "react-router-dom";

const Root = () => {
    return (
        <div className='root'>
            <HeaderTop />
            <Header />
            {
                <Suspense fallback={<Lazy />}>
                    <Routes>
                        {fullroute.map(({ id, path, element }) => (
                            <Route key={id} path={path} element={element} />
                        ))}
                    </Routes>
                </Suspense>
            }
        </div>
    );
=======
import Footer from "./footer";
import { Suspense } from "react";
import { fullRoute } from "../constants/router";
import { Route, Routes } from "react-router-dom";
import Lazy from "./lazy";
import Main from "./main/Root";
const Root = () => {
    return <div className='root'>
        <HeaderTop />
        <Header />
       
        {
            <Suspense fallback={<Lazy/>}>
                  <HeaderContent />
                    <Main />
                    <Routes>
                       
                {
                    fullRoute.map(({id, path, element}) => (
                        <Route key={id} path={path} element={element}/>
                    ))
                }
                    </Routes>
                   
                
            </Suspense>
        }
        <Footer />
    </div>;
>>>>>>> Stashed changes
};

export default Root;
