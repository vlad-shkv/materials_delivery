import { Component } from '@angular/core';
import { AdvantagesSectionComponent } from '../advantages-section/advantages-section.component';
import { DeliverySectionComponent } from '../delivery-section/delivery-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AdvantagesSectionComponent, DeliverySectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
