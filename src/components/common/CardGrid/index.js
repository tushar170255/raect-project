
import * as React from 'react';

import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

const styles = {
	cardWrapper: {
			padding: '10px',
			margin: '10px',
			background: '#ececec'
	}
};

class CardGrid extends React.Component {

	getCardRow () {
		return (
			<div>
				
			</div>
		);
	}

	render () {
		const { numOfRows = 2 } = this.props;
		console.log(numOfRows);
		return (
			<div style={ styles.cardWrapper }>
				<Row gutter={16}>
					<Col span={6}>
						<Card title="Card title" bordered={false}>
							Card content
						</Card>
					</Col>
					<Col span={6}>
						<Card title="Card title" bordered={false}>
							Card content
						</Card>
					</Col>
					<Col span={6}>
						<Card title="Card title" bordered={false}>
							Card content
						</Card>
					</Col>
					<Col span={6}>
						<Card title="Card title" bordered={false}>
							Card content
						</Card>
					</Col>
				</Row>
			</div>
		);
	};
}

export default CardGrid;