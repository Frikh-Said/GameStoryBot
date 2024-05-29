import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  readonly uri: string= "http://127.0.0.1:5000";;


  constructor() { 
    this.socket = io(this.uri);
  }

  listen(eventName: string){

    return new Observable((Subscriber)=>{

      this.socket.on(eventName, (data: {content:string,message_id:string})=>{
        Subscriber.next({content:data.content,message_id:data.message_id});
      })
    });
  }

  sendMessage(eventName: string, data: any){
    
    this.socket.emit(eventName, data);
  }
}
