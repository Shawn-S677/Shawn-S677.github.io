import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { profile, socialLinks } from '../../data/portfolio-content';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
})
export class SiteHeaderComponent {
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
}
