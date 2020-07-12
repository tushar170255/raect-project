import * as React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, QuestionCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import './Sider.css';

const {  Sider } = Layout;

class GenericSider extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			isCollapsed: true
		};
	}

	onCollapse = collapsed => {
		this.setState({ isCollapsed: collapsed });
	}

	render () {
		const { defaultSelectedKey = '1' } = this.props;
		return (
			<Sider collapsible collapsed = { this.state.isCollapsed } onCollapse = { this.onCollapse } width={200}
				style = {{
					overflow: 'auto',
					position: 'fixed',
					left: 0,
					height: '100vh',
					zIndex: 1,
					top: '100px',
				}}
			>
				<Menu
					theme = 'dark'
					mode="inline"
					defaultSelectedKeys={[defaultSelectedKey]}
					style={{ height: '100%', borderRight: 0, alignContent: 'center' }}
				>
					<Menu.Item key="1" icon={ <HomeOutlined style={{ fontSize: 23 }}/> }>Overview</Menu.Item>
					<Menu.Item key="2" icon={ <QuestionCircleOutlined style={{ fontSize: 23 }}/> }>Question Bank</Menu.Item>
					<Menu.Item key="3" icon={ <ClockCircleOutlined style={{ fontSize: 23 }}/> }>Exams</Menu.Item>
				</Menu>
			</Sider>
		);
	};
}

export default GenericSider;