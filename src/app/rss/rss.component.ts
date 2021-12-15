import { Component, OnInit } from '@angular/core';
import { RssService } from './rss.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {

  constructor(private rssService: RssService) { }

  ngOnInit(): void {
    this.rssService.getData().subscribe((resp: any) => console.log(resp));
  }

}
