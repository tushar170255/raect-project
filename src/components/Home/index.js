import React from 'react';
import {Menu,Layout,Breadcrumb,Row,Col, Button}from 'antd';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './index.css';
import Cardfor from './card';

class HomePage extends React.Component {
 
  componentDidMount() {}
  constructor (props) {
    super(props);
    this.userClick=this.userClick.bind(this);
  }

  userClick () {
    console.log('user click called');
    this.props.history.push('/Dashboard');
  }

  render () {
    const { Header, Content, Footer } = Layout;
    return (
      <Layout className="layout" >
        <Header>
          <div className="logo" >
            <img   className="logos" src="https://tse3.mm.bing.net/th?id=OIP.oWHB_NBq2h4tBkgoR_MigAHaD5&pid=Api&P=0&w=292&h=154"/>
          </div>  
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About us</Menu.Item>
            <Menu.Item key="3">Mission Learning</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0', backgroundColor: 'white' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            
          </Breadcrumb>
          <div className="site-layout-content" >
          <Row gutter={16} style={{align:'centre'}}>
      <Col span={10} style={{align:'centre'}}>
        <button onClick={this.userClick}>
        <Cardfor URL="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" tittle="STUDENT" desc="student poratl:learning sould never stop"/>
        </button>
      </Col>
      <Col span={9} style={{align:'centre'}}>
        
      <Cardfor URL="https://tse1.mm.bing.net/th?id=OIP.bhumhlr95eJ2WTifztHKSgHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100" tittle="TEACHER" desc="teacher comes before god!!"/>
      </Col>
      <Col span={2} style={{align:'centre'}}>
        
      <Cardfor URL="https://tse4.mm.bing.net/th?id=OIP.1LNgm0WuChY8FNmxErF1FgHaE8&pid=Api&P=0&w=252&h=169" tittle="OTHER STAFF" desc="People that work work from behind is awesome "/>
      </Col>
    </Row>
            
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }
}

export default HomePage;