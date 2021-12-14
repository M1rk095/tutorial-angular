import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicatori',
  templateUrl: './indicatori.component.html',
  styleUrls: ['./indicatori.component.scss']
})
export class IndicatoriComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToIndicatoriDetails() {
    this.router.navigate(['indicatori']);
  }

}
