import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Loader from '../common/Loader/Loader';
import GenericHeader from '../common/Header/Header';
import GenericSider from '../common/Sider/Sider';
import CardGrid from '../common/CardGrid/index';
import './index.css';

const { Content, Footer } = Layout;

const sleep = (milliseconds) => {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

const styles = {
	layoutWrapper: {
		'-ms-flex': 'auto',
		flex: 'auto',
		'min-height': 0,
	}
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
			<Layout style = {{ height: '-webkit-fill-available', ...styles.layoutWrapper }}>
				<GenericHeader { ...this.props }/>
				<Layout>
					<GenericSider { ...this.props } defaultSelectedKey = {'1'}/>
					<Layout style={{ padding: '150px 0px 0px 50px', ...styles.layoutWrapper, backgroundColor: '#fff' }}>
						<Content
							className="site-layout-background"
							style={{
								padding: '0px 0px 0px 10px',
								margin: '0px 0px 0px 50px',
								height: '90vh',
								zIndex: 0
							}}
						>
							<CardGrid numOfRows={20}/>
						</Content>
						<Footer style= {{ textAlign: 'center' }} > this is the footer </Footer> 
					</Layout>
				</Layout>
			</Layout>
		);
	}
}

export default Dashboard;