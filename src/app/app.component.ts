import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashBoard';
  sideBar= true
  isSidebarToggle(){
    this.sideBar=!this.sideBar
  }
}
