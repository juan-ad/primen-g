import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './pages/panel-menu/panel-menu.component';
import { DataViewComponent } from './pages/data-view/data-view.component';
import { TreeComponent } from './pages/tree/tree.component';
import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/panelmenu';
import { TreeModule } from 'primeng/tree';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TrashComponent } from './pages/trash/trash.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    TreeComponent,
    DataViewComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    TreeModule,
    HttpClientModule,
    SplitButtonModule,
    ContextMenuModule,
    DataViewModule,
    DropdownModule,
    TooltipModule,
    FormsModule, 
    CheckboxModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
