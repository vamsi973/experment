import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  // messages: string[] = [];
  // newMessage: string = '';
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    // this.chatService.receiveMessages().subscribe((message: string) => {
    //   this.messages.push(message);
    // });
  }

  // sendMessage() {
  //   this.chatService.sendMessage(this.newMessage);
  //   this.newMessage = '';
  // }

























  messages: { sender: string; content: string }[] = [];
  newMessage: string = '';







  sendMessage() {

    if (this.newMessage.trim()) {
      const userMessage = this.newMessage;
      this.messages.push({ sender: 'User', content: userMessage });
      this.newMessage = '';

      this.chatService.sendMessage(userMessage).subscribe(
        response => {
          const chatbotResponse = response.message;
          this.messages.push({ sender: 'Chatbot', content: chatbotResponse });
        },
        error => {
          console.log('An error occurred:', error);
        }
      );
    }
  }
}
