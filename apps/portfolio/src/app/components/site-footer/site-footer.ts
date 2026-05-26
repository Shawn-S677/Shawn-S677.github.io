import { Component } from '@angular/core';
import { profile, socialLinks } from '../../data/portfolio-content';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
})
export class SiteFooterComponent {
  protected readonly profile = profile;
  protected readonly socialLinks = socialLinks;
  protected readonly year = new Date().getFullYear();
}
