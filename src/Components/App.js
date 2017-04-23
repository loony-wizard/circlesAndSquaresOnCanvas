import React from 'react';
import { connect } from 'react-redux';

import Info from './Info';
import Field from './Field';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Info />
				<Field />
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { store: state };
};

export default connect(mapStateToProps)(App);