import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../Services/skills.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

   public userData = [];
   public skillName1;
   public strObj;
  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

   getSkills() {
    this.skillsService.getSkills().subscribe(data => this.userData = data);   
  }
  
  addskillDatabase(skill: string) {
    this.skillName1 = skill;
    this.skillsService.addSkills(this.skillName1).subscribe(data => this.userData = data)
  }

  removeSkills(skill: string) {
    this.skillsService.removeSkills(skill).subscribe(data => this.userData = data);
  }

}
