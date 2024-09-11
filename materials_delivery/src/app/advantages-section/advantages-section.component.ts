import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-advantages-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './advantages-section.component.html',
  styleUrl: './advantages-section.component.scss'
})
export class AdvantagesSectionComponent {
  advantagesArray = ['Розумні ціни та бонуси постійним клієнтам', 'Надамо персонал у будь-якій кількості', `Виконуємо свої зобов'язання у строк`, 'Досвід роботи в галузі понад 4 роки']
}
