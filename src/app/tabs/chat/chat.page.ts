import { Component, OnInit } from '@angular/core';

export interface Mensagem{
  userId:number,
  text:string,
  time:string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  private myId:Number = 1;
  private messages:Object[] = [];

  constructor() { }

  ngOnInit() {
    
    var mensagem:Object = new Object();

    mensagem["text"] = "mensagem";
    mensagem['userId'] = 1;
    mensagem['time'] = '18:30'
  
    var mensagem1:Object = new Object();

    mensagem1["text"] = "mensagem";
    mensagem1['userId'] = 2;
    mensagem1['time'] = '18:30'
  
    var mensagem2:Object = new Object();

    mensagem2["text"] = "mensagem";
    mensagem2['userId'] = 1;
    mensagem2['time'] = '18:30'
  
    this.messages.push(mensagem);
    this.messages.push(mensagem1);
    this.messages.push(mensagem2);
  
  }

}
