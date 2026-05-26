import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  architectureBoundaries,
  projects,
  workflowSteps,
} from '../../data/portfolio-content';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading';

@Component({
  selector: 'app-case-study-page',
  imports: [RouterLink, SectionHeadingComponent],
  templateUrl: './case-study-page.html',
})
export class CaseStudyPageComponent {
  protected readonly project = projects[0];
  protected readonly workflowSteps = workflowSteps;
  protected readonly architectureBoundaries = architectureBoundaries;
}
