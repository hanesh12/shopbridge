import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { AdditemComponent } from './additem/additem.component';
import { RemoveitemComponent } from './removeitem/removeitem.component';
import { ViewItemByCategoryComponent } from './view-item-by-category/view-item-by-category.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'listItem',component:ListItemsComponent },
  { path: 'addItem',component:AdditemComponent },
  { path: 'removeItem/:id',component:RemoveitemComponent },
  { path: 'viewItem/:id',component:ViewItemComponent },
  { path: 'category/:id',component:ViewItemByCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
