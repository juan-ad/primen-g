import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  // ---------------- DataView ---------

  /**
   * Variable para cambiar la vista de gridItem y listItem
   */
  gridView: boolean = true;

  products!: any[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortKey!: string;

  sortField!: string;

  selectedValues: string[] = [];

  // ------------ Tabla -----------------
  selectedItems!: any[];

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

  // Método para la selección de los items mediante el checkbox
  onChangeChk(event: any){

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

  vaciarSeleccionados(){
    if(this.gridView){
      console.log(this.selectedValues);
    }else{
      this.products = this.products.filter(val => !this.selectedItems.includes(val));
      this.selectedItems = [];
      console.log(this.selectedItems);
    }
  }

  restaurarSeleccionados(){
    if(this.gridView){
      console.log(this.selectedValues);
    }else{
      console.log(this.selectedItems);
    }
  }

  /**
   * Método para cambiar la vista de gridItem y listItem
   */
  onGridView(event: any){
    this.gridView = event;
    console.log(this.gridView);
    this.refreshGrid();
  }

  refreshGrid(){

  }

  filtroTabla(event: any, dt:any){
    dt.filterGlobal(event.target.value, 'contains')
  }
}
