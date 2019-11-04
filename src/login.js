import React from 'react';
import {Button, Icon, Input} from "antd";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.login = this.login.bind(this);
    }

    render() {
        return (
            <div className={'login-container'}>
                <div className={'login-container-box'}>
                    <div>
                        <Input placeholder={'请输入用户名'}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
                    </div>
                    <div>
                        <Input.Password placeholder={'请输入密码'}/>
                    </div>
                    <div>
                        <Button type={"primary"} onClick={this.login}>函数跳转</Button>
                    </div>
                </div>
            </div>
        )
    }

    login() {
        this.props.history.push({
            pathname: '/home/3',
            state: {
                name: 'yy',
                password: '123456'
            }
        })
    }
}

export default Login;
