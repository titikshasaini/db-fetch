import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';


@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.css'],
})
export class CsvViewerComponent implements OnInit {
  data: any[] = [];
  
  constructor(private csvService: CsvService) {
  }

  ngOnInit(): void {
    this.csvService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log("!!!!!!!!!!!!!!!",this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
