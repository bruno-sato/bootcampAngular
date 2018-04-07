import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemLista } from './shopping-list/item-lista';

@Injectable()
export class ShoppingListService {

  public listItemsFirebase: Observable<ItemLista[]>;
  private listItemsRef: AngularFireList<ItemLista>;
  
  constructor(private dbFirebase: AngularFireDatabase) {
    this.listItemsRef = this.dbFirebase.list('items');
    this.listItemsFirebase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
          return { 
            id: c.payload.key,
            name: c.payload.val()['name'],
            disabled: c.payload.val()['disabled'],
          }
        });
      });
  }

  public findAll(): Observable<Object> {
    // return this.httpClient.get(`${environment.firebase.databaseURL}/items.json`);
    return new Observable();
  }

  public addItem(item) {
    // return this.httpClient.post(`${environment.firebase.databaseURL}/items.json`, item);
    this.listItemsRef.push(item);
  }

  public removeItem(item) {
    // return this.httpClient.delete(`${environment.firebase.databaseURL}/items/${item.id}.json`);
    this.listItemsRef.remove(item.id);
  }
  public edit(id, item) {
    // return this.httpClient.patch(`${environment.firebase.databaseURL}/items/${id}.json`, item);
    this.listItemsRef.update(id, item);
  }
 }
