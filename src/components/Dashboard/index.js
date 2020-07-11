import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Loader from '../common/Loader/Loader';
import GenericHeader from '../common/Header/Header';
import GenericSider from '../common/Sider/Sider';
import './index.css';

const { Content, Footer } = Layout;

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

class Dashboard extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			isLoading: true
		};
	}

	async componentDidMount () {
		// await sleep(2000);
		this.setState({
			isLoading: false,
		});
	};

	render() {
		const { isLoading } = this.state;
		if (isLoading) {
			return (
				<Loader />
			);
		}

		return (
			<Layout style = {{ height: '-webkit-fill-available' }}>
				<GenericHeader { ...this.props }/>
				<Layout>
					<GenericSider { ...this.props }/>
					<Layout style={{ padding: '150px 24px 24px 50px' }}>
						<Content
							className="site-layout-background"
							style={{
								padding: '24px 0px 0px 24px',
								margin: '0px 0px 0px 50px',
								height: '90vh'
							}}
						>
							Lorem ipsum suck the dick
						</Content>
						<Footer style= {{ textAlign: 'center' }} > this is the footer </Footer> 
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default Dashboard;