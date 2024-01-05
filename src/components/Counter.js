import React from 'react';


const Counter = (props) => {
	

	// incrementScore = () => {
	// 	this.setState((prevState) => ({
	// 		score: prevState.score + 1
	// 	}));
	// };n

	// decrementScore = () => {
	// 	this.setState((prevState) => ({
	// 		score: prevState.score - 1
	// 	}));
	// };

	// render() {
		let index = props.index;
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={ () => props.Schange(index,-1)}  >
					{' '}
					-{' '}
				</button>
				<span className="counter-score">{props.score}</span>
				<button className="counter-action increment" onClick={ () => props.Schange(index,1)} >
					{' '}
					+{' '}
				</button>
			</div>
		);
	// }
}

export default Counter;
