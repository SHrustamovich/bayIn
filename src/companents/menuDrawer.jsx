import { Drawer } from "antd";

const MenuDrawer = ({open,setCancel}) => {
    return <Drawer open={open} onClose={() => setCancel(false)} placement="left" closable={false}>
        salom
    </Drawer>;
};

export default MenuDrawer;
