import { appState } from "../AppState.js";
import { loadState } from "../Utils/Store.js";

class PlantsService {

  addMoney(){
    appState.money += 1.50
    console.log(appState.money);
  }

  buyPlant(plant){
    // NOTE this isnt working  i think becaise of how that array has been made. plant.price isnt being defined here
    let plantPrice = plant.price;
    if (appState.money>=plantPrice) {
      appState.money -= plantPrice;
    }
    else{
      console.log(`You broke, you need $${plantPrice-appState.money} more to buy ${plant.name}`);
    }
  }

 
  

  
}




export const plantsService = new PlantsService()