import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItemFirebase: Observable<ItemLista[]>;
  public itemName: string;

  constructor(private shoppingListService: ShoppingListService) {
  }
  
  ngOnInit() {
    this.listItemFirebase = this.shoppingListService.listItemsFirebase;
  }

  // public existItem(item: string): Array<ItemLista> {
  //   return this.listItems.filter(el => {
  //     return el.name.toUpperCase() === item.toUpperCase();
  //   });
  // }

  insertItem(): void {
    if (this.itemName) {
      // if (this.existItem(this.itemName).length === 0){
        let item = new ItemLista();
        item.name = this.itemName;
        item.disabled = false;
        this.shoppingListService.addItem(item);
        this.itemName = '';
    }
    else alert('Não é possível inserir um item vazio!');
  }
}
