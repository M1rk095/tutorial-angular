import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.scss']
})
export class AttivitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAttivitaDetails() {
    this.router.navigate(['attivita']);
  }

}
