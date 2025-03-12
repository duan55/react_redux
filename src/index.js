import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//检测redux中状态的改变，若redux的状态发生了改变，则重新渲染APP组件（因为有diffing算法，所以只渲染变化的部分，速度不会太慢）
store.subscribe(() => {
    root.render(<App/>)
});