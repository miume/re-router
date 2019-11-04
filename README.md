## 了解React-router-dom的用法

React可以使用react-router-dom来实现路由

```js
npm install react-router-dom --save
```

##### 实现路由的两种方式

- ##### hashRouter（一般用来兼容低级浏览器）

  - 通过URL#后面的路径标识符变化来触发浏览器的hashchange事件，通过
    location.hash来获取当前路径标识符，从而实现跳转
  - 不识别location.key和location.state
  - 使用hash跳转，url不美观

- ##### BrowserRouter（推荐使用）

  - 利用HTML5 history API来实现
  - history.go(n)
  - history.back()
  - history.forward()
  - history.pushState(data,title,path)
  - history.replaceState(data,title=null,path)
  - popstate事件：当浏览器活动的历史路径变化的时候，即当执行pushState或者replaceState时会触发popstate事件



###withRouter

- 路由组件拥有history、match、location等属性，但非路由组件需要withRouter包裹才能拥有

###switch
- 用来渲染与路径匹配的第一个子路由，只会渲染一个路由

  ```js
  <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Login}/> 
          <Route component={Home}/> {/*  路由下有子路又那么就不用path ,这是home页面,其下有很多子路由 */}
      </Switch>
  </BrowserRouter>
  ```

  

###Route

-  根据path来匹配对应组件
-  **exact**严格匹配
```angular2
<Route exact path='/detail' component={Detail} />
```

### 路由跳转，最终被浏览器渲染为a标签

- ### Link

  ```js
  import {Link} from 'react-router-dom';
  
  /**1、to:String*/
  <Link to='/detail' />
  
  /**2、to:Object*/
  <Link to={
  	pathname: '/home',     //要链接到的路径
    search: '?sort=time',  //查询参数
    hash: '#detail' ,      //URL中的hash
    state: {               //存储到location中的额外状态数据
      id: 3
    }
  }/>
  ```

  

- ### NavLink：特殊版本<Link>，可以为匹配元素添加样式属性

  ```js
  import {NavLink} from 'react-router-dom';
  
  <NavLink to='detail' activeClassName='selected' />
  ```

  

### 界面跳转传递数据方法

- #### url传递

  ```js
  <Link to='/detail/:2'/> ;
  
  /**在子组件中*/
  this.props.match.param获取参数
    
  ```

- #### 跳转函数传递

  - this.props.history.push()传递参数
  - This.props.location获取参数

  ```js
  /**在Home组件通过点击button跳转到Deatil组件
  * 在Detail组件中通过this.props.location获取参数
  */
  import React from 'react';
  
  class Home extends React.Component {
    constructor(props) {
      super(props);
      this.buttonClick = this.buttonClick.bind(this);
    }
    
    render() {
      return (
      	<button onClick={this.buttonClick}>通过函数跳转跳转</button>
      )
    }
    
    //通过函数跳转
    buttonClick() {
      this.props.history.push({
        pathname: '/detail',
        state: {
          id: 3
        },
        //自定义参数
        queryname:{
          msg: '来自首页的问候！by query'
        }
      })
    }
  }
  ```

  - #### 浏览器缓存或者状态管理器