import { Button } from "antd";
import useLanguage from "../hooks/useLanguage";
import { useState } from "react";
import MenuDrawer from "./menuDrawer";

const Header = () => {
    const [open, setOpen] = useState(false)
    
    const translate = useLanguage()
    return (
        <>
            <Button onClick={() => setOpen(true)}>{translate("cat")}</Button>
            <MenuDrawer open={open} setCancel={setOpen} />
        </>
    );
};

export default Header;
