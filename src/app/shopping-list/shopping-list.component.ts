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
    this.shoppingListService.findAll()
      .subscribe(res => {
        if(res) {
          this.listItems = Object.keys(res).map(id => {
            let item: ItemLista = res[id];
            item.id = id;
            return item;
          }), err => console.log(err);
        } else this.listItems = [];
      });
  }

  public existItem(item: string): Array<ItemLista> {
    return this.listItems.filter(el => {
      return el.name.toUpperCase() === item.toUpperCase();
    });
  }

  insertItem(): void {
    if (this.itemName) {
      if (this.existItem(this.itemName).length === 0){
        let item = new ItemLista();
        item.name = this.itemName;
        item.disabled = false;
        this.shoppingListService.addItem(item).subscribe(
          (res) => {
            item.id = res[name]; 
            this.listItems.unshift(item);
          },
          error => console.log(error)
        );
        this.itemName = '';
      }
      else {
        alert('Item já existe');
      }
    }
    else alert('Não é possível inserir um item vazio!');
  }
}
