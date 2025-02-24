// 引入所需的组件和模块
import React from 'react';
import { ConfigProvider, Radio, Checkbox } from 'antd'; // 假设已经安装并引入了antd库

// 创建一个函数式组件
const DiyColor = () => {
  // 返回JSX代码，用于渲染UI
  return (
    // 使用ConfigProvider包裹子组件，以便于向这些子组件传递主题配置
    <ConfigProvider
      // 主题配置对象
      theme={{
        components: {
          // 自定义Radio组件的主题颜色为绿色
          Radio: {
            colorPrimary: 'green',
          },
          // 自定义Checkbox组件的主题颜色为红色
          Checkbox: {
            colorPrimary: 'red',
          },
        },
      }}
    >
      {/* 渲染一个Radio按钮 */}
      <Radio>这是一个Radio按钮</Radio>
      {/* 渲染一个Checkbox复选框 */}
      <Checkbox>这是一个Checkbox复选框</Checkbox>
    </ConfigProvider>
  );
};

export default DiyColor; // 导出App组件，以便在其他地方使用