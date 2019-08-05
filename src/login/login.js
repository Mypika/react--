import React, { Component } from 'react';
import '../App.css'
import { Input,Card,Button } from 'antd';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:'',
            pass:'',
            iconLoading:false,
        }
    }
    usersChange=e=>this.setState({ users:e.target.value })
    passwordChange=e=>this.setState({ pass:e.target.value })
    enterIconLoading=()=>{
        this.setState({
            iconLoading:true
        })
        sessionStorage.setItem('username',this.state.users)
        this.props.history.push('/home')
    }
    render() { 
        return (
            <div className="login">
                <Card className="login-card" style={{ width: 300 }}>
                    <Input className="login-input" placeholder="username" value={this.state.users} allowClear onChange={this.usersChange} />
                    <Input.Password className="login-input" placeholder="password" value={this.state.pass} allowClear onChange={this.passwordChange} />
                    <Button type="primary" icon="play-circle"
                    loading={this.state.iconLoading} onClick={this.enterIconLoading} style={{marginTop:70}} >
                    LOGIN </Button>
                </Card>
            </div>
         );
    }
}
 
export default Login;