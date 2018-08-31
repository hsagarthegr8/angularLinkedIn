import { Component, OnInit } from '@angular/core';
import { BioImageService } from '../Services/bio-image.service'
@Component({
  selector: 'app-bio-image',
  templateUrl: './bio-image.component.html',
  styleUrls: ['./bio-image.component.css']
})
export class BioImageComponent implements OnInit {

  userData = []
  public name;
  public bio;
  public emailid;
  public mobile;

  constructor(private bioImageService: BioImageService) { }

  ngOnInit() {
    this.getBio();

  }
  getBio(){
     this.bioImageService.getBio().subscribe(data=>this.userData.push(data[0]));
     console.log(this.userData)
  }

  fetch() {
        this.name = this.userData[0].name;
        this.bio = this.userData[0].profile.bio;
        this.emailid = this.userData[0].email;
        this.mobile = this.userData[0].mobile; 
  }

  update(des: string, comName: string) {
    console.log(des);
    this.name = des;
    this.bio = comName;
    this.bioImageService.updateName(this.name).subscribe(data => this.userData = data);
    this.bioImageService.updateBio(this.bio).subscribe(data => this.userData = data);
  }

   update1(tPeriod: string, tmobile:string ) {
    this.emailid = tPeriod;
    this.mobile = tmobile;
    this.bioImageService.updateEmail(this.emailid).subscribe(data => this.userData = data);
    this.bioImageService.updateMobile(this.mobile).subscribe(data => this.userData = data);
  }


}
