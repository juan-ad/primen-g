import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  items: any[] = [];

  selectedItems: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response => { 
        this.items = response;
      }
    );
  }
  
  previsualizar(product: any){
    console.log(product);
  }

  eliminarPermanentemente(product: any){
    console.log(product);
  }

  restaurar(product: any){
    console.log(product);
  }

  vaciarSeleccionados(){
    this.items = this.items.filter(val => !this.selectedItems.includes(val));
    this.selectedItems = [];
    console.log(this.selectedItems);
  }

  restaurarSeleccionados(){
    console.log(this.selectedItems);
  }

  filtroTabla(event: any, dt:any){
    dt.filterGlobal(event.target.value, 'contains')
  }

}
