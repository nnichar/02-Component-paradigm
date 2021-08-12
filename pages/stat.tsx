import React from "react";
import { NextPage } from "next";
import { useState } from "react";
import { CatPost } from "./types/Cats";
import { Table, Row, Col, Button} from 'antd';
import {SmileOutlined} from '@ant-design/icons';

interface StatProps {
  posts: CatPost[];
}

  const count = 0;
  const Stat: NextPage<StatProps> = ({ posts }) => {
    const [selectedPosts, setSelectedPosts] = useState(posts);
    const data = 
        selectedPosts.map(({ author }, index) => (
            {
              key: index,
              name: author,
              number : 1,
            }
        ))

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: ' The number of images',
            dataIndex: 'number',
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.number - b.number, 
            // sortDirections: ['descend'],
        },
    ]

    return (
      <div>
            <br /><br />
            <Table columns={columns} dataSource={data} />

            <Row justify="center">
                <Col >
                    <Button type="primary" href="/" size="large" shape="round" icon={<SmileOutlined/> }> Back to Home Page </Button>
                </Col>
            </Row>   
      </div>
    );
  }
  
Stat.getInitialProps = async ({
  req: {
    headers: { host },
  },
}): Promise<StatProps> => {
  console.log(host);
  const res = await fetch(`http://${host}/api/getCats`);
  return { posts: await res.json() };
};

export default Stat;
