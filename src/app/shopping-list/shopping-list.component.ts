import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ItemLista } from './item-lista';
declare var $ :any;

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItemFirebase: Observable<ItemLista[]>;
  public itemName: string;
  public itemQuantity: number;
  public itemValue: number;
  public filter: string;
  public totalValue: number = 0;

  constructor(private shoppingListService: ShoppingListService) {
  }
  
  ngOnInit() {
    this.listItemFirebase = this.shoppingListService.listItemsFirebase.map(
      change => {
        this.totalValue = 0;
        return change.map(c => {
          if (c['disabled'].toString() === 'true') {
            this.totalValue = this.totalValue + (parseInt(c['value'].toString()) * parseInt(c['quantity'.toString()]));
          }
          return c
        })
      }
    )
  }

  cancelarItem() {
    this.itemName = '';
    this.itemQuantity = undefined;
    this.itemValue = undefined;
  }

  filterItem() {
    
  }

  insertItem(): void {
    if (this.itemName) {
        let item = new ItemLista();
        item.name = this.itemName;
        item.quantity = this.itemQuantity;
        item.value = this.itemValue;
        item.disabled = true;
        this.shoppingListService.addItem(item);
        this.itemName = '';
        this.itemValue = undefined;
        this.itemQuantity = undefined;
        $('#add-item').modal('hide');
    }
    else alert('Não é possível inserir um item vazio!');
  }
}
