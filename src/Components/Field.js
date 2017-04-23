import React from 'react';
import { connect } from 'react-redux';

import Figure from './Figure';

import { randomInt } from '../random';

import {
	addCircle,
	addSquare,
	deleteCircle,
	deleteSquare
} from '../actions';

class Field extends React.Component {
	constructor(props) {
		super(props);
		this.onClickHandler = this.onClickHandler.bind(this);
		this.onFigureWasClicked = this.onFigureWasClicked.bind(this);
	}

	onClickHandler(event) {
		const { target } = event;
		if (target === this.element) {
			const rect = this.element.getBoundingClientRect();
			const px = Math.floor(event.clientX - rect.left);
			const py = Math.floor(event.clientY);
			const figure = randomInt(0, 1);
			const { dispatch } = this.props;
			if (figure === 0) {
				dispatch(addCircle(px, py));
			} else {
				dispatch(addSquare(px, py));
			}
		}
	}

	onFigureWasClicked(figureType, id) {
		const { dispatch } = this.props;
		if (figureType === 'circle') {
			dispatch(deleteCircle(id));
		} else {
			dispatch(deleteSquare(id));
		}
	}

	render() {
		const { store } = this.props;

		const circles = store.circles.map(circle => {
			const styles = {
				left: circle.px - circle.r,
				top: circle.py - circle.r,
				width: 2 * circle.r,
				height: 2 * circle.r,
				background: circle.color
			};
			return (<Figure
				styles={styles}
				figureType='circle'
				id={circle.id}
				key={circle.id.toString()}
				onClickHandler={this.onFigureWasClicked}
			/>)
		});

		const squares = store.squares.map(square => {
			const styles = {
				left: square.px - square.side / 2,
				top: square.py - square.side / 2,
				width: square.side,
				height: square.side,
				background: square.color
			};
			return (<Figure
				styles={styles}
				figureType='square'
				id={square.id}
				key={square.id.toString()}
				onClickHandler={this.onFigureWasClicked}
			/>);
		});

		return (
			<div 
				className="field"
				onClick={this.onClickHandler}
				ref={element => this.element = element}
			>
				{circles}{squares}
			</div>
		);
	}
}

function mapStateToProps (state) {
	return { store: state };
};

export default connect(mapStateToProps)(Field);