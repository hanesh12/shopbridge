import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdditemComponent } from './additem/additem.component';
import { RemoveitemComponent } from './removeitem/removeitem.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { ViewItemByCategoryComponent } from './view-item-by-category/view-item-by-category.component';
import { FormsModule ,NgForm,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
//import { ListItemsComponent } from './list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdditemComponent,
    RemoveitemComponent,
    ViewItemComponent,
    ViewItemByCategoryComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
