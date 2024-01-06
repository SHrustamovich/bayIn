import { Drawer } from "antd";
import { menu } from "../constants/menu";
import { Link } from "react-router-dom";

const MenuDrawer = ( {open, setCancel} ) => {
    const handlyClick = () => {
        setCancel(false);
    };

    return (
        <Drawer
            open={open}
            onClose={() => setCancel(false)}
            placement='left'
            closable={false}>
            {menu.map((item) => (
                <div key={item.id} className="menu-drawer">
                    {item.icon}
                    <Link to={item.path} onClick={handlyClick} className="menu-drawer_title">
                        {item.title_uz}
                    </Link>
                </div>
            ))}
        </Drawer>
    );
};

export default MenuDrawer;
