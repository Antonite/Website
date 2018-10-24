import { Component } from '@angular/core';
import { WorkExperiences, Education } from './experience/experience-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workExperience = WorkExperiences;
  education = Education;

  title = 'antonite';

  public ngOnInit()
  {

  }
}
