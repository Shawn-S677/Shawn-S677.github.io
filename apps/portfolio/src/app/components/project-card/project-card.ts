import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../../data/portfolio-content';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectCard>();
}
