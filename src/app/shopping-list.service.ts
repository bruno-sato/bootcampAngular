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

  public existItem(item: string): Array<ItemLista> {
    let existItem = this.listItems.filter(el => {
      if (el.name.toUpperCase() === item.toUpperCase()) return true;
      else return false;
    });
    console.log(existItem);
    
    return existItem;
  }

  public addItem(item: ItemLista): void {
    if (this.existItem(item.name).length === 0) {
      this.listItems.unshift(item);
    } else {
      alert('Item já existe');
    }
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
