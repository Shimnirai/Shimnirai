import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
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
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,HttpClientModule, AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
