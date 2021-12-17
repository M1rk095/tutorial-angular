import { Component, OnInit } from '@angular/core';
import { RssService } from './rss.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {




  sports: any;
  inputValue = '';

  constructor(private rssService: RssService) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    const input = this.inputValue.trim().toLocaleUpperCase();
    this.rssService.getData().subscribe(
      (resp: any) => {
        this.sports = resp.rss_list.filter(
          (sport: any) => !input || sport.title.includes(input)
        );
      }
    );
  }

}
