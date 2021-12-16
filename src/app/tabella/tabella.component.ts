import { Component, OnInit } from '@angular/core';
import { TabellaService } from './tabella.service';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent implements OnInit {

  slicedDataSource: any;
  dataSourceLength = 0;
  elemPerPage = 10;
  currentPage = 1;

  constructor(private tabellaService: TabellaService) { }


  ngOnInit(): void {
    this.search(this.currentPage);
  }


  search(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.elemPerPage;
    const end = page * this.elemPerPage;
    this.tabellaService.getData().subscribe(
      (resp: any) => {
        this.slicedDataSource = resp
          .sort((a: any, b: any) => {
            var nameA = a.nominativoCliente.toUpperCase();
            var nameB = b.nominativoCliente.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          .slice(start, end);
        this.dataSourceLength = resp.length;
      }
    );
  }

}
