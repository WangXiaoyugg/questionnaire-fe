# React-ts-demo
一个学习 React, typescript 的 demo 项目。

## 项目搭建
1. 了解 React 常见的脚手架，创建项目
2. 配置编码规范, eslint, prettier
3. 代码提交到Git仓库, husky, commitlint

### Vite 和 Webpack 的 区别
1. Create-React-App 内部使用 webpack 进行打包
2. Vite 比 Webpack 打包项目更快（启动时，代码更新时）,Vite 使用 ES Module 的语法（开发环境）
3. 但技术选型要综合考虑，包括稳定性、成本、效率等。

## JSX 和 组件
1. 学习JSX 基本语法
2. 学会React组件基础知识
3. 实战： 开发一个列表页

### 标签
1. 大写表示组件，小写表示html标签
2. 标签必须要闭合
3. 每个JSX只能有一个根节点
   
### 属性
1. class 要改为 className
2. style 要使用JS对象，而且 key用驼峰写法
3. for 要改为 htmlFor

### 事件
1. 使用onXxx 的形式
2. 必须要传入一个函数
3. 注意TS 的类型

### 插入JS变量
1. 使用 {XXX} 插入变量， 函数，表达式
2. 可插入文本，属性
3. 可用于注释

### 条件判断
1. &&
2. 条件表达式

### 循环
1. 使用数组map

### 组件
1. 父子组件通信
2. 组件自定义Props的 TS 类型 

### 列表实战
1. List 组件
2. QuestionCard 组件


### JSX 和 模板的区别
1. 判断， Vue 模板使用 v-if，v-else,  React JSX 使用条件表达式
2. 循环， Vue 模板使用 v-for, React JSX 使用 map。
3. React能用JS就用JS, Vue 自定义很多指令


## React Hooks
1. React 内置Hooks
2. 自定义 Hooks
3. 使用第三方Hooks


### useState
1. state 是 内部的状态，state的更新会触发组件的更新
2. state 的更新是异步更新
3. 如果变量不在JSX中使用，用useRef 代替 useState
4. 可能会被合并, 使用函数不会被合并
5. 不可变数据，不去修改state的值，而是去传入一个新值

### immer
不可变数据


### useEffect
声明周期：创建，更新，销毁
React18开始，开发环境会执行两次useEffect, 模拟组件创建、更新、销毁的完整流程
生产环境会执行一次useEffect

### useRef
一般用于操作DOM
也可传入普通JS 变量，不会触发 rerender

### useMemo
可以缓存数据，不用每次执行函数都重新执行
可用于计算量较大的场景，缓存提高性能

### useCallback
缓存事件的回调函数

### 抽离公共部分 复用代码
1. 自定义hooks
2. 第三方hooks, react-use, a-hooks

### Hooks 的使用规则
1. 必须使用 useXXX 格式命名
2. 只能在两个地方调用hook, 组件内，其他的Hook
3. 必须保证每次的调用顺序一致，不能放在 if for 内部

### 闭包陷阱
当异步函数取state 时，可能不是最新的state;
可以用useRef来解决。

## React CSS 方案
1. 普通方式 ，内联style + 引入 css 文件
   1. classnames
   2. clsx
2. css Module 和 Sass
   1. 解决类名重复的问题
3. css inh js, styled-component, style-jsx, Emotion


## 路由
使用React Router;
1. 为系统增加路由，支持多页面切换
2. 路由
3. 动态参数
4. React-Router
   1. OutLet
   2. Link
   3. useNavigate
   4. useParams
   5. useSearchParams

### 业务流程
创建者 -> 新建问卷 -> 编辑问卷 -> 发布问卷
用户 -> 填写问卷 -> 提交答卷
创建者 -> 查看问卷统计分析

### 路由设计
问卷系统
1. 首页 `/`
2. 登录页 `/login`
3. 注册 `/register`
4. 404  
5. 问卷管理
   1. 我的问卷 `/manage/list`
   2. 星标问卷 `/manage/star`
   3. 回收站 `/manage/trash`
6. 问卷详情
   1. 编辑问卷 `/question/edit/:id`
   2. 问卷统计`/question/stat/:id`

### 模板
Layout 模板。

大多数页面 都需要 header, footer 的 MainLayout
问卷管理都需要 左侧的导航菜单 ManageLayout
问卷编辑、统计, QuestionLayout

## 第三方UI组件库
使用 Ant Design UI 组件库 完善页面功能和样式

### 常见React UI组件库
1. Ant Design 国内
2. Material UI 国外
3. TailWind UI 国外流行，收费

## 表单组件
使用 AntDesign 表单组件，开发登陆，注册，搜索功能 

表单组件的校验和错误提示，几种方案

受控组件，值同步state, 使用value属性

React Hook Form, Formix

## 网络请求
搭建Mock服务, 作为临时的服务端
1. mock.js
   1. 只能劫持 XMLHttpRequest, 不能劫持fetch
   2. 要在生产环境注释Mockjs， 否则线上请求也被劫持
   3. 在项目中不推荐使用
2. node.js + mock.js
3. 在线mock平台
   1. Y-API, Fast-mock, Swagger
   2. 可能不稳定，不维护，或者网络不稳定
   3. 可能存在敏感数据泄漏的风险

使用Ajax和服务端通讯，并应用于现有功能， 

API设计，使用Restful API
1. 用户API
   1. 注册
   2. 登陆
   3. 获取用户信息

2. 问卷API
   1. 创建问卷
   2. 获取单个问卷
   3. 更新问卷
   4. 删除问卷
   5. 查询问卷列表
   6. 复制问卷

### 获取用户信息
- method `get`
- path `/api/user/info`
- response `{errno: 0, data: {...}}`

### 注册
- method `get`
- path `/api/user/register`
- request body `{username, password, nickname }`
- response `{errno: 0, data: {...}}`

### 登陆
- method `get`
- path `/api/user/login`
- request body `{username, password }`
- response `{errno: 0, token }`  **JWT** 使用token

### 创建问卷
- method `post`
- path `/api/question`
- request body - 无， 点击一个按钮即可创建，title自动生成
- response `{errno: 0, data: {id, title, ...} }`  

### 获取单个问卷
- method `get`
- path `/api/question/:id`
- response `{errno: 0, data: {id, title, ...} }`  

### 获取问卷列表
- method `get`
- path `/api/question`
- response `{errno: 0, data: {list: [], total } }`

### 更新问卷信息
- method `patch`
- path `/api/question/:id`
- response `{errno: 0 }`

### 彻底批量删除问卷
- method `delete`
- path `/api/question`
- request body `{ids: [] }`
- response `{errno: 0 }`

### 复制删除问卷
- method `delete`
- path `/api/question/duplicate/:id`
- response `{errno: 0, data: {id} }`

所有接口使用 RESTful API, 用户验证使用JWT, 统一返回格式 `{errno, data, msg}`

为列表页，登录页，注册页，增加Ajax请求


