import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string | null = '';

  constructor(private router: Router, private modalservice: BsModalService) {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
  }

  onLogout() {
    // sessionStorage.removeItem("username");
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
