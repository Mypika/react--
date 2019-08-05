import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route} from 'react-router-dom'
import './Home.css'
// 路由配置组件
import Mrouter from '../component/routers/routers'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:'',
    }
  }
  componentWillMount(){
    let sessUser = sessionStorage.getItem('username')
    if(!sessUser){
      this.props.history.push('./login')
      return false
    }
    this.setState({
      users:sessUser
    })
  }
  routerPush=(etc)=>{
    this.props.history.push('/home'+etc.paths)
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
            {Mrouter.map((Item,index)=>{
              return Item.child?<SubMenu
              key={Item.id} title={<span> <Icon type="user"/>{Item.name}</span>}>
                {Item.children.map((Itemchi)=>{
                  return <Menu.Item style={{textAlign:'center'}} key={Itemchi.id} onClick={this.routerPush.bind(this,Itemchi)}>
                            <Icon type="user"/>{Itemchi.name}</Menu.Item>
                })}
              </SubMenu>:
              <Menu.Item style={{textAlign:'center'}} key={Item.id} onClick={this.routerPush.bind(this,Item)}><Icon type="user"/>{Item.name}</Menu.Item>
            })}
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
           {Mrouter.map((Item)=>{
              return Item.child?Item.children.map((Itemchi)=>{
                if(Itemchi.child){
                  return false 
                }else{
                return <Route key={Itemchi.id} exact path={'/home'+Itemchi.paths} component={Itemchi.commpoent}/>
                }
              }):
              <Route key={Item.id} exact path={'/home'+Item.paths} component={Item.commpoent}/>
           })}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )}}
export default Home;