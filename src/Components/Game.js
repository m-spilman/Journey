import React, { Component } from "react"
import {roll, resetSumOfRollsAndDialogue} from '../roll'
import Roll from './RollComp'
import {Player, changeCourse} from './PlayerComp'
import Map from './MapComp'
import Stats from './StatsComp'
import {DisplayText, ughPeople, exploreTown, getSupplies, strangerDanger, buy, justWater, askAboutPath, searchedFood, collectedWater, dontTakePath} from './DisplayTextComp'
import {setFood, setWater, calculateHealth} from '../stats'
import GameStartScreen from './GameStartComp'
import GameOver from './GameOverComp'
import GameFinish from './GameFinishComp'



class Game extends Component {
    state ={
        diceImg: 'dice/sailor-skeleton.png',
        playerPosition: 0,
        gameStart: false,
        player: 'nooOne',
        health: 100,
        food: 20,
        water: 20,
        money: 80,
        path:  'path1',
        map: 'map1',
        numberRolled: 0,
        altPath: false


    }
restart =() =>
{
    window.location.reload(true);

}
health = () => {
    let {health, food, water, money } = calculateHealth()
    this.setState({
        health: health,
        food: food,
        water: water,
        money: money
    })

}   
chooseSteve = () =>{
    this.setState({
        gameStart: true,
        player: 'steve'
    })
} 
chooseWizard = () =>{
    this.setState({
        gameStart: true,
        player: 'wizard'
    })
}  
chooseRabbit = () =>{
    this.setState({
        gameStart: true,
        player: 'rabbit'
    })
}    
collectFood = () => {
    setFood()
    searchedFood()
    this.health()
    this.forceUpdate()
}
collectWater = () =>{
    setWater()
    collectedWater()
    this.health()
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
    this.health()
    this.forceUpdate()
}
justWater = ()=>{
    justWater()
    this.health()
    this.forceUpdate()
}

askAboutPath = () =>
{
    askAboutPath()
    this.forceUpdate()
}
dontAskAboutPath =() =>{
    this.forceUpdate()

}
takePath = () => {
    changeCourse()
    this.setState({
        path: 'path2',
        playerPosition: 0,
        altPath: true
    })
    resetSumOfRollsAndDialogue() 
    this.forceUpdate()

}
dontTakePath = () => {
    dontTakePath()
    this.forceUpdate()
    
}
checkMapStatus= () =>{
   
    if(this.state.map === 'map2' && this.state.playerPosition >=114 && (!(this.state.path==='path2')))
    {
        this.setState({
            playerPosition: (this.state.playerPosition - 114) , 
            map: 'map1',
        }, () => resetSumOfRollsAndDialogue())
    }
    if(this.state.playerPosition > 57 && this.state.map === 'map1'){
    this.setState({
        map:'map2'

    })
}

}
Roll = () => {

   
    
    let {diceImage, sumOfRolls, numberRolled} = roll()
    this.health()
    this.setState({
        diceImg : diceImage,
        playerPosition: sumOfRolls,
        numberRolled: numberRolled
    }, () => this.checkMapStatus()
    ) 
}


    render(){
        if(this.state.health <=0){
    return <GameOver restart = {this.restart.bind(this)} />
        }

    if(this.state.playerPosition >= 76 && this.state.altPath === true )
    {
        return <GameFinish />
    }
        if(this.state.gameStart === false)
        {
            return <GameStartScreen wizard = {this.chooseWizard.bind(this)} rabbit = {this.chooseRabbit.bind(this)} 
            steve = {this.chooseSteve.bind(this)}/>
        }

    return (
            <div className = 'gameContainer'>
            <div className = 'topContainer'>
            <div className = 'statsContainer'>
             <Stats health = {this.state.health} food = {this.state.food} water = {this.state.water}
                    money = {this.state.money} />  
            </div>
            <div className = 'textContent'>
            <DisplayText position = {this.state.playerPosition} collectFood = {this.collectFood.bind(this)}
                          collectWater = {this.collectWater.bind(this)} explore = {this.exploreTown.bind(this)} 
                          ugh = {this.ughPeople.bind(this)} supplies = {this.getSupplies.bind(this)}  
                          stranger = {this.strangerDanger.bind(this)} buy = {this.buy.bind(this)}
                          justWater = {this.justWater.bind(this)} askAboutPath = {this.askAboutPath.bind(this)}
                          dontAsk = {this.dontAskAboutPath.bind(this)}
                          takePath = {this.takePath.bind(this)} dontTakePath = {this.dontTakePath.bind(this)}
                          map ={this.state.map}/>
            </div>  
            <Roll rollDice ={this.Roll.bind(this)} dice ={this.state.diceImg}/>
            </div>
            <div className = 'mapContainer'>
            <Player location = {this.state.playerPosition} player = {this.state.player}/>
            <Map map ={this.state.map} />
            </div>
            </div>
            
        ) 
}
}
export default Game

