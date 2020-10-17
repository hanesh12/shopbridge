import { Component, OnInit } from '@angular/core';
import { ItemServiceService } from '../item-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removeitem',
  templateUrl: './removeitem.component.html',
  styleUrls: ['./removeitem.component.css']
})
export class RemoveitemComponent implements OnInit {
  [x: string]: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private itemServiceService:ItemServiceService,
    private router:Router ) { }

    itemId:any;
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.itemId=data.id;        
  })

  this.itemServiceService.deleteItem(this.itemId).subscribe(itemdata => {
      //this.itemDetails=itemdata;
      this.router.navigate(['/listItem']);
        
  }) 

  }

}
