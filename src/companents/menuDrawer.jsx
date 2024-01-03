import { Divider, Drawer, Menu } from "antd";
import { menu } from "../constants/menu";
import { Link } from "react-router-dom";

const MenuDrawer = ({ open, setCancel }) => {

    const handlyClick = () => {
        setCancel(false)
    }
    
    return <Drawer open={open} onClose={() => setCancel(false)} placement="left" closable={false}>
        {
            menu.map(item => (
                <div>{item.icon} <Link to={item.path} onClick={handlyClick}>{item.title_uz}</Link></div>
            ))
       }
    </Drawer>;
};

export default MenuDrawer;
