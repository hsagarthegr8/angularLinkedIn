import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';

import { AppComponent } from './app.component';
import { BioImageComponent } from './bio-image/bio-image.component';
import { ExperienceComponent } from './experience/experience.component';
import { BioImageService } from '../app/Services/bio-image.service'
import { ExperienceService } from '../app/Services/experience.service';
import { EducationService } from '../app/Services/education.service';
import { CertificationService } from '../app/Services/certification.service';
import { AwardsService } from '../app/Services/awards.service';
import { PublicationsService } from '../app/Services/publications.service'
import { SkillsService } from '../app/Services/skills.service'
import { EndorsementService } from '../app/Services/endorsement.service';
import { EducationComponent } from './education/education.component';
import { CertificationComponent } from './accomplishment/certification/certification.component';
import { AwardsComponent } from './accomplishment/awards/awards.component';
import { PublicationsComponent } from './accomplishment/publications/publications.component';
import { SkillsComponent } from './skills/skills.component';
import { EndorsementComponent } from './endorsement/endorsement.component';

@NgModule({
  declarations: [
    AppComponent,
    BioImageComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationComponent,
    AwardsComponent,
    PublicationsComponent,
    SkillsComponent,
    EndorsementComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dhbm2gpyp'})
  ],
  providers: [BioImageService,
    ExperienceService,
    EducationService,
    CertificationService,
    AwardsService,
    PublicationsService,
    SkillsService,
    EndorsementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
