import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../communication';

@Component({
  selector: 'app-comp-a',
  template: `<p>Component A: Message from B: {{ messageFromB }}</p>
             <button (click)="sendToB()">Send Message to B</button>`,
  styles: []
})
export class CompAComponent implements OnInit {
  messageFromB: string = '';

  constructor(private commService: CommunicationService) {}

  ngOnInit() {
    this.commService.messageFromB$.subscribe(msg => {
      this.messageFromB = msg;
    });
  }

  sendToB() {
    this.commService.sendMessageToB('Hello from A!');
  }
}