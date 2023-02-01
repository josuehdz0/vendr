export class Plant{


  constructor(data){
    this.name = data.name
    this.price = data.price
    this.imgURL = data.imgURL 
  }





  get ListTemplate(){
    return`
            <div class="col-md-3 col-6 p-3">
              <div class="card">
                <img
                  src="${this.imgURL}"
                  alt="">
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-7">
                      <h6 class="">${this.name}</h6>
                      <h6>$${this.price}</h6>
                    </div>
                    <div class="col-5 d-flex align-items-center justify-content-center">
                      <button class="text-center btn btn-primary"
                      onclick="app.plantsController.buyPlant('plant')">
                      
                      Buy
                      
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
    `
  }


}
