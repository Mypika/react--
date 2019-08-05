import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route} from 'react-router-dom'
import './Home.css'
//子页面
import Page1 from '../HomePage/page1';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:'',
      exart:Page1
    }
  }
  componentWillMount(){
    // let sessUser = sessionStorage.getItem('user')
    // if(!sessUser){
    //   this.props.history.push('./login')
    //   return false
    // }
    // this.setState({
    //   users:sessUser
    // })
  }
  Gook1=()=>{
    console.log(1)
  //  this.props.history.push('./gbook1')
  }
  render() { 
    return (
      <Layout className="layout">
      <Header className="header">
          <span>欢迎你！{this.state.users}</span>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user"/>
                  本地书籍
                </span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  追书神器接口
                </span>}>
              <Menu.Item key="5" onClick={this.Gook1.bind(this)}>所有分类书籍</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Route path="/home" component={this.state.exart}/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )}}
export default Home;