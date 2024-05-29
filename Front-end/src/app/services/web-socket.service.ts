import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket:any;
  readonly uri: string= "";

  constructor() { 
    this.socket = io(this.uri);
  }

  listen(eventName: string){
    return new Observable((Subscriber)=>{
      this.socket.on(eventName, (data: any)=>{
        Subscriber.next(data);
      })
    });
  }

  sendMessage(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }
}
