import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProctsListComponent } from './procts-list/procts-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StockPipe } from './pipes/stock.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProctsListComponent,
    ProductCardComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    StockPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
