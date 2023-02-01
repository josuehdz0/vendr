import { appState } from "../AppState.js";
import { loadState } from "../Utils/Store.js";

class PlantsService {

  addMoney(){
    appState.money += 1.50
    console.log(appState.money);
  }

  buyPlant(name){
    // NOTE this isnt working  i think becaise of how that array has been made. plant.price isnt being defined here
    let currentPlant = appState.plants.find(p=> p.name == name) 
    // appState.money-=currentPlant.price
    if (appState.money>=currentPlant.price) {
      appState.money -= currentPlant.price;
    }
    else{
      console.log(`You broke, you need $${currentPlant.price-appState.money} more to buy ${currentPlant.name}`);
    }
  }

 
  

  
}




export const plantsService = new PlantsService()