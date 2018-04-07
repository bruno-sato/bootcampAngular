import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItems: Array<ItemLista>;
  public itemName: string;

  constructor(private shoppingListService: ShoppingListService) {
  }
  
  ngOnInit() {
    this.listItems = this.shoppingListService.findAll();
  }

  insertItem(): void {
    if (this.itemName) {
      let item = new ItemLista();
      item.name = this.itemName;
      item.disabled = false;
      this.shoppingListService.addItem(item);
    }
  }
}
