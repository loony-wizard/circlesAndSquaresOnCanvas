import React from 'react';

class FigureInfo extends React.Component {
	render() {
		let data = [];
		const { info, figureClassName } = this.props;
		const { color } = info;
		//delete info.color
		
		for (let key in info) {
			if (info.hasOwnProperty(key)) {
				data.push(
					<span key={key} >{key}: {info[key]}</span>
				);
			}
		}

		const figureStyles = {
			background: color
		};

		return (
			<div className="figure-info">
				<div className={figureClassName} style={figureStyles} ></div>
				<div className="data">{data}</div>
			</div>
		);
	}
}

export default FigureInfo;