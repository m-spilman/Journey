import React from 'react';
import {generateEvents, buyAll, justWaters, noDeduct} from '../stats'


let counter = 0
let event = ''
let foodSpot = false
let waterSpot = false
let townSpot = false
let explore = false
let ugh = false
let spoke = false
let supplies = false
let stranger = false
let buyFood = false
let water = false
let ask = false
let path = false
let gotFood = false
let gotWater = false
let dontGoOnPath = false

const resetForMapLoop = () =>{
    spoke = false
    explore = false
    supplies = false
    stranger = false
    buyFood = false
    water = false
    ugh = false
    ask = false
    gotFood = false
    gotWater = false

}
const searchedFood = () =>{
    gotFood = true
}
const collectedWater = ()=>{
    gotWater = true;
}

const ughPeople = () =>
{
  ugh = true
  spoke = true
  noDeduct()
}

const exploreTown =() =>{
    explore = true
    spoke = true
    noDeduct()

}

const getSupplies = () =>{
    supplies = true
    noDeduct()

}
const strangerDanger = () =>{
    stranger = true
    noDeduct()

}
const buy = () =>{
    buyFood = true
    buyAll()
}
const justWater = () =>{
    water = true
    justWaters()

}
const askAboutPath = () =>{
    path = true

}

const dontTakePath = () =>{
    dontGoOnPath = true

}


const DisplayText = (props) => {

if(props.position >= 31 && props.position <=37 && props.map === 'map1') foodSpot = true
if(!(props.position >=31 && props.position <=37)) foodSpot = false
if(props.position >= 38 && props.position <=45 && props.map === 'map1') waterSpot = true
if(!(props.position >=38 && props.position <=45)) waterSpot = false
if(props.position >=79 && props.position <=91) townSpot = true
if(!(props.position >=79 && props.position <=91)) townSpot = false


if (!(counter === 0) && foodSpot === false && waterSpot === false && townSpot === false)
    {
        event = generateEvents()
    }
counter ++
if(foodSpot && gotFood === false)
{
    return(
    <div>
    <div className = 'events'>Check out that forest! Now might be a good time to see if I can find some food.</div>
    <button type='button' className = 'butn' onClick = {props.collectFood}>Search for Food</button>
    </div>
    )
}
if(waterSpot && gotWater === false)
{
    return(
    <div>
    <div className = 'events'>Woah big river! I should probably fill-up my cantine.</div>
    <button className = 'butn' onClick = {props.collectWater}>Fill up cantine</button>
    </div>
    )
}
if(townSpot && spoke ===false)
{
    return(
    <div>
    <div className = 'events'>A town! I Didnt expect to find civilization out here in the desert. Maybe I should check it out.</div>
    <button className = 'butn' onClick = {props.explore}>Explore Town</button>
    <button className = 'butn' onClick = {props.ugh}>Ugh people</button>
    </div>
    )
}
if(explore && (!(supplies || stranger)))
{
    return (
        <div>
            <div className = 'events'>  
                 Howdy weary traveler, welcome to our little oasis. We don't get too many people out this far.. is there anything I can
                 help you with during your stay?
            </div> 
      <button type='button' onClick={props.supplies} className = 'butn'>Maybe somewhere to get supplies</button>
      <button type='button' onClick={props.stranger} className = 'butn'>Stranger Danger! - away peasant</button>
      </div>

    )
}

if(ugh)
{
    ugh = false
    return (
            <div className = 'events'> 
                ..ok then. Good luck out there.
            </div> 
    )
}
if(supplies && (!(buyFood || water)))
{
    ask = true
    return (
        <div>
            <div className = 'events'> 
                Sure. You can buy all the food you can afford from me, it's 5 coints for a days supply. As for water, you can have your fill over at the lakes.
            </div> 
                 <button type='button' onClick={props.buy} className = 'butn'>Buy Everything!!</button>
                 <button type='button' onClick={props.justWater} className = 'butn'>I'll grab some water, but im saving my coins for Vegas</button>
        </div>
    )
}
if(ask)
{
    ask = false
    dontGoOnPath = false
    return (
        <div>
            <div className = 'events'> 
                Feels good to be stocked up on supplies. I wonder if I should ask about that detour I saw back there...
            </div> 
                 <button type='button' onClick={props.askAboutPath} className = 'butn'>Ask</button>
                 <button type='button' onClick ={props.dontTakePath} className = 'butn'>Meh, I have no time to go backwards anyways</button>
        </div>
    )
}

if(path)
{
    path = false
    return (
        <div>
            <div className = 'events'> 
                The one back there aways? ... Yeah, rumor is it once lead to some sort of portal. But If you ask me, it's just an old forgotten path.
                It dead ends in the desert.  Many have gone looking for its end.. I don't know any that have returned.
            </div> 
                 <button type='button' onClick={props.takePath} className = 'butn'>I think I'lll take my chances</button>
                 <button type='button' onClick={props.dontTakePath}className = 'butn'>Idiots..</button>
        </div>
    )
}

if(stranger || dontGoOnPath)
{
    return <div></div> 
}

if(buyFood){
 return <div></div>
}
if(water){
    return <div></div>
   }

else return (
      <div className = 'events'>
         {event}
      </div>
    )
  }


export {DisplayText, ughPeople, exploreTown, strangerDanger, getSupplies, buy, justWater,askAboutPath, resetForMapLoop, searchedFood, collectedWater, dontTakePath}


