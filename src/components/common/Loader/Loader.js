import * as React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import './Loader.css';

class Loader extends React.Component {

	componentDidMount () {
		console.log('Loader component mount');
	};

  render() {

		return (
			<div className = 'loaderContainer' >
				<LoadingOutlined style = {{ color: '#09729c', fontSize: 60 }} />
			</div>
		);
	}
}
export default Loader;