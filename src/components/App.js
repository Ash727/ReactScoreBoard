import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

// const Player = (props) => {
// 	return (
// 		<div className="player">
// 			<span className="player-name">
// 				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>
// 					✖
// 				</button>
// 				{props.name}
// 			</span>

// 			<Counter />
// 		</div>
// 	);
// };

class App extends React.Component {
	state = {
		total : 0,
		players: [
			{
				name: 'Guil',
				score: 5,
				id: 1
			},
			{
				name: 'Treasure',
				score: 10,
				id: 2
			},
			{
				name: 'Ashley',
				score: 20,
				id: 3
			},
			{
				name: 'James',
				score:30,
				id: 4
			}
		]
	};

	

	handleScoreChange = ( index, delta) => {
		console.log(delta);
		console.log("index:"+index+"delta:"+delta );
		this.setState((prevState)=> {
			return {
			//updateing the scrore state  of the score state at the given index 
			score: prevState.players[index].score+= delta
			};
		})
	};

	handleRemovePlayer = (id) => {
		this.setState((prevState) => {
			return {
				players: prevState.players.filter((p) => p.id !== id)
			};
		});
	};

	// handleTotalScore = () => {
	// 	let total = 0;
	// 	prevState.state.players.forEach(e=>{
	// 		total+=e.score;
	// 	})
	// this.setState((prevState)=>{
	// 	return {
	// 		total: total = prevState.players.array.forEach(element => {
	// 			total +=element.score
	// 		})
			
	// 	};
	// })
	
	// }

	render() {
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" players= {this.state.players} totalScore = {this.handleTotalScore} totalPlayers={this.state.players.length} />

				{/* Players list */}
				{this.state.players.map((player,index) => (
					<Player
						name={player.name}
						score= {player.score}
						id={player.id}
						key={player.id.toString()}
						index = {index}
						ScoreChange = {this.handleScoreChange}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
				<AddPlayerForm />
			</div>
			
		);
	}
}

export default App;
