import { Component, Input } from '@angular/core';
import { TArticle } from '../../../data/mockData';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input({required: true}) data!: TArticle;
}
