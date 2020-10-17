import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceService } from '../item-service.service';

@Component({
  selector: 'app-view-item-by-category',
  templateUrl: './view-item-by-category.component.html',
  styleUrls: ['./view-item-by-category.component.css']
})
export class ViewItemByCategoryComponent implements OnInit {

  searchCategory:any;
  itemlist:any;
  constructor(private activatedRoute:ActivatedRoute,
              private ItemServiceServi:ItemServiceService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data =>{
     
      this.searchCategory=data.id;
       
      this.ItemServiceServi.serarchCategoryItem(this.searchCategory).subscribe(categorydata =>{
       
            this.itemlist=categorydata;
      })

    })

  }

}
