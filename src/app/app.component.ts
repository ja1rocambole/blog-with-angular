import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBlogComponent } from './components/title-blog/title-blog.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { TArticle, dataFake } from '../data/mockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleBlogComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  articles: TArticle[] = dataFake

  bigArticleData = this.articles[0]

  array = ["1","1","1","1","1"]
}
