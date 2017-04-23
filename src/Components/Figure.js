import React from 'react';

class Figure extends React.Component {
	render() {
		const { styles, onClickHandler, figureType, id } = this.props;
		const className = `${figureType} no-select`;
		return (
			<div 
				onClick={() => onClickHandler(figureType, id)}
				className={figureType}
				style={styles}
			>
			</div>
		);
	}
}

export default Figure;