import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading">
      <p class="section-label">{{ label() }}</p>
      <h2>{{ title() }}</h2>
      @if (description()) {
        <p class="section-description">{{ description() }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
}
