import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemLista } from '../item-lista';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input('item') public listItem: ItemLista;
  public deleted: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  removeItem(): void {
    this.shoppingListService.removeItem(this.listItem);
  }
  checkItem() :void {
    let editedItem: Object = {
      name: this.listItem.name,
      disabled: !this.listItem.disabled
    }
    this.shoppingListService.edit(this.listItem.id, editedItem)
  }
 
}
