import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBlogComponent } from './components/title-blog/title-blog.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleBlogComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
