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

5、改造加法，调用reducer：store.dispatch({ type: 'increment', data: parseInt(value) })
发现store的值确实变了，但是页面显示没有变化
区别分析：
使用this.setState的时候，react会自动更新组件的状态，还会重新调用一次render，从而对页面进行刷新
而Redux只是对状态进行了更新，并没有更新渲染页面的默认动作；即redux内部的状态更改默认是不会对页面进行更新的
因此需要对redux的状态进行监听，然后调用render来刷新页面

6、api2：store.subscribe(df) 监听状态的变化
store.subscribe(()=>{}) 只要redux中任何一个状态发生变化，都会执行这个回调函数

6.1 回调函数使用 this.setState({}) 虽然什么都没有，但是其会触发更新+渲染

6.2 this.forceUpdate() 强制刷新页面

6.3 上面两种需要在各个组件都使用componentDidMount()内进行store的订阅，如果组件数量很多，那么就会非常麻烦
可以直接在入口文件index.js中进行store的订阅，这样就只需要在入口文件中进行一次订阅，然后检测到redux更新之后直接挂载整个App组件，因为DOM diffing算法的存在，这样的渲染效率不会太差

总结：
（1）去除Computer组件自身的状态
（2）src下建立：
-src
 -redux
  -store.js
  -xxx_reducer.js
（3）store.js：
    1）引入redux中的createStore函数，创建一个store
    2）createStore调用的场合需要传入一个为其服务的reducer
    3）暴露store对象
（4）xxx_reducer.js：
    1）reducer的本质是一个函数，接收：preState、action 返回加工后的状态
    2）reducer有两个作用：初始化状态，加工状态
    3）reducer被第一次调用时，是store自动触发的，传递的(preState:undefined,action:{type: "@@redux/INITx.x.x.x.x"})
（5）在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
    备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠程序员自己实现

p101 求和案例完整版
+ action creators  用于自动创建action对象(符合redux的初衷，不要程序员自己去创建这些action对象)
与reducer类似，各个组件都有对应的action-creator

注意到type这种写操作类型的常量值，万一写错了 很难排查，因此我们需要一个存常量值的文件来保证编码的错误率尽量低
而且如果这个常量以后需要更改名称，只需要改源头即可，非常方便！！！

小结：
新增文件：
1、computer_action.js 专门用于创建action对象
2、constant.js 放置由于编码疏忽写错action中的type；统一管理魔法值

redux进阶
p102 redux进阶之异步action
同步action 与 异步action 的区别
首先要认识到，action是js中的一般Object对象，但也可以是一个函数function
一般对象的action叫做同步action，函数类型的action叫做异步action
如果直接传递异步action给store.dispatch()，其会报错并提示以下内容：
![image-20250310103244031](meinster.assets/image-20250310103244031.png)
大体内容为：Actions must be plain objects. Instead, the actual type was: 'function'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions
提示如果向store传递非一般对象的action对象需要使用中间件来处理
中间件的作用；当检测到传到store的action对象为非一般对象(function)的场合发动，该动作会变为执行action对象(function)函数一次

引入redux-thunk中间件 
npm i redux-thunk
thunk - 形实转换程式
接下来在store.js中引入中间件redux-thunk，使其支持异步action；其为默认暴露直接引入即可
需要在redux中引入applyMiddleware函数，并将中间件作为参数传入；整体作为第二个参数传入到createStore中

import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import computerReducer from './computer_reducer'
import { thunk } from 'redux-thunk'; 
export default createStore(computerReducer, applyMiddleware(thunk))

因为store.dispatch(异步action)，而异步action一般会调用同步action，因此在这个回调函数里可以直接传dispatch，可以避免引入store.js

总结：
(1)明确：延迟的动作不想交给组件自身，想交给action
(2)何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
(3)具体编码：
 1.npm i redux-thunk，并配置在store中
 2.创建action的函数不再返回一般对象，而是一个函数，该函数中写想要的异步任务；从而实现不再组件等待而是store去管理
 3.异步任务有结果后，分发一个同步的action去真正操作数据
(4)备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action

p103 对react-redux的理解
react与redux是不同的出版方，facebook为了简化程序员编码，将redux出了react版本，即react-redux

react-redux模型的理解：(详见图片：react-redux模型图.png)
1.所有的UI组件都应该被包裹在一个容器组件中，他们是父子关系(容器组件是父，UI组件是子)
2.容器组件是真正和redux打交道的，其可以随意的使用redux的api
3.UI组件中不能使用任何redux的api
4.容器组件会传给UI组件:
  (1)redux中所保存的状态
  (2)用于操作状态的方法
5.备注:容器给UI传递:redux的状态、redux中操作状态的方法，均通过props传递

p104 连接容器组件与UI组件
UI组件 放components中
容器组件 放container中
改造ui组件，使其中不能包含任何的redux的api，负责页面的呈现和绑定用户的事件(鼠标事件、键盘事件等)

注意到容器组件不能使用rcc快捷创建了，因为其比较复杂，需要借助react-redux来创建
npm i react-redux
容器组件是一个桥梁，链接redux与ui组件