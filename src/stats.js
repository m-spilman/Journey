

const robbedFood = `Oh no! you've been robbed. The theives took two days of food`;
const robbedWater = `Oh no! you've been robbed. The theives took two days of water`;
const injured = `You sprained you ankle and need to rest . You make no forward pogress, but consume 1 days worth of supplies`;
const robbedMoney = `Oh no! you've been robbed. The theives took 15 Coins`;
let robbedF = false
let robbedW = false
let robbedM = false
let ouch = false


let health = 100
let water = 17
let food = 17
let money = 80
let foodDecrease = 1
let waterDecrease = 1
let newHealth = 100
let moneyDecrease = 0


let noDeduct = () =>
{
    food = food+1
    water= water+1
}

let setWater = () =>
{
    water = 17
    food = food+1
}
let setFood = () =>
{
    food = 17
    water = water+1

}

let buyAll = () =>{

    let canBuy = money / 5
    money = money - (5 * canBuy)
    food = food + canBuy
    water = 17
    noDeduct()
}

let justWaters = () =>{
    water = 17
    noDeduct()
    
}

const generateEvents = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
  
    if (randomNumber >= 1 && randomNumber < 5) {
      ouch = true  
      return injured;
    }
  
    if (randomNumber >= 5 && randomNumber < 9) {
       robbedF= true  
      return robbedFood;
    }
  
    if (randomNumber >= 9 && randomNumber < 13) {
        robbedW = true  
      return robbedWater;
    }
  
    if (randomNumber >= 13 && randomNumber < 17) {
      robbedM = true
      return robbedMoney;
    } else return ""
  };

let calculateHealth = () =>

{
    if (robbedF) {
        foodDecrease = foodDecrease + 2
        
        robbedF= false
      }
      else if (robbedW) {
        waterDecrease = waterDecrease + 2
        robbedW= false
      }
      else if (ouch) {
        foodDecrease = foodDecrease + 1
        waterDecrease = waterDecrease + 1
        ouch = false
      }
      else if (robbedM) {
        moneyDecrease = moneyDecrease + 15
        robbedM = false
      }

      food = food - foodDecrease
      water = water - waterDecrease
      money = money - moneyDecrease

 

      foodDecrease = 1
      waterDecrease =1
      moneyDecrease  =0


      if(food < 0 && (!(water < 0)) )
      {
          newHealth = 100
          health = newHealth - (Math.abs(food) * 10)

      }
      if(water < 0 && (!(food < 0)))
      {
          newHealth = 100
          health = newHealth - (Math.abs(water) * 10)
      }
      if (water < 0 && food < 0)
      {
         newHealth = 100
         health = newHealth - ((Math.abs(water) * 10) + (Math.abs(food) * 10))
      }
      if(money < 0) money = 0  

      let stats = {
          health: health,
          food: food,
          water: water,
          money: money
      }

      return stats


}
export {calculateHealth, setFood, setWater, generateEvents, buyAll, justWaters, noDeduct }

