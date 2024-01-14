import Header from "./header";
import HeaderTop from "./header-top";
import { full } from "../constants/router";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
const Root = () => {
    return (
        <div className='root'>
            <HeaderTop />
            <Header />

            {
                <div>
                    <Routes>
                        {full.map(({ id, path, element }) => (
                            <Route key={id} path={path} element={element} />
                        ))}
                    </Routes>
                </div>
            }
            <Footer />
        </div>
    );
};

export default Root;
