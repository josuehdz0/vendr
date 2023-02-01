import { appState } from "../AppState.js";
import { plantsService } from "../Services/PlantsService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlants(){
  let plants = appState.plants
  let template = ''
  plants.forEach(plant=> template+= plant.ListTemplate)
  setHTML('plants', template)
}

function _drawMoney(){
  let money = appState.money
  let template = ''
  template += `
  $${appState.money}
  `

  setHTML('money',template)
}


export class PlantsController{
  
  constructor(){
    _drawPlants()
    _drawMoney()
    appState.on('money',_drawMoney)
  }

  addMoney(){
    plantsService.addMoney()
  }

  buyPlant(plant){
   plantsService.buyPlant(plant)
  }




}