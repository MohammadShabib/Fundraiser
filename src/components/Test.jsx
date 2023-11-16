import React from 'react';
import { Progress, Space } from 'antd';
const Test = () => (
    <>

        <br />
        <br />
        <Space size={30} wrap>
            <Progress steps={50} percent={50} />

            <Progress steps={50} percent={50} size={20} />
            <Progress steps={50} percent={50} size={[20, 30]} />
        </Space>
    </>
);
export default Test;