import React, { Component } from 'react'
import { Button, DatePicker, ConfigProvider } from 'antd';
import { WechatOutlined, WeiboOutlined, TwitterOutlined, YoutubeOutlined, SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

import DiyColor from './DiyColor';

export default class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <ConfigProvider
        theme={{
          components: {
            Button: {
              primaryColor: 'pink', // 字体色
              colorPrimary: 'green', // 按钮内背景色
              defaultColor: 'red', // ...
            },
          },
        }}
      >

        <div>
          <h2>ant-design</h2>
          <Button type="primary">我是一个按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
          <Button type="primary" icon={<SearchOutlined />}>带搜索框图标的按钮</Button>
          <br />
          <DatePicker onChange={this.onChange} />
          <RangePicker />
          <br />
          <WechatOutlined />
          <WeiboOutlined />
          <TwitterOutlined />
          <YoutubeOutlined />
          {/* <DiyColor/> */}
          {/* <Flex gap="small" wrap>
          <Button type="primary">我是一个按钮</Button>
          <Button>默认按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
        </Flex> */}
        </div>

      </ConfigProvider>
    )
  }
}
