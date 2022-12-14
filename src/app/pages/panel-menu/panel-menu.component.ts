import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
        this.items = [
            {
            label: 'File',
            icon:'pi pi-fw pi-file',
            items: [
                {
                    label: 'Delete',
                    icon:'pi pi-fw pi-trash',
                    command: this.click.bind(this),
                },
                {
                    label: 'Export',
                    icon:'pi pi-fw pi-external-link',
                    command: this.click.bind(this),
                }
            ]
            },
            {
            label: 'Edit',
            icon:'pi pi-fw pi-pencil',
            style: "{'font-size:': '29px'}",
            items: [
                {
                    label: 'Left',
                    icon:'pi pi-fw pi-align-left',
                    command: this.click.bind(this),
                },
                {
                    label: 'Right',
                    icon:'pi pi-fw pi-align-right',
                    command: this.click.bind(this),
                },
            ]
            },
        ]
    }

    click(element: any){
        console.log(element);
    }
}
