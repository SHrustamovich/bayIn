import { Suspense } from "react";
import Header from "./header";
import HeaderTop from "./header-top";
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
};

export default Root;
