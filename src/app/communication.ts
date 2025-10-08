import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Shared at root level
})
export class CommunicationService {
  private messageToA = new Subject<string>();
  private messageToB = new Subject<string>();

  messageFromA$ = this.messageToB.asObservable();  // For B to subscribe
  messageFromB$ = this.messageToA.asObservable();  // For A to subscribe

  sendMessageToA(message: string) {
    this.messageToA.next(message);
  }

  sendMessageToB(message: string) {
    this.messageToB.next(message);
  }
}