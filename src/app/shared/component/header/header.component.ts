import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<any>();

  constructor() { }

  handleToggleSidebar() {
    this.toggleSidebar.emit();
  }

}
