import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { CustomerComponent } from './customer/customer.component';
import { TopLayerComponent } from './ContentProjection/top-layer/top-layer.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';
import { ParentComponent } from './comp-communicate/parent/parent.component';
import { SampleComponent } from './CCommunicate/sample/sample.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Pipes', component: PipeExComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'ContentProjection', component: TopLayerComponent },
    { path: 'ComponentCommunication', component: ComponentInteractComponent },
    { path: 'ParentToChild', component: ParentComponent},
    { path: 'ParentToChild1', component: SampleComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
