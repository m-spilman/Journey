

const robbedFood = `Oh no! you've been robbed. The thieves took two days of food.`;
const robbedWater = `Oh no! you've been robbed. The thieves took two days of water.`;
const injured = `You sprained your ankle and need to rest . You make no forward pogress, but consume 1 days worth of supplies.`;
const robbedMoney = `Oh no! you've been robbed. The thieves took 15 Coins.`;
let robbedF = false
let robbedW = false
let robbedM = false
let ouch = false


let health = 100
let water = 20
let food = 20
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
    water = 21
    food = food+1
}
let setFood = () =>
{
    food = food+11
    water = water+1

}


let buyAll = () =>{
    let canBuy = money / 5
    money = money - (5 * canBuy)
    food = food + canBuy -2
    water = 20
    noDeduct()
}

let justWaters = () =>{
    water = 20
    food = food-2
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
  // console.log('above food ' + food)
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
      // console.log('food ' + food )

      return stats


}
export {calculateHealth, setFood, setWater, generateEvents, buyAll, justWaters, noDeduct }

