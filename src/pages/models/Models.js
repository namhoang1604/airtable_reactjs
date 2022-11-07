/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getAllModels } from '../../sagas/models/modelsActions';
import buildTreeService from '../../services/buildTreeService';

export const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Note',
    dataIndex: 'note',
    key: 'note',
  },
];

function Models() {
  const flattenModels = useSelector((state) => state.models.flattenModels);

  const dispatch = useDispatch();
  useEffect(() => {
    if (flattenModels.length === 0) {
      dispatch(getAllModels());
    }
  }, []);

  const onExpand = (expanded, record) => {
    const isLoadChildren = record.children.some(
      (child) => typeof child === 'object' && child !== null,
    );
    if (expanded && !isLoadChildren) {
      dispatch(getAllModels(record.children));
    }
  };

  return (
    <Table
      pagination={false}
      columns={columns}
      scroll={{ y: 'calc(100vh - 170px)' }}
      dataSource={buildTreeService(flattenModels)}
      expandable={{
        onExpand,
      }}
    />
  );
}

export default Models;
