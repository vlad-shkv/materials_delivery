import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-button-call',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './button-call.component.html',
  styleUrl: './button-call.component.scss'
})
export class ButtonCallComponent {
  array = [1, 2, 3, 4, 5];

  handleClickButton() {
    console.log(1234);
  }
}
