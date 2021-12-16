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
  title: string = "";
  numberElements: number = 3;
  flagDivisor: boolean = false;

  constructor(private rssService: RssService) {
   
   }
  
  ngOnInit(): void {
    this.rssService.getData().subscribe((resp: any) => this.sports = resp.rss_list); 
    this.numberElements = 0;
    this.flagDivisor = true;
    
  }

  clear(){
    if(this.title == ""){ 
      this.ngOnInit();
    } 
    
  }

  cerca(){
    if(this.title != ""){
      this.sports = this.sports.filter(res =>
        { return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())});
    }else if(this.title == ""){ 
      this.ngOnInit();
    } 
    
  }

}
