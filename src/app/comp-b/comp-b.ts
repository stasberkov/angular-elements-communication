import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../communication';

@Component({
  selector: 'app-comp-b',
  template: `<p>Component B: Message from A: {{ messageFromA }}</p>
             <button (click)="sendToA()">Send Message to A</button>`,
  styles: []
})
export class CompBComponent implements OnInit {
  messageFromA: string = '';

  constructor(private commService: CommunicationService) {}

  ngOnInit() {
    this.commService.messageFromA$.subscribe(msg => {
      this.messageFromA = msg;
    });
  }

  sendToA() {
    this.commService.sendMessageToA('Hello from B!');
  }
}