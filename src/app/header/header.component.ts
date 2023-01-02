import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() isSidebarToggle = new EventEmitter()
  // using EventEmitter user can craete events
  //@Output - child to parent

  sideBarToggle(){
    this.isSidebarToggle.emit()
    //user generated events will happens only after calling the emit() method
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300)
   
  }
}
