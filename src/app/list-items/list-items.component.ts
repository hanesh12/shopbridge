import { Component, OnInit } from '@angular/core'; 

import { ItemServiceService } from '../item-service.service';



@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  getedata:any;
  constructor(private ItemServiceService:ItemServiceService) { }

  ngOnInit(): void {

    this.ItemServiceService.showItems().subscribe(data=>{

      this.getedata=data;
    })
  }


}
