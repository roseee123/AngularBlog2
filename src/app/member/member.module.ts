import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share';
import { MemberRoutingModule } from './member-routing.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportComponent } from './report/report.component';
import { ReportsService } from './services/reports.service';


@NgModule({
  declarations: [ReportListComponent, ReportComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    ShareModule
  ],
  providers: [ReportsService]
})
export class MemberModule { }
