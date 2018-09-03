import { Component } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private cloudinary: Cloudinary) {
    console.log(cloudinary.cloudinaryInstance.image('koala')['src']);
  }
}

