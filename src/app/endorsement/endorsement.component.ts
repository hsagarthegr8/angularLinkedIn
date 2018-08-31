import { Component, OnInit } from '@angular/core';
import { EndorsementService } from '../Services/endorsement.service'
@Component({
  selector: 'app-endorsement',
  templateUrl: './endorsement.component.html',
  styleUrls: ['./endorsement.component.css']
})
export class EndorsementComponent implements OnInit {

  constructor(private endorsementService: EndorsementService) { }

  public userData = [];
  
  ngOnInit() {
    this.getEndorsement()
  }
  getEndorsement() {
    this.endorsementService.getEndorsement().subscribe(data => this.userData = data);
  }

}
