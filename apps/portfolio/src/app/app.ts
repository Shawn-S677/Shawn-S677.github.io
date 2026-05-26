import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteFooterComponent } from './components/site-footer/site-footer';
import { SiteHeaderComponent } from './components/site-header/site-header';

@Component({
  imports: [RouterModule, SiteHeaderComponent, SiteFooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
