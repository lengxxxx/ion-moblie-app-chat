import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;
  segment='chats';
  open_new_chat=false;
  users= [
    { id:1, name:'ANCHER' , photo:'/src/assets/photo_2023-06-26_14-31-24.jpg'},
    { id:2, name:'ABC' , photo:'https://ionicframework.com/docs/img/demos/avatar.svg'},
  ];
  chatRooms=[
    { id:1, name:'ANCHER' , photo:'https://www.google.com/search?q=profile+pic+avatar+troll&sca_esv=594127581&tbm=isch&sxsrf=AM9HkKkqu1sM6jy1wgAZfTZPrEM55mzmLQ:1703731416561&source=lnms&sa=X&ved=2ahUKEwi-qIGPjrGDAxXqTWwGHVexBKkQ_AUoAXoECAEQAw&biw=946&bih=968&dpr=1.35#imgrc=uZtJoy6P-wMktM'},
    { id:2, name:'ABC' , photo:'https://ionicframework.com/docs/img/demos/avatar.svg'},
  
  ]
  
  
  constructor(private router:Router) { 
    
  }

  ngOnInit() {
  }
  
logout(){
  this.popover.dismiss();
}

onSegmentChanged(event :any ){
  console.log("event:::", event);
  
}
  newChat(){
    this.open_new_chat = true;
  }
  
  onWillDismiss(event:any){
    
  }
  
  cancel(){
    this.modal.dismiss();
    this.open_new_chat = false;
  }
  
  startChat(item){
    
  }
  
  getChat(item){
    this.router.navigate(['/','home','chats',item?.id])
  }
}
