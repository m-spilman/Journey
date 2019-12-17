import React from 'react';

const GameStartScreen = (props) => {

return (
    <div>
        <h1 id = 'title'>JOURNEY</h1>
        <div className = 'startScreen'>
        <div className = 'wizardStart'>
        <img src = './player/WizardLarge.png' alt = 'wizard'></img>
        <button type = 'button' className = 'butn' onClick = {props.wizard}>Prospero</button>
        </div>
        <div className = 'steveStart'>
        <img src = './player/SteveLarge.png' alt = 'steve'></img>
        <button type = 'button' className = 'butn' onClick = {props.steve}>Steve!!</button>
        </div>
        <div className = 'rabbitStart'>
        <img src = './player/RabbitLarge.png' alt = 'rabbit'></img>
        <button type = 'button' className = 'butn' onClick = {props.rabbit}>Nibles</button>
        </div>
        </div>
          <div className = 'gameDescription'>Journey - An exploration into the unknown. Roll the dice to move you 
          character. Be on the lookout for bandits. Explore rolling fields to desolate deserts. Always get supplies when you can!
          </div>
          </div>
    )
  }


export default GameStartScreen