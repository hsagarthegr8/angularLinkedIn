import { Component } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-root',
  template: `
  <app-bio-image></app-bio-image>
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
  constructor(private cloudinary: Cloudinary) {
    console.log(cloudinary.cloudinaryInstance.image('koala')['src']);
  }
}

