import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  catdata:any;
  constructor(private ItemServiceService:ItemServiceService) { }


  ngOnInit(): void {

    this.ItemServiceService.showCategory().subscribe(data=>{

      this.catdata=data;
    })
  }

}
