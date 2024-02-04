import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() data1: string = '';
 @Input() data2: string = '';
 name: string ="Nishal"
//  usn : string ="4MT"
 userVerify(data1:string):boolean{
  return this.data1 === this.name ;
 }
}
