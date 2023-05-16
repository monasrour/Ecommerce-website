import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProctsListComponent } from './procts-list/procts-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: ProctsListComponent
  },{
    path: "product-detail/:id",
    component:ProductDetailComponent
  },
  {
    path:"login",
    component: LoginComponent
  },{

  path:"register",
  component: RegisterComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
