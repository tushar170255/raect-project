import React from 'react';

import {Menu,Layout}  from 'antd';
import {LaptopOutlined,NotificationOutlined,Sider,SubMenu,UserOutlined,logo} from 'antd/dist/antd.css';
import './index.css';


class Board extends React.Component{

    render(){
        const { Header, Content, Footer } = Layout;
            return(
                <Layout style = {{ height: '-webkit-fill-available' }}>
				<Header className="header" style={{ height: '100px', position: 'fixed', zIndex: 1, width: '100%' }} >
					<img className="logo" src={logo} alt="logo" />
					<Menu theme="dark" mode="horizontal" >
						<Menu.Item key="1" icon={ <UserOutlined style={{ fontSize: 30 }}/> } style={{ float: 'right', top: '20px' }} ></Menu.Item>
						<Menu.Item key="2" style={{ float: 'right', top: '20px' }}>nav 2</Menu.Item>
					</Menu>
				</Header>
				<Layout>
					<Sider collapsible collapsed = { this.state.isCollapsed } onCollapse = { this.onCollapse } width={200} className="site-layout-background"
						style = {{
							overflow: 'auto',
							position: 'fixed',
							left: 0,
							height: '100vh'
						}}
					>
						<Menu
							theme = 'dark'
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
								<Menu.Item key="1">option1</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
								<Menu.Item key="5">option5</Menu.Item>
							</SubMenu>
							<SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
								<Menu.Item key="9">option9</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={{ padding: '150px 24px 24px' }}>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							Lorem ipsum suck the dick
						</Content>
						<Footer style= {{ textAlign: 'center'}} > this is the footer </Footer> 
					</Layout>
				</Layout>
			</Layout>
            )


        }
    

}


export default Board;