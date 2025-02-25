p99 求和案例react版
冷知识：.gitignore文件是用来告诉Git不应该跟踪的文件或目录;react项目中因为node_modules文件夹内部分文件比较大，而且涉及到不同版本不同环境，因此不需要上传到代码仓库，推荐直接在.gitignore文件中添加node_modules，每次拉取代码到新环境只需要执行npm install即可自动下载对应的依赖

p100 求和案例redux 迷你版(本版本没有Action Creators)
必要的组件：store、reducer + npm install redux react-redux
注意：每一个组件都有一个reducer

冷知识：默认暴露一般只暴露一次 暴露一个东西 而store.js就非常适合默认暴露 即 export default store

1、创建store
import { createStore as createStore} from 'redux' 中createStore已经被弃用，
所以使用：import { legacy_createStore as createStore} from 'redux'
或者 configureStore

2、创建reducer
冷知识：import {xxx} from xxx 与 import xxx from xxx 的区别：前者支持统一或分别暴露的形式 而后者表示默认暴露的形式
但是reducer一般使用默认暴露，其比较专一地对一个东西进行服务，有着一对一的关系；详见store.js中的引入方式

reducer不管细节的事情，只处理最为直接的操作，其他逻辑如异步操作判断、传入参数的判断等，最好在组件中就判断好了再告诉reducer进行处理执行

可以说reducer比较纯粹

3、组件中的变化
因为state已经全部交给了redux管理，因此组件中的state已经名存实亡了，需要从redux的store来获取值了!

4、api1：store.getState() 获取当前的state
注意到没有使用其他任何的api，就已经初始化了state，那是因为store会自动调用一次reducer函数
computerReducer调用了 0 Object { type: "@@redux/INITv.t.g.8.z.4" }  --> 这里preState为0是因为我们使用了形参默认值，去掉后为undefined

5、改造加法：