import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Subscribers } from './shared/components/subscribers/subscribers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Subscribers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-insta');
}

