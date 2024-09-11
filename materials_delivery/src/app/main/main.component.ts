import { Component } from '@angular/core';
import { AdvantagesSectionComponent } from '../advantages-section/advantages-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AdvantagesSectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
