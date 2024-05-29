import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
 // standalone: true,
 // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StoryGameBot';

  constructor(private webSocketService:WebSocketService){}

  ngOninit(){
    this.webSocketService.listen('message').subscribe((data)=>{
      console.log(data);
    })
  }

  message: string = '';

  sendMessage(): void {
    this.webSocketService.sendMessage('message',this.message);
    console.log(this.message);
    //clear the textarea after sending the message
    this.message = '';
  }
}
