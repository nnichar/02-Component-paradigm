import React from "react";
import { Table, Tag, Space } from 'antd';

function App() {

  const data = [
      {
        key: '1',
        name: 'John Brown',
        number: 123,
      },
      {
        key: '2',
        name: 'Jim Green',
        number: 456,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 789,
      },
  ];

  const columns = [
      {
          title: 'Name',
          dataIndex: 'name',
      },
      {
          title: ' The number of images',
          dataIndex: 'number',
          // sortDirections: ['descend'],
          // sorter: (a, b) => a.number - b.number, 
      },
  ]

  return (
      <div className="App">
          <br /><br />
          <Table columns={columns} dataSource={data} />
      </div>
  );
}

export default App;