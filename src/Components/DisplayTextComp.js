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
// const noAsk = () =>{
//     water = true
//     justWaters()

// }


const DisplayText = (props) => {

if(props.position >= 31 && props.position <=37) foodSpot = true
if(!(props.position >=31 && props.position <=37)) foodSpot = false
if(props.position >= 38 && props.position <=45) waterSpot = true
if(!(props.position >=38 && props.position <=45)) waterSpot = false
if(props.position >=79 && props.position <=91) townSpot = true
if(!(props.position >=79 && props.position <=91)) townSpot = false


if (!(counter === 0) && foodSpot === false && waterSpot === false && townSpot === false)
    {
        event = generateEvents()
    }
counter ++
if(foodSpot)
{
    return(
    <div>
    <div>Check out that forest!, now might be a good time to see if I can find some food</div>
    <button className = 'butn' onClick = {props.collectFood}>Search for Food</button>
    </div>
    )
}
if(waterSpot)
{
    return(
    <div>
    <div>Woah big river! I should probably fill-up my cantine</div>
    <button className = 'butn' onClick = {props.collectWater}>Fill up cantine</button>
    </div>
    )
}
if(townSpot && spoke ===false)
{
    return(
    <div>
    <div>A town! Didnt expect to find civilization out here in the desert. Maybe I should check it out</div>
    <button className = 'butn' onClick = {props.explore}>Explore Town</button>
    <button className = 'butn' onClick = {props.ugh}>Ugh people</button>
    </div>
    )
}
if(explore && (!(supplies || stranger)))
{
    return (
        <div>
            <div>  
                 Howdy weary traveler, welcome to our little oasis. We don't get too many people out this far.. is there anything I can
                 help you with during your stay?
            </div> 
      <button type='button' onClick={props.supplies} className = 'butn'>Is there somewhere I can get supplies</button>
      <button type='button' onClick={props.stranger} className = 'butn'>Stranger Danger! - get way from me peasant</button>
      </div>

    )
}

if(ugh)
{
    ugh = false
    return (
            <div> 
                ..ok then. Good luck out there
            </div> 
    )
}
if(supplies && (!(buyFood || water)))
{
    ask = true
    return (
        <div>
            <div> 
                Sure is. you Can buy all the food you can afford from me. As for water, you can have your fill over at the lakes.
            </div> 
                 <button type='button' onClick={props.buy} className = 'butn'>Buy Everything!!</button>
                 <button type='button' onClick={props.justWater} className = 'butn'>I'll grab some water, but im saving my coins for Vegas</button>
        </div>
    )
}
if(ask)
{
    ask = false
    return (
        <div>
            <div> 
                Feesl good to be stocked up on supplies. I wonder if I should ask about that dangerous looking path I saw back there...
            </div> 
                 <button type='button' onClick={props.askAboutPath} className = 'butn'>Ask</button>
                 <button type='button' className = 'butn'>Meh, I have no time to go backwards anyways</button>
        </div>
    )
}

if(path)
{
    path = false
    return (
        <div>
            <div> 
                The one back there aways? ... Yeah, lot of mystery and superstition sourding that. It dead ends in the desert. Rumor is it once lead
                to some sort of portal. Many have wonderded the desert looking for it.. none have returned.
            </div> 
                 <button type='button' onClick={props.takePath} className = 'butn'>I think I'lll take my chances</button>
                 <button type='button' onClick={props.dontTakePath}className = 'butn'>Idiots..</button>
        </div>
    )
}

if(stranger)
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
      <div>
         {event}
      </div>
    )
  }


export {DisplayText, ughPeople, exploreTown, strangerDanger, getSupplies, buy, justWater,askAboutPath}


