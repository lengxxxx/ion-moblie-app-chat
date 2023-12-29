import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent  implements OnInit {
  
  @Input() item: any; 
  @Output() OnClick: EventEmitter<any> = new EventEmitter();
  
  
  constructor() { }
  
  ngOnInit() {}
  
  redirect() {
    this.OnClick.emit(this.item);
  }
}
