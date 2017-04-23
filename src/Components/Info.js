import React from 'react';
import { connect } from 'react-redux';

import FigureInfo from './FigureInfo';

class Info extends React.Component {
	render() {
		const { store } = this.props;
		const { circles, squares } = store;
		const circlesInfo = circles.map(circle =>
			<FigureInfo 
				info={circle}
				figureClassName="circle-small"
				key={circle.id.toString()} 
			/>
		);
		const squaresInfo = squares.map(square =>
			<FigureInfo 
				info={square}
				figureClassName="square-small"
				key={square.id.toString()} 
			/>
		);
		const circlesCount = circles.length;
		const squaresCount = squares.length;
		return (
			<div className="info">
				<h3>Circles: {circlesCount}</h3>
				{circlesInfo}
				<h3>Squares: {squaresCount}</h3>
				{squaresInfo}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { store: state };
};

export default connect(mapStateToProps)(Info);