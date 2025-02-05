import { Component, OnInit } from '@angular/core';
import { DadosService} from './services/data.service';
import { DataValeu } from "./interface/data.interface";
;




/*interface Dado {
  dia: number;
  valor: number;
}*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataValue: DataValeu[] = [];

  constructor(private dataService: DadosService) {}

  ngOnInit() {
    this.dataService.getDados().subscribe((res: DataValeu[]) => {
      this.dataValue = res;
    });
  }
}
