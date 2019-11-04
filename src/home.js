import React from 'react';
import Detail from "./detail";
import {Link, Route, Switch} from "react-router-dom";
import Page from "./page";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.jump = this.jump.bind(this);
    }

    render() {
        return (
            <div>
                <header className={'header'}>学习使用react-router-dom的常用API来实现路由</header>
                <div className={'left'}>
                    <div><Link to={'/detail'}>详情</Link></div>
                    <div><Link to={'/page'}>界面</Link></div>
                </div>
                <div className={'right'}>
                    <Switch>
                        <Route path={'/detail'} component={Detail}/>
                        <Route path={'/page'} component={Page}/>
                    </Switch>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.location)  //函数跳转
        console.log(this.props.match)
    }

    jump() {
        this.props.history.push({
            pathname: '/detail',
            search: '?type=sort',
            state: {
                id: 1
            }
        })
    }

}

export default Home;
