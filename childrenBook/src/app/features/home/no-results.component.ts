import { Component} from '@angular/core';

@Component({
  selector: 'cb-no-results',
  template: `
    <section class="vh-100" style="background-color: #eee;">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">No Results</p>
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">La tua ricerca non ha prodotto risultati!!</p>
                    <button class="btn btn-dark" routerLink="home">Back</button>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">

                    <img src="assets/img/draw2.png " class="img-fluid " alt="Sample image ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class NoResultsComponent {


}
