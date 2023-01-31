import { PlantsController } from "./Controllers/PlantsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  plantsController = new PlantsController()
}

window["app"] = new App();
