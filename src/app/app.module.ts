import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { LowerPipe } from './shared/lower.pipe';
import { ValidateAgePipe } from './shared/validate-age.pipe';
import { TopLayerComponent } from './ContentProjection/top-layer/top-layer.component';
import { BottomLayerComponent } from './ContentProjection/bottom-layer/bottom-layer.component';
import { FirstComponent } from './comp-communicate/first/first.component';
import { SecondComponent } from './comp-communicate/second/second.component';
import { ComponentInteractComponent } from './comp-communicate/component-interact/component-interact.component';
import { ParentComponent } from './comp-communicate/parent/parent.component';
import { ChildComponent } from './comp-communicate/child/child.component';
import { SampleComponent } from './CCommunicate/sample/sample.component';
import { VsrComponent } from './CCommunicate/vsr/vsr.component';
import { AddnewComponent } from './addnew/addnew.component';
import { ListingComponent } from './listing/listing.component';
// import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { SenderComponent } from './RXJSExamples/sender/sender.component';
import { Receiver1Component } from './RXJSExamples/receiver1/receiver1.component';
import { Receiver2Component } from './RXJSExamples/receiver2/receiver2.component';
// import { WebworkerComponent } from './WebWorker/webworker/webworker.component';
import { PrimeTestComponent } from './WebWorker/prime-test/prime-test.component';
import { ProductsComponent } from './Productpage/products/products.component';
import { RecipeComponent } from './RecipePage/recipe/recipe.component';
import { DataCheckerComponent } from './TwoWayDataBinding/data-checker/data-checker.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PipeExComponent, 
    LowerPipe,
    ValidateAgePipe,
    TopLayerComponent,
    BottomLayerComponent, 
    FirstComponent,
    SecondComponent,
    ComponentInteractComponent,
    ParentComponent,
    ChildComponent,
    SampleComponent,
    VsrComponent,
    AddnewComponent,
    ListingComponent,
    SenderComponent,
    Receiver1Component,
    Receiver2Component,
    PrimeTestComponent,
    ProductsComponent,
    RecipeComponent,
    // ObservableExComponent
    DataCheckerComponent,
    NotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
     AppRoutingModule,
     FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
