import { Component, OnInit} from '@angular/core';
import { RssService } from './rss.service';
import { Sport } from '../sport';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.scss']
})
export class RssComponent implements OnInit {

  sports: Sport[] = [];
  constructor(private rssService: RssService) { }
  
  ngOnInit(): void {
    this.rssService.getData().subscribe((resp: any) => this.sports = resp.rss_list);
    
  }

}
