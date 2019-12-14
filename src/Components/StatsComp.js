import React from 'react';
import {calculateHealth} from '../stats'
const Stats = (props) => {
    let {health, food, water, money } = calculateHealth()
return (
    <div>
    <div>Food: {food} Days</div>
    <div>Water: {water} Days</div>
    <div>Money: {money} Coins</div>
    <div>Health: {health} %</div>
  </div>
    )
  }


export default Stats