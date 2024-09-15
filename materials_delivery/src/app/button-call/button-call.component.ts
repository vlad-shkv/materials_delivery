import { Component } from '@angular/core';

@Component({
  selector: 'app-button-call',
  standalone: true,
  imports: [],
  templateUrl: './button-call.component.html',
  styleUrl: './button-call.component.scss'
})
export class ButtonCallComponent {
  handleClickButton() {
    console.log(1234);
  }
}
