import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/services/auth.guard";
import { HomeComponent } from "./home.component";
import { NoResultsComponent } from "./no-results.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: HomeComponent },
            { path: 'no-results', component: NoResultsComponent, canActivate: [AuthGuard] },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule{}