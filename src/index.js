import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//在使用了react-redux的情况下，不再需要使用store.subscribe()方法来监听redux的状态变化，而是直接在容器组件中使用connect()方法来订阅redux的状态变化。

//检测redux中状态的改变，若redux的状态发生了改变，则重新渲染APP组件（因为有diffing算法，所以只渲染变化的部分，速度不会太慢）
// store.subscribe(() => {
//     root.render(<App/>)
// });