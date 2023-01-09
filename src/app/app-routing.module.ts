import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './pages/data-view/data-view.component';
import { PanelMenuComponent } from './pages/panel-menu/panel-menu.component';
import { TrashComponent } from './pages/trash/trash.component';
import { TreeComponent } from './pages/tree/tree.component';

const routes: Routes = [
  {
    path: "panel-menu", component: PanelMenuComponent,
  },
  {
    path: "tree", component: TreeComponent
  },
  {
    path: "data-view", component: DataViewComponent
  },
  {
    path: "trash", component: TrashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
