import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvViewerComponent } from './csv-viewer/csv-viewer.component';


const routes: Routes = [{ path: 'csv-viewer', component: CsvViewerComponent },
{ path: '', redirectTo: '/csv-viewer', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
