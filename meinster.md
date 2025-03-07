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