import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  [x: string]: any;

  constructor(private itemservice:ItemServiceService) { }

  ngOnInit(): void {
  }

  addNewItem(form){

    console.log(form);
    const newItem={
      id:Math.floor(Math.random() * 111),
      name:form.value.itemName,
      price:form.value.itemPrice,
      description:form.value.itemDescription,
      categoryId:form.value.itemCategory
    };
   
    this.itemservice.createItem(newItem).subscribe(data =>{

      form.reset();
      //console.log(data);//write redirect code 

    })
    
  }
}
