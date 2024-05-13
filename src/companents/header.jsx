import { Button, Input, Flex } from "antd";
import useLanguage from "../hooks/useLanguage";
import { useState } from "react";
import MenuDrawer from "./menuDrawer";
import { Icons } from "../assets/icons";
import { Link } from "react-router-dom";
const Header = () => {
    const [open, setOpen] = useState(false)
    
    const translate = useLanguage()
    return (         

        <Flex className="header">   <Link to={"/"}><p className="header__logo">BUY<span className="header-span">IN</span></p></Link> 
            <div className="header_catalog">
                <Icons.categories className="header__catalog_img"/>
            <Button onClick={() => setOpen(true)} className="header__catalog">{translate("cat")}</Button>
            <MenuDrawer open={open} setCancel={setOpen} />
            </div>   
            <div className="header_input">
                <Input placeholder="Введите запрос..." className="header-input"/><Button className="header__btn">{<Icons.search/>}</Button>
            </div>
                <Flex justify="space-around" align="center">
                    <Link className="header-order">
                        <Icons.order /><span>{translate("order")}</span>
                    </Link>
                    <Link className="header-like">
                        <Icons.like /><span>{translate("like")}</span>
                    </Link>
                    <Link className="header-shop">
                        <Icons.shop /><span>{translate("shop")}</span>
                    </Link>
                        <div className="header-user_btn">
                           
                    <Button className="header-user-btn">
                            {translate("user")}<Icons.user className="header-user"/>
                        </Button> 
                        </div>
                    
                </Flex>
                </Flex>
    );
};

export default Header;
