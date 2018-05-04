import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public listItemFirebase: Observable<ItemLista[]>;
  public totalValue: number = 0;

  constructor(private shoppingListService: ShoppingListService) {
  }
  
  ngOnInit() {
    this.listItemFirebase = this.shoppingListService.listItemsFirebase.map(
      change => {
        this.totalValue = 0;
        return change.filter(c => {
          if (c['disabled'].toString() === 'true') {
            this.totalValue = this.totalValue + (parseInt(c['value'].toString()) * parseInt(c['quantity'.toString()]));
            return true;
          } else {
            return false;
          }
        })
      }
    )
  }  
}
