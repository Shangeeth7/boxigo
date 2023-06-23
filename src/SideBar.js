import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./sidebar.css";

const { Item } = Menu;

function Sidebar() {
  const location = useLocation();

  // Map routes to menu keys
  const keyMap = {
    "/": "1",
    "/profile": "2",
    "/quote": "3",
    "/logout": "4",
  };

  return (
    <Menu
      style={{ fontSize: "20px", marginTop: "10px" }}
      selectedKeys={[keyMap[location.pathname]]}
    >
      <Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Moves</Link>
      </Item>
      <Item key="2" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Item>
      <Item key="3" icon={<MessageOutlined />}>
        <Link to="/quote">Quote</Link>
      </Item>
      <Item key="4" icon={<LogoutOutlined />}>
        <Link to="/logout">Logout</Link>
      </Item>
    </Menu>
  );
}

export default Sidebar;
