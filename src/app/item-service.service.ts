import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private httpClient :HttpClient) { }

  //createProduct(productBody):Observable<Product>{
    //const  productUrl= 'http://localhost:3000/products';

   // return this.httpClient.post<Product>(productUrl,productBody);// return an abservable
 // }
 showItems()
 {
  const  itemUrl= 'http://localhost:3000/Items';
  return this.httpClient.get(itemUrl);
 }

 showCategory()
 {
  const  categoryUrl= 'http://localhost:3000/Category';
  return this.httpClient.get(categoryUrl);
 }

  serarchCategoryItem(categoryId){
  const itemUrl='http://localhost:3000/Items?categoryId='+categoryId;
  return this.httpClient.get(itemUrl);
  }

  itemData(itemId){
  const itemUrl='http://localhost:3000/Items?id='+itemId;
  return this.httpClient.get(itemUrl);
  }

    createItem(itemBody){
    const itemUrl= 'http://localhost:3000/Items';

    return this.httpClient.post(itemUrl,itemBody);// return an abservable
  }

  deleteItem(itemId){
    const itemUrl='http://localhost:3000/Items/'+itemId;
    return this.httpClient.delete(itemUrl);
  }

}
