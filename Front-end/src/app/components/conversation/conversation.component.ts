import { Component } from '@angular/core';
import { ChatbotComponent } from "../chatbot/chatbot.component";

@Component({
    selector: 'app-conversation',
    standalone: true,
    templateUrl: './conversation.component.html',
    styleUrl: './conversation.component.scss',
    imports: [ChatbotComponent]
})
export class ConversationComponent {

}
