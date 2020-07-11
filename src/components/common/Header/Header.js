
import * as React from 'react';

import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Header.css';
import logo from '../../../assets/images/logo192.png';

const { Header } = Layout;

function GenericHeader (props) {

	const handleUserIconClick = () => {
		props.history.push('/Profile');
	}

	return (
		<Header className="header" style={{ height: '100px', position: 'fixed', zIndex: 1, width: '100%' }} >
			<img className="logo" src={logo} alt="logo" />
			<Menu theme="dark" mode="horizontal" >
				<Menu.Item key="1" icon={ <UserOutlined style={{ fontSize: 30 }}/> } style={{ float: 'right', top: '5px' }} onClick={handleUserIconClick} >
				</Menu.Item>
				<Menu.Item key="2" style={{ float: 'right', top: '5px' }}>nav 2</Menu.Item>
			</Menu>
		</Header>
	);
}

export default GenericHeader;