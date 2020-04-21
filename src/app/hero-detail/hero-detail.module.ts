import { NgModule, ModuleWithProviders, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "../hero.service";
import { empty } from "rxjs";


@Component({
  selector: 'app-hero-detai-sub',
  template: `
    <p> TEST </p>
  `
})
export class HeroDetailSubStubComponent {

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'detail/:id', 
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [HeroDetailComponent],
  exports: [RouterModule]
})
export class HeroDetailModule {
  /*
    Setup the basic testing module. You have unlimited possibilities ;)
      - Stub ActivatedRouteStub
      - Stub the Router
      - Spy the Router
      - ...
  */
  static forTest(): ModuleWithProviders {
    return {
      ngModule: HeroDetailModule,
      providers: [ 
        // Let the magic happen here :)
      ]
    }
  }
}