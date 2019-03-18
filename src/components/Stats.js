import React from 'react';

const Stats = (props) => {


    // reduce performs  somthing on each element of the array 
    // takes an accumulator and the current item processed on the array 
    // here total is the accumulator 
    // we can initialize the total variables within the parameters of the reduce method 
    const TotalPoints = props.players.reduce((total, player)=>{
        return total + player.score;
    },0);
    
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{props.numPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{TotalPoints}</td>
                </tr>
            </tbody>
        </table>
    )

}
export default Stats