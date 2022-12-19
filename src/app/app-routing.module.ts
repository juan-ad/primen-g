import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelMenuComponent } from './pages/panel-menu/panel-menu.component';
import { TreeComponent } from './pages/tree/tree.component';

const routes: Routes = [
  {
    path: "panel-menu", component: PanelMenuComponent,
  },
  {
    path: "tree", component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
