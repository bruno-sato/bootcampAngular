import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { ItemLista } from '../shopping-list/item-lista';
declare var $ :any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public listItemFirebase: Observable<ItemLista[]>;
  public itemName: string;
  public itemQuantity: number;
  public itemValue: number;
  public filter: string;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.listItemFirebase = this.shoppingListService.listItemsFirebase.map(
      change => {
        return change.filter(c => {
          if (c['disabled'].toString() === 'true') {
            return false;
          } else {
            return true;
          }
        })
      }
    )
  }

  insertItem(): void {
    if (this.itemName) {
        let item = new ItemLista();
        item.name = this.itemName;
        item.quantity = this.itemQuantity;
        item.value = this.itemValue;
        item.disabled = false;
        this.shoppingListService.addItem(item);
        this.itemName = '';
        this.itemValue = undefined;
        this.itemQuantity = undefined;
        $('#add-item').modal('hide');
    }
    else alert('Não é possível inserir um item vazio!');
  }

  cancelarItem() {
    this.itemName = '';
    this.itemQuantity = undefined;
    this.itemValue = undefined;
  }

  filterItem() {
    
  }
}
