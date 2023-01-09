import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { filter } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {

  products!: any[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortKey!: string;

  sortField!: string;

  layout: string = "grid";

  selectedValues: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response => { 
        this.products = response;
        console.log(this.products);
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
        { label: 'Price Low to High', value: 'price' }
      ];
    }

    onSortChange(event: any) {
        let value = event.value;
        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
  
    filtrar(event: any, dv: any){
      const filterValue = event.target.value;
      dv.filter(filterValue, "contains");
    }

    onChange(event: any){
      this.layout = event.layout;
    }

    // Método para la selección de los items mediante el checkbox
    onChangeChk(event: any){
      console.log(event.checked);
      
    }

    previsualizar(product: any){
      console.log(product);
    }

    vaciar(product: any){
      console.log(product);
    }

    restaurar(product: any){
      console.log(product);
    }
}
