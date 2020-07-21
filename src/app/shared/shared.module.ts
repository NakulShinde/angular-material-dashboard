import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { MaterialModule } from './material/material.module';
import { PieComponent } from './widgets/pie/pie.component';
import { BarComponent } from './widgets/bar/bar.component';
import { LineComponent } from './widgets/line/line.component';
import { TableComponent } from './widgets/table/table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    BarComponent,
    LineComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    PieComponent,
    BarComponent,
    LineComponent,
    TableComponent
  ]
})
export class SharedModule { }
