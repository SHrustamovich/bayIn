<<<<<<< Updated upstream
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
=======
import { Drawer, } from "antd";
import { menu } from "../constants/menu";
import { Link } from "react-router-dom";
const MenuDrawer = ({open,setCancel}) => {
    return <Drawer open={open} onClose={() => setCancel(false)} placement="left" closable={false} className="menu-drawer">
      {menu.map(item => (
          <div key={item.id} className="menu-drawer_icon">{item.icon}<Link to={item.path} className="menu-drawer_title">{item.title_uz}</Link>
        </div>
      ))}
      {menu.map(item => (
        <div key={item.id} className="menu-drawer_icon">{item.icon}<Link to={item.path} className="menu-drawer_title">{item.title_uz}</Link></div>
      ))}
      {menu.map(item => (
        <div key={item.id} className="menu-drawer_icon">{item.icon}<Link to={item.path} className="menu-drawer_title">{item.title_uz}</Link></div>
      ))}
>>>>>>> Stashed changes
    </Drawer>;
};

export default MenuDrawer;
