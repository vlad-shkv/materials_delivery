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
  advantagesArray = [
    { img: '/icons/icon-coins.png', text: 'Розумні ціни та бонуси постійним клієнтам' }, 
    { img: '/icons/icon-teamwork.png', text: 'Надамо персонал у будь-якій кількості' }, 
    { img: '/icons/icon-pending.png', text: `Виконуємо свої зобов'язання у строк` }, 
    { img: '/icons/icon-four.png', text: 'Досвід роботи в галузі понад 4 роки' }
  ];
}
