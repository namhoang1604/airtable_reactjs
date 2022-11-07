/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import getAllServices from '../../sagas/services/servicesActions';

function Services() {
  const services = useSelector((state) => state.services.services);

  const dispatch = useDispatch();

  useEffect(() => {
    if (services.length === 0) {
      dispatch(getAllServices());
    }
  }, []);

  const mappingServices = (data) =>
    data
      .filter((d) => {
        const createdDuration = moment().diff(moment(d.createdTime));
        const calendarInterval =
          d.calendarInterval && d.calendarIntervalUnit
            ? moment
                .duration(d.calendarInterval, d.calendarIntervalUnit)
                .asMilliseconds()
            : null;
        const hoursInterval = d.runningHoursInterval
          ? moment.duration(d.runningHoursInterval, 'hour').asMilliseconds()
          : null;

        if (calendarInterval && hoursInterval) {
          return (
            calendarInterval <= createdDuration ||
            hoursInterval <= createdDuration
          );
        }
        if (hoursInterval && !calendarInterval) {
          return hoursInterval <= createdDuration;
        }
        if (!hoursInterval && calendarInterval) {
          return calendarInterval <= createdDuration;
        }
        return false;
      })
      .map((d) => {
        const calendarFrequency =
          d.calendarInterval && d.calendarIntervalUnit
            ? `${d.calendarInterval} ${d.calendarIntervalUnit}${
                d.calendarInterval > 1 ? 's' : ''
              }`
            : null;

        const hoursFrequency = d.runningHoursInterval
          ? `${d.runningHoursInterval} hour${
              d.runningHoursInterval > 1 ? 's' : ''
            }`
          : null;

        const runningTime = moment
          .duration(moment().diff(moment(d.createdTime)))
          .humanize();
        return {
          ...d,
          key: d.id,
          calendarFrequency,
          hoursFrequency,
          runningTime,
        };
      });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Instructions',
      dataIndex: 'instructions',
      // eslint-disable-next-line react/style-prop-object
      render: (text) => <p style={{ whiteSpace: 'pre-line' }}>{text}</p>,
      width: '40%',
    },
    {
      title: 'Calendar frequency',
      dataIndex: 'calendarFrequency',
      key: 'calendarFrequency',
    },
    {
      title: 'Hours frequency',
      dataIndex: 'hoursFrequency',
      key: 'hoursFrequency',
    },
    {
      title: 'Running time',
      dataIndex: 'runningTime',
      key: 'runningTime',
    },
    {
      title: 'Models',
      dataIndex: 'relatedModelNumbers',
      key: 'relatedModelNumbers',
    },
  ];

  return (
    <Table
      pagination={false}
      columns={columns}
      scroll={{ y: 'calc(100vh - 170px)' }}
      dataSource={mappingServices(services)}
    />
  );
}

export default Services;
