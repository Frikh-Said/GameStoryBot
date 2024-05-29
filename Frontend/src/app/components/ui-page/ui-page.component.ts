import { Component } from '@angular/core';
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { ConversationComponent } from "../conversation/conversation.component";

@Component({
    selector: 'app-ui-page',
    standalone: true,
    templateUrl: './ui-page.component.html',
    styleUrl: './ui-page.component.scss',
    imports: [ChatbotComponent, ConversationComponent]
})
export class UIPageComponent {

}
