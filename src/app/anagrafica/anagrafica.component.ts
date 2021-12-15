import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anagrafica',
  templateUrl: './anagrafica.component.html',
  styleUrls: ['./anagrafica.component.scss']
})
export class AnagraficaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAnagraficaDetails() {
    this.router.navigate(['anagrafica']);
  }
}
