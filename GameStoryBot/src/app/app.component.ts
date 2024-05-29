import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GameStoryBot';
  messages: any[] = []; // Array to hold chat messages

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.listen('message').subscribe((data )=> {
  
    let new_message={ content: (data as {content:string} ).content, sender: 'bot', time: this.getTime() ,message_id:(data  as  { message_id :string}).message_id};
      
      // Push received message to the messages array
      // this.messages.push({ content: data, sender: 'bot', time: this.getTime() });
      if (this.messages.filter(message=>message.message_id===(data as  { message_id :string}).message_id).length>=1){
        // message already exists
        this.messages.filter(message=>message.message_id===(data as  { message_id :string}).message_id)[0].content+=new_message.content
      }
      else {
        // new chat
        this.messages.push(new_message)
      }

      
      // this.messages[1]={ content: data, sender: 'bot', time: this.getTime() }
      // if new message push it , if already exists update it 


    });
  }

  message: string = '';

  sendMessage(): void {
    // Send user message
    this.messages.push({ content: this.message, sender: 'user', time: this.getTime() });
    this.webSocketService.sendMessage('message', this.message);
    this.message = ''; // Clear the textarea after sending the message
  }

  // Helper method to get current time
  getTime(): string {
    const now = new Date();
    return now.getHours() + ':' + now.getMinutes();
  }
}
