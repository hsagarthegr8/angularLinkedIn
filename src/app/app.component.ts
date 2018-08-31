import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-bio-image></app-bio-image>
              <app-experience></app-experience>
              <app-education></app-education>
              <app-certification></app-certification>
              <app-awards></app-awards>
              <app-publications></app-publications>
              <app-skills></app-skills>
              <app-endorsement></app-endorsement>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
