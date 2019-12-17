import { resetForMapLoop } from "./Components/DisplayTextComp"

let sumOfRolls =0
let resetSumOfRollsAndDialogue = () =>
{
    sumOfRolls = 0
    resetForMapLoop()
}
let roll =() => {
    let numberRolled = (Math.floor(Math.random()*6)+1)

    const f0 = 'dice/sailor-skeleton.png'
    const f1 = 'dice/1.png'
    const f2 = 'dice/2.png'
    const f3 = 'dice/3.png'
    const f4 = 'dice/4.png'
    const f5 = 'dice/5.png'
    const f6 = 'dice/6.png'

    const diceFace = [f0,f1,f2,f3,f4,f5,f6]
    let diceImage = diceFace[numberRolled]
    sumOfRolls = numberRolled + sumOfRolls
    const returnedItems = 
    {
        diceImage: diceImage,
        numberRolled: numberRolled,
        sumOfRolls: sumOfRolls

    }
    return returnedItems
        
}
export {roll, resetSumOfRollsAndDialogue}

