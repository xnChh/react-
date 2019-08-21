import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./routes/home/Home"
import Detail from "./routes/home/Detail"
import Layout from "./routes/Layout/Layout"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Switch 表示多个相同的路由只匹配一个，Redirect重定向，browserRouter,每次改变路由时，会向服务器发送请求，因为服务器未配置对应的路径指向对应的文件*/}
            <Route exact path='/' component={Home} />
            <Route path='/detail' component={Detail} />
            <Route path='/layout' component={Layout} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
