import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading';
import {
  profile,
  projects,
  skillGroups,
  socialLinks,
} from '../../data/portfolio-content';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, ProjectCardComponent, SectionHeadingComponent],
  templateUrl: './home-page.html',
})
export class HomePageComponent {
  protected readonly profile = profile;
  protected readonly projects = projects;
  protected readonly skillGroups = skillGroups;
  protected readonly socialLinks = socialLinks;
}
