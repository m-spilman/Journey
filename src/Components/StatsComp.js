import React from 'react';
const Stats = (props) => {
   
return (
    <div className = 'stats'>
    <div>Food: {props.food} Days</div>
    <div>Water: {props.water} Days</div>
    <div>Money: {props.money} Coins</div>
    <div>Health: {props.health} %</div>
  </div>
    )
  }


export default Stats