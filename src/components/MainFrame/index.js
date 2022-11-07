import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SiderBar from './SiderBar';
import HeaderBar from './HeaderBar';
import './index.scss';

const { Content } = Layout;

function MainFrame() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ height: '100%' }}>
      <SiderBar collapsed={collapsed} />
      <Layout>
        <HeaderBar
          toggle={() => {
            setCollapsed(!collapsed);
          }}
          collapsed={collapsed}
        />
        <Content className="content-layout">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

MainFrame.propTypes = {};

export default MainFrame;
