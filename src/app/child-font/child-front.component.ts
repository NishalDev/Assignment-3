import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { FontSizeDirective } from '../font-size/font-size.directive';
@Component({
  selector: 'app-child-front',
  standalone: true,
  imports: [FontSizeDirective],
  templateUrl: './child-front.component.html',
  styleUrl: './child-front.component.css'
})
export class ChildFrontComponent {
  @Input() size:number=20;
}
