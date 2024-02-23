import { Component, Input } from '@angular/core';
import { TArticle } from '../../../data/mockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input({required: true}) data!: TArticle;
}
