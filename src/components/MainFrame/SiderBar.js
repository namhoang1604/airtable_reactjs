import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import MenuBar from './MenuBar';

const { Sider } = Layout;

function SiderBar(props) {
  const { collapsed } = props;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <div className="logo" />
      <MenuBar />
    </Sider>
  );
}

SiderBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SiderBar;
