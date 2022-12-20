import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/shared/services/node.service';
import {TreeDragDropService} from 'primeng/api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  providers: [
    TreeDragDropService
  ]
})
export class TreeComponent implements OnInit {

  files!:TreeNode[];

  selectedNode!: TreeNode;

  items:MenuItem[] = [];

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    /*this.files = [
        {
          label: "Documents",
          data: "Documents Folder",
          expandedIcon: "pi pi-folder-open",
          collapsedIcon: "pi pi-folder",            
          "children": [{
            "label": "Work",
            "data": "Work Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [{"label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document"}]
          }]
      },
      {
        label: "Pictures",
        data: "Pictures Folder",
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: [
            {"label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo"},
            {"label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo"},
            {"label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo"}]
      },
      {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "pi pi-folder-open",
        "collapsedIcon": "pi pi-folder",
        "children": [{
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{"label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie"}]
            },
            {
                "label": "Robert De Niro",
                "data": "De Niro Movies",
                "children": [{"label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie"}]
            }]
      },
      {
        label: "Pictures",
        data: "Pictures Folder",
        expandedIcon: "pi pi-folder-open",
        collapsedIcon: "pi pi-folder",
        children: [
            {"label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo"},
            {"label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo"},
            {"label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo"}]
      },
    ]*/
    this.nodeService.getFiles().subscribe( response => {
      this.files = response;
    });

    this.items = [
      {label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode.label)},
      {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
    ]
  }

  nodeSelect(event:any){
    console.log("Nodo Seelccionado", this.selectedNode);
  }

  loadNode(event:any){
    if (event.node){
      console.log("Nodo Expandido", event.node);
      this.nodeService.getLazyFiles().subscribe( nodes => {
        event.node.children = nodes;
      });
    }
  }

  viewFile(file: any) {
    alert(file);
  }

  unselectFile() {
    this.selectedNode = {};
  }
}
