import React from 'react';

const GameOver = (props) => {

return(
<div className = 'endGameContainer'> 
    <img src = '../background/gameOver2.png' alt = 'gameOver' className = 'gameOver'></img>
    <button type='button' onClick = {props.restart} className = 'butn'>Try Again</button>

</div>
)
  }


export default GameOver