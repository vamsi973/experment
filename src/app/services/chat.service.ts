import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any;
  // private apiUrl = 'http://your-backend-server-url'; // Replace with your actual backend server URL
  private serverUrl = 'http://localhost:3001'; // Replace with the actual server URL
  private baseUrl = environment.server;
  constructor(private http: HttpClient) {
    // this.socket = io(this.serverUrl);
  }

  sendMessage(message: string): Observable<any> {
    const requestBody = { message: message };
    return this.http.post<any>(`${this.baseUrl}/send-message`, requestBody);
  }

  // sendMessage(message: string) {
  //   this.socket.emit('chat message', message);
  // }
  // receiveMessages(): Observable<any> {
  //   return new Observable<any>((observer) => {
  //     this.socket.on('chat message', (message: any) => {
  //       observer.next(message);
  //     });
  //   });
  // }
}
