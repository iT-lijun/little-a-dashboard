import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

class Menus extends React.Component {

  render() {
    const { sidebarFold, onMenuClick } = this.props;

    return (
      <Menu mode={sidebarFold ? 'vertical' : 'inline'} theme="light" onClick={onMenuClick}>
        <Menu.Item key="1">
          <Link to="/dashboard">
            <Icon type="appstore-o" />Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">
            <Icon type="user" />User Profile
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>Component</span></span>}>
          <Menu.Item key="sub1-Alert">
            <Link to="/alert" style={{ color: '#999'}}>
              Alert
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-Charts">
            <Link to="/charts" style={{ color: '#999'}}>
              Charts
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-Editor">
            <Link to="/editor" style={{ color: '#999'}}>
              Editor
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-Grid">
            <Link to="/grid" style={{ color: '#999'}}>
              Grid
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-Map">
            <Link to="/map" style={{ color: '#999'}}>
              Map
            </Link>
          </Menu.Item>
          <Menu.Item key="sub1-Table">
            <Link to="/table" style={{ color: '#999'}}>
              Table
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="3">
          <Link to="/setting">
            <Icon type="setting" />Setting
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/acknowledge">
            <Icon type="copyright" />Acknowledge
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Menus;
