import React from 'react';
import styles from './layout.less';
import Menus from './menus';
import { config } from 'utils';

class Sider extends React.Component {

  render() {
    const { sidebarFold } = this.props;

    const menuProps = {
      sidebarFold,
      onMenuClick() { }
    }
    return (
      <div>
        <div className={styles.logo}>
          <img alt={'logo'} src={config.logo} />
          {sidebarFold ? <span></span> : <span>{config.name}</span>}
        </div>
        <Menus {...menuProps} />
      </div>
    )
  }
}

export default Sider;
