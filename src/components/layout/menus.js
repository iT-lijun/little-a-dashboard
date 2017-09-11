import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

const SubMenu = Menu.SubMenu

class Menus extends React.Component {

  getMenuSelectedKey = (routes) => {
    if (routes && routes.length <=0 ) return ''
    let gn = '';
    for (let i = routes.length - 1; i >= 0; i--) {
      const obj = routes[i];
      if ('group' in obj) {
        gn = obj.group;
        break;
      }
    }
    return gn;
  }

  render () {
    const { sidebarFold, onMenuClick, routes } = this.props
    const menukey = this.getMenuSelectedKey(routes);

    return (
      <Menu mode={sidebarFold ? 'vertical' : 'inline'} theme='light' onClick={onMenuClick} selectedKeys={Array.of(menukey)}>
        <Menu.Item key='dashboard'>
          <Link to='/dashboard'>
            <Icon type='appstore-o' />Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link to='/profile'>
            <Icon type='user' />User Profile
          </Link>
        </Menu.Item>
        <SubMenu key='component' title={<span><Icon type='bars' /><span>Component</span></span>}>
          <Menu.Item key='component-alert'>
            <Link to='/alert' style={{color: '#999'}}>
              Alert
            </Link>
          </Menu.Item>
          <Menu.Item key='component-charts'>
            <Link to='/charts' style={{color: '#999'}}>
              Charts
            </Link>
          </Menu.Item>
          <Menu.Item key='component-editor'>
            <Link to='/editor' style={{color: '#999'}}>
              Editor
            </Link>
          </Menu.Item>
          <Menu.Item key='component-grid'>
            <Link to='/grid' style={{color: '#999'}}>
              Grid
            </Link>
          </Menu.Item>
          <Menu.Item key='component-map'>
            <Link to='/map' style={{color: '#999'}}>
              Map
            </Link>
          </Menu.Item>
          <Menu.Item key='component-table'>
            <Link to='/table' style={{color: '#999'}}>
              Table
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='setting'>
          <Link to='/setting'>
            <Icon type='setting' />Setting
          </Link>
        </Menu.Item>
        <Menu.Item key='acknowledge'>
          <Link to='/acknowledge'>
            <Icon type='copyright' />Acknowledge
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Menus
