import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

function HeaderBar(props) {
  const { toggle, collapsed } = props;
  return (
    <Header className="header-layout" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </Header>
  );
}

HeaderBar.propTypes = {
  toggle: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default HeaderBar;
