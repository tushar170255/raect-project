import React from 'react';
import { Switch, Route } from 'react-router';

// import './App.css';
import Loader from './components/common/Loader/Loader';

const HomePage = React.lazy(() => import('./components/Home/index'));
const Dashboard = React.lazy(() => import('./components/Dashboard/index'));
const UserProfile = React.lazy(() => import('./components/User/index'));

class App extends React.Component {
 
	componentDidMount() {}

	render () {
		const { classes } = this.props;
		return (
			<div>
				<React.Suspense fallback = { < Loader /> } >
					<Switch>
						<Route exact path = '/'
							component = { (props) => < HomePage { ...props } /> } />
						<Route exact path = '/Dashboard'
						component = { (props) => < Dashboard { ...props } /> } />
						<Route exact path = '/Profile'
						component = { (props) => < UserProfile { ...props } /> } />
					</Switch>
				</React.Suspense>
			</div>
		);
	}

}

export default App;