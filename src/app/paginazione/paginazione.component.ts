import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginazione',
  templateUrl: './paginazione.component.html',
  styleUrls: ['./paginazione.component.scss']
})
export class PaginazioneComponent implements OnChanges {

  @Input() elemPerPage = 10;
  @Input() dataSourceLength = 0;
  @Input() currentPage = 1;

  @Output() changePage = new EventEmitter();

  private lastPage = this.currentPage;
  pages: number[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pages = [];
    this.lastPage = this.dataSourceLength / this.elemPerPage;
    if (this.dataSourceLength % this.elemPerPage > 0)
      this.lastPage += 1;
    for (let page = 1; page <= this.lastPage; page++)
      this.pages.push(page);
  }

  emitChangePage(page: number) {
    if (page !== this.currentPage && page >= 1 && page <= this.lastPage)
      this.changePage.emit(page);
  }

}
