import { appState } from "../AppState.js";

class PlantsService {

  addMoney(){
    appState.money += 1.50
    console.log(appState.money);
  }



}

export const plantsService = new PlantsService()