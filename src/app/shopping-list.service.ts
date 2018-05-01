import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemLista } from './shopping-list/item-lista';
import { Observer } from 'firebase/app';

@Injectable()
export class ShoppingListService {

  public listItemsFirebase: Observable<ItemLista[]>;
  private listItemsRef: AngularFireList<ItemLista>;
  public totalValue: number;
  
  constructor(private dbFirebase: AngularFireDatabase) {
    this.listItemsRef = this.dbFirebase.list('items');
    this.listItemsFirebase = this.listItemsRef.snapshotChanges().map(
      changes => {
        return changes.map(c => {
          if (c.payload.val()['disabled']) {
            this.totalValue = this.totalValue + parseInt(c.payload.val()['value']);
          }
          return { 
            id: c.payload.key,
            name: c.payload.val()['name'],
            quantity: c.payload.val()['quantity'],
            value: c.payload.val()['value'],
            disabled: c.payload.val()['disabled'],
          }
        });
      });
  }

  public findAll(): Observable<Object> {
    return new Observable();
  }

  public addItem(item) {
    this.listItemsRef.push(item);
  }

  public removeItem(item) {
    this.listItemsRef.remove(item.id);
  }
  public edit(id, item) {
    this.listItemsRef.update(id, item);
  }
 }
