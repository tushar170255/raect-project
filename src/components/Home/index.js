import React from 'react';
import {Menu,Layout,Breadcrumb,Row,Col, Button}from 'antd';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './index.css';
import Cardfor from './card';
const GenericHeader = React.lazy(() => import('../common/Header/Header'));

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
		const { Content, Footer } = Layout;
		return (
			<Layout className="layout" >
				<GenericHeader { ...this.props }/>
				<Content style={{ padding: '0 50px', height: '90vh' }}>
					<div className="site-layout-content" style={{ height: '90vh', justifyContent: 'center' }} >
						<Row gutter={24} style={{ justify: 'space-around' }}>
							<Col span={8} style={{align:'center'}}>
								<button onClick={this.userClick} style={{ border: 'none', outline: 'none' }}>
									<Cardfor URL="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" tittle="STUDENT" desc="student poratl:learning sould never stop"/>
								</button>
							</Col>
							<Col span={8} style={{align:'center'}}>
								<Cardfor URL="https://tse1.mm.bing.net/th?id=OIP.bhumhlr95eJ2WTifztHKSgHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100" tittle="TEACHER" desc="teacher comes before god!!"/>
							</Col>
							<Col span={8} style={{align:'center'}}>	
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