import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  itemId:any;
  itemDetails:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private itemServiceService:ItemServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
        this.itemId=data.id;        
    })

    this.itemServiceService.itemData(this.itemId).subscribe(itemdata => {
        this.itemDetails=itemdata;
          
    })   


  }

}
