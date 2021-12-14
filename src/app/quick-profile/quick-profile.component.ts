import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-profile',
  templateUrl: './quick-profile.component.html',
  styleUrls: ['./quick-profile.component.scss']
})
export class QuickProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuickProfileDetails() {
    this.router.navigate(['quick-profile']);
  }

}
