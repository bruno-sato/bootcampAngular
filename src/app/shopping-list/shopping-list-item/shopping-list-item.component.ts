import { Component, OnInit, Input } from '@angular/core';
import { ItemLista } from '../item-lista';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input('item') public listItem: ItemLista;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  removeItem(item: ItemLista): void {
    this.shoppingListService.removeItem(item);
  }
  checkItem(item: ItemLista) :void {
    this.shoppingListService.cross(item);
  }
 
}
