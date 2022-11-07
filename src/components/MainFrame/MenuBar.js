import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
  { key: '1', label: 'Models', path: '/models' },
  { key: '2', label: 'Drawings', path: '/drawings' },
  {
    key: '3',
    label: 'Services',
    path: '/services',
  },
];

function MenuBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(
    items.find((_item) => location.pathname.startsWith(_item.path)).key,
  );

  const onClickMenu = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    navigate(clicked.path);
  };

  useEffect(() => {
    setSelectedKey(
      items.find((_item) => location.pathname.startsWith(_item.path)).key,
    );
  }, [location]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      selectedKeys={[selectedKey]}
      onClick={onClickMenu}
    >
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
}

MenuBar.propTypes = {};

export default MenuBar;
