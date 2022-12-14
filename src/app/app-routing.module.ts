import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelMenuComponent } from './pages/panel-menu/panel-menu.component';

const routes: Routes = [
  {
    path: "panel-menu", component: PanelMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
