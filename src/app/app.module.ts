import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelMenuComponent } from './pages/panel-menu/panel-menu.component';
import { TreeComponent } from './pages/tree/tree.component';
import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/panelmenu';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    TreeModule,
    HttpClientModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
