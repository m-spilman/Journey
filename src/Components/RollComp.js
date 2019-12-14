import React from 'react';
const Roll = (props) => {
return (
      <div>
          <button type='button' onClick = {props.rollDice} className = 'butn'>Roll them Dice</button>
          <img src = {props.dice} alt ='dice' className = 'dice'></img>
          
      </div>
    )
  }


export default Roll