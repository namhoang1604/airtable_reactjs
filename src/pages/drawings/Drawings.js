/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import getAllDrawings from '../../sagas/drawings/drawingsActions';
import { columns } from '../models/Models';
import { getAllModelsByModelModel } from '../../sagas/models/modelsActions';

function Drawings() {
  const [showDrawing, setShowDrawing] = useState(true);
  const drawings = useSelector((state) => state.drawings.drawings);
  const flattenModels = useSelector((state) => state.models.flattenModels);

  const dispatch = useDispatch();

  useEffect(() => {
    if (drawings.length === 0) {
      dispatch(getAllDrawings());
    }
  }, []);

  const mappingDrawing = (data) => data.map((d) => ({ ...d, key: d.id }));

  const mappingModel = (data) =>
    data.map((d) => ({ ...d, key: d.id, children: null }));

  const goToModels = (record) => {
    setShowDrawing(!showDrawing);
    dispatch(getAllModelsByModelModel(record.modelModel));
  };

  const drawingColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => goToModels(record)}>
            Go to Models
          </Button>
        </Space>
      ),
    },
  ];
  const tableRender = showDrawing ? (
    <Table
      pagination={false}
      columns={drawingColumns}
      scroll={{ y: 'calc(100vh - 170px)' }}
      dataSource={mappingDrawing(drawings)}
    />
  ) : (
    <>
      <Button onClick={() => setShowDrawing(!showDrawing)}>Back</Button>
      <Table
        pagination={false}
        columns={columns}
        scroll={{ y: 'calc(100vh - 170px)' }}
        dataSource={mappingModel(flattenModels)}
      />
    </>
  );

  return tableRender;
}

export default Drawings;
