import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemLista } from './shopping-list/item-lista';

@Injectable()
export class ShoppingListService {

  public listItems: Array<ItemLista>;
  
  constructor(private httpClient: HttpClient) {
  }

  public findAll(): Observable<Object> {
    return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
  }

  public addItem(item: ItemLista): Observable<Object> {
    return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
  }

  public removeItem(item: ItemLista): Observable<Object> {
    return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.id}.json`);
  }
  public edit(id: string, item: Object): Observable<Object> {
    return this.httpClient.patch(`${environment.firebase.databaseURL}/items/${id}.json`, item);
  }
 }
