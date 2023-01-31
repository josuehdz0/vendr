import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlants(){
  let plants = appState.plants
  let template = ''
  plants.forEach(plant=> template+= plant.ListTemplate)
  setHTML('plants', template)
}


export class PlantsController{
  
  constructor(){
    _drawPlants()
  }

}