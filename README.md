## fa123-admin

> fa123后台管理系统

>A React.js project

> 技术栈: ReactJS + React-router3.x + Redux + less + antd + fetch + Redux-thunk

### 特性

* css: css-modules + less + classnames
* 路由: React-router3.2
* 状态管理: Redux
* 组件库: antd
* ajax请求: fetch + Redux-thunk


### Getting Started

Just clone the repo and install the necessary node modules:

```shell
# clone the repo
$ git clone git@gitlab.fa123.com:fa123/fa123-admin.git

# change directory
$ cd fa123-admin

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm start

# build for production with minification
$ npm run build
```

### 目录结构

```bash
├── /build/          # 打包后文件
├── /config/         # webpack配置文件
├── /scripts/        # npm命令
├── /public/         # 公共文件，编译时copy至build目录
├── /src/            # 项目源码目录
│ ├── /api/          # api接口与containers相对应
│ ├── /styles/       # 公用样式
│ ├── /components/   # UI组件及UI相关方法
│ ├── /containers/   # 页面相关容器组件
│ ├── /router/       # 路由
│ ├── /store/        # 状态
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── cookie.js    # cookies
│ ├── index.js       # 入口文件
│ └── index.html
├── package.json     # 项目信息
├── .editorconfig    # 编辑风格设置
├── .gitignore       # git忽略文件
└── README.md        # 项目说明
```

项目说明:

- containers: 对应每一个路由页面，文件夹首字母大写，文件夹内主文件以`index.js`导出，对应每一个容器组件，其内部单独使用的子组件，放在`components`文件夹下
    * 组件命名以简洁为主(不用加父组件名为前缀)
    * 原则上`components`下的组件全部为无状态组件（stateless），全部创建为函数式组件，如果实在需要state,将state全部提升至最顶层容器组件中。全部以props的方式注入。
    * 最顶层容器组件进行集中数据管理，分发action异步请求数据，自上至下数据流，将数据分发下去。

#### 权限值说明
* 顶级菜单顺序号（0，1，2...） + 二级菜单顺序号（0，1，2...） + 栏目内顺序号

#### 依赖出错解决办法（cannot find module 'XXX'）
* Please remove any lock files (package-lock.json or yarn.lock) and your node_modules/ directory and reinstall.

#### 使用库说明
* store.js 将menus, permission存储localStorage

#### 事件处理函数绑定this的三种方式
第一种：
``` js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
```
第二种：
``` js
render() {
    return (
      <div onClick={this.handleClick.bind(this)}>ES6方式创建的组件</div>
    );
  }
```
第三种：
``` js
return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
```

#### create-react-app项目添加less配置
* 使用create-react-app 创建的项目默认不支持less，以下增加less配置的步骤：
* 安装less-loader 和 less `npm install less-loader less --save-dev`
* 修改 webpack.config.dev.js 和 webpack.config-prod.js 配置文件
* 改动 `test: /\.css$/` 为 `/\.(css|less)$/`
* `test: /\.css$/` 的 use 数组配置增加 `less-loader`

``` js
{
    test: /\.(css|less)$/,
    exclude: /node_modules/,
    use: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: true // 开启css modules
            }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                    }),
                ],
            },
        },
        {
            loader: require.resolve('less-loader') // compiles Less to CSS
        }
    ],
}
```

* 相关文章
    * [create-react-app项目添加less配置](https://segmentfault.com/a/1190000010162614)
    * [create-react-app脚手架配置less](https://www.cnblogs.com/zzzzzwt/p/7287736.html)

#### 开启css modules
* css modules哈希id与class

``` js
options: {
    modules: true // 开启css modules
}
```
#### css modules排除antd样式
antd后和css-modules冲突如何解决
用webpack打包，使用css-modules后，antd的样式就失效了，因为 node_modules 里 antd 的样式也被 css-modules了
解决方法是在 Webpack 中针对 node_modules 中的依赖包单独写一个 loader 规则，不开启 css module ，并且给自己的代码打开 css module。 <br>
完整代码：
``` js
{
    test: /\.(css|less)$/,
    exclude: /node_modules/,
    use: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1,
                modules: true // 开启css modules
            }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                    }),
                ],
            },
        },
        {
            loader: require.resolve('less-loader') // compiles Less to CSS
        }
    ],
},
// 下面是ant-design样式专用配置文件
{
    test: /\.(css|less)$/,
    include: /node_modules/,
    use: [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1
                // modules: true // 不开启css modules
            }
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                        ],
                        flexbox: 'no-2009',
                    }),
                ],
            },
        },
        {
            loader: require.resolve('less-loader') // compiles Less to CSS
        }
    ],
},
```

#### babel-plugin-import实现antd组件按需加载
如果使用 `import { Button } from 'antd'` 的写法会引入 `antd` 下所有的模块。 <br>
为了提高打包编译的速度和浏览器下载资源的速度，可以通过以下的写法来只加载需要的组件。
``` js
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
```
上面的写法比较麻烦，更好的办法是使用 babel，用 `babel-plugin-import` 来实现同样的按需加载效果：
1. 安装插件  `cnpm i babel-plugin-import --save-dev`
2. 修改 .babelrc文件或在package.json中，在plugins节点下，添加下面这个配置项：
``` js
"plugins": [
    "transform-runtime",
    [
        "import",
        {
            "libraryName": "antd",
            "style": true
        }
    ]
]
```
style可以为true或者css, true导入js和css模块（LESS/Sass源文件）css导入js和css模块（css 内置文件） <br>
现在插件会帮你转换成 `antd/lib/xxx` 的写法了，同时因为设置了 style 属性，模块样式也可以按需自动加载，不需要再手动引入css或less文件了。
所以只需要这样写：`import { Button } from 'antd';`

> [使用babel-plugin-import实现antd组件库中的组件按需加载](https://www.cnblogs.com/yswz/p/7165031.html)

#### 模块按需加载方法

1. 配置webpack，项目使用create-react-app生成，在webpack.config.dev.js加入如下代码：

``` js
output: {
    chunkFilename: 'static/js/[name].chunk.js',
    ...
}

plugins: [
    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'static/js/common.js'
    }),
    ...
]
```

2.在webpack.config.prod.js加入如下代码：

``` js
output: {
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    ...
}

plugins: [
    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'static/js/common.[chunkhash:8].js'
    })
    ...
]
```

3.如果使用的是webpack1.x版本，则plugins里需要写成：
`new webpack.optimize.CommonsChunkPlugin('common', 'static/js/common.js'）` 或
`new webpack.optimize.CommonsChunkPlugin('common', 'static/js/[name].[chunkhash:8].chunk.js'）`

4.在路由组件中：

``` js
const App = (nextState, callback) => {
    require.ensure([], function (require) {
        callback(null, require('../containers/App').default);
       }, 'app');
};

<Route path="/" getComponent={App} >
```

#### 组件间通讯
* [React 组件间通讯](http://taobaofed.org/blog/2016/11/17/react-components-communication/)

#### props与state
* props不可改变，不可变数据，由此数据产生一个新数据，但不要改变数据本身

#### 错误处理
1. A state mutation was detected between dispatches
    * `category`与`navCategory` 共享状态，idToKey浅拷贝，问题就出在了idToKey身上

#### Redux


#### tip
* `node_modules`直接修改antd源码样式，因为`node_modules`不上传github，所有再次下载时样式不存在
* state类型变化会引发一些问题
* props不可变，state在改变时类型的变化
* props一定要写propTypes，确定props是否必传，必传属性要写isRequired，不必传属性要赋初始值，函数{foo = somevalue}，对象static defaultProps = {};
* 当为函数参数指定默认值时，在调用函数时不传值(相当于传undefined)或传值为undefined时会使用默认值
* Tabs组件里的modal不要在TabPane里各写一个，写在最外面，否则会出现两个modal
* props数据不能改变，但可以通过props产生一个数据，变相改变props
* `{this.props.params.id}` 获取路由参数
* reducer stete={} 初始值第一次初始化时会用到
* 同一个请求state会同步
* logo放到public下，不需要common文件夹
* `const {articleCheckedListData = []} = this.props;` 通过给props赋初值，防止类型变化出错

#### antd design使用总结
* rowKey指定key

#### 解决打包文件过大的问题

#### 代码分片之后打包后过大（待解决）

#### antd解决Upload跨域问题
``` js
headers: {
    "X-Requested-With": null
}
```

#### 根reducer
[Redux: Create root reducer from combineReducers and “loose” properties
](https://stackoverflow.com/questions/39261092/redux-create-root-reducer-from-combinereducers-and-loose-properties)

#### 问题
* css-modules之后，覆盖antd的默认样式

#### 参考

antd-admin：<https://github.com/zuiidea/antd-admin>

ant-design-pro：<https://pro.ant.design/index-cn>

