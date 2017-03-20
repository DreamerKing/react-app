import React, {Component} from 'react';
import {Input} from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label htmlFor="">{this.props.loginName}</label>
        <Input.Group>
          <Input
            type="text"
            placeholder="用户名"
            />
          <Input
            type="password"
            placeholder="请输入密码"
            />
        </Input.Group>
      </div>
    );
  }
}
export default Login;
