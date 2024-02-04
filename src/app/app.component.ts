import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildFrontComponent } from './child-font/child-front.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent, ChildFrontComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment3';
  str: string = '';
  
  size:number=20;
  fontSizeSend(value: string) {
    this.size = parseInt(value);
  }
  ValueSend(name: string) {
    this.str = name;
    
  }

  
}
