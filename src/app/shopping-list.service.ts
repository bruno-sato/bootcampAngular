import { Injectable } from '@angular/core';
import { ItemLista } from './shopping-list/item-lista';

@Injectable()
export class ShoppingListService {

  public listItems: Array<ItemLista>;
  
  constructor() { 
    this.listItems = [
      {name: 'Bread', disabled: false},
      {name: 'Coffe', disabled: false},
      {name: 'Butter', disabled: false},
      {name: 'Milk', disabled: true},
      {name: 'Cookies', disabled: false}
    ]
  }

  public findAll(): Array<ItemLista> {
    return this.listItems;
  }

  public addItem(item: ItemLista): void {
    this.listItems.push(item);
  }

  public removeItem(item: ItemLista): void {
    let index = this.listItems.indexOf(item);
    this.listItems.splice(index, 1);
  }
  public cross(item: ItemLista): void {
    let index = this.listItems.indexOf(item);
    this.listItems[index].disabled = !this.listItems[index].disabled;
  }
 }
