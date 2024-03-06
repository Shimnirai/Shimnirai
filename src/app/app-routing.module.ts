import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { CustomerComponent } from './customer/customer.component';
import { TopLayerComponent } from './ContentProjection/top-layer/top-layer.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';
import { ParentComponent } from './comp-communicate/parent/parent.component';
import { SampleComponent } from './CCommunicate/sample/sample.component';
import { RouterModule, Routes } from '@angular/router';
import { AddnewComponent } from './addnew/addnew.component';
import { ListingComponent } from './listing/listing.component';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { SenderComponent } from './RXJSExamples/sender/sender.component';
import { PrimeTestComponent } from './WebWorker/prime-test/prime-test.component';
import { ProductsComponent } from './Productpage/products/products.component';
import { DataCheckerComponent } from './TwoWayDataBinding/data-checker/data-checker.component';
import { RecipeComponent } from './RecipePage/recipe/recipe.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Pipes', component: PipeExComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'ContentProjection', component: TopLayerComponent },
    { path: 'ComponentCommunication', component: ComponentInteractComponent },
    { path: 'ParentToChild', component: ParentComponent},
    { path: 'ParentToChild1', component: SampleComponent },
    { path: 'Edit/:id', component: AddnewComponent },
    { path: 'CustomerList', component: ListingComponent },
    { path: 'Observables', component: SenderComponent },
    { path: 'WebWorker', component: PrimeTestComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'TwoWayDataBinding', component: DataCheckerComponent },
    { path: 'Recipe', component: RecipeComponent },



    
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
