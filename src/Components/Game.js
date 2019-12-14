import React, { Component } from "react"
import {roll} from '../roll'
import Roll from './RollComp'
import {Player, changeCharDireciton, changeCourse} from './PlayerComp'
import Map from './MapComp'
import Stats from './StatsComp'
import {DisplayText, ughPeople, exploreTown, getSupplies, strangerDanger, buy, justWater, askAboutPath} from './DisplayTextComp'
import {setFood, setWater} from '../stats'


class Game extends Component {
    state ={
        diceRoll: 0,
        diceImg: 'dice/sailor-skeleton.png',
        playerPosition: 0
       
        
    }
collectFood = () => {
    setFood()
    this.forceUpdate()
}
collectWater = () =>{
    setWater()
    this.forceUpdate()
} 
ughPeople = () => {
    ughPeople()
    this.forceUpdate()
}  
exploreTown = () => {
    exploreTown()
    this.forceUpdate()
}
getSupplies = ()=>
{
    getSupplies()
    this.forceUpdate()
} 
strangerDanger = ()=>
{
    strangerDanger()
    this.forceUpdate()
}
buy = ()=>{
    buy()
    this.forceUpdate()
}
justWater = ()=>{
    justWater()
    this.forceUpdate()
}

askAboutPath = () =>
{
    askAboutPath()
    this.forceUpdate()
}
takePath = () => {
    console.log('bob')
    changeCourse()
    changeCharDireciton()
    this.forceUpdate()

}
dontTakePath = () => {
    this.forceUpdate()
    
}
Roll = () => {
    
    let {diceImage, numberRolled, sumOfRolls} = roll()
    this.setState({
        diceRoll: numberRolled,
        diceImg : diceImage,
        playerPosition: sumOfRolls
    }) 
}
    render(){
        return (
            <div className = 'gameContainer'>
            <div className = 'topContainer'>
            <div className = 'statsContainer'>
             <Stats />  
            </div>
            <div className = 'events'>
            <DisplayText position = {this.state.playerPosition} collectFood = {this.collectFood.bind(this)}
                          collectWater = {this.collectWater.bind(this)} explore = {this.exploreTown.bind(this)} 
                          ugh = {this.ughPeople.bind(this)} supplies = {this.getSupplies.bind(this)}  
                          stranger = {this.strangerDanger.bind(this)} buy = {this.buy.bind(this)}
                          justWater = {this.justWater.bind(this)} askAboutPath = {this.askAboutPath.bind(this)}
                          takePath = {this.takePath.bind(this)} dontTakePath = {this.dontTakePath.bind(this)}/>
            </div>  
            <Roll rollDice ={this.Roll.bind(this)} dice ={this.state.diceImg}/>
            </div>
            <div className = 'mapContainer'>
            <Player location = {this.state.playerPosition}/>
            <Map position = {this.state.playerPosition} />
            </div>
            </div>
        ) 
}
}
export default Game

