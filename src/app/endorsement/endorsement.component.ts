import { Component, OnInit } from '@angular/core';
import { EndorsementService } from '../Services/endorsement.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.css']
})
export class EndorsementComponent implements OnInit {

  constructor(private endorsementService: EndorsementService) { }

  public userData = [];
  public endorsedName1;
  public endorsedComment1;
  public strObj;

  ngOnInit() {

    this.getEndorsement()
  }
  getEndorsement() {
    this.endorsementService.getEndorsement().subscribe(data => this.userData = data);
  }

  addEndorsementDatabase(form: NgForm, des: string, comName: string) {
    if (des == undefined || comName == undefined) {
      alert("Fields cannot be empty")
      console.log("If")
      return false;
    }
    else {
      console.log("Else");
      this.endorsedName1 = des;
      this.endorsedComment1 = comName;
      console.log(comName, this.endorsedComment1)
      this.strObj = '{"endorsedBy":"' + this.endorsedName1 + '","comment":"' + this.endorsedComment1 + '"}';
      this.strObj = JSON.parse(this.strObj);
      this.endorsementService.addEndorsement(this.strObj).subscribe(data => this.userData = data);
      form.resetForm();
    }
  }

}
