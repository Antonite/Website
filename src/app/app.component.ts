import { Component, HostListener } from '@angular/core';
import { WorkExperiences, Education } from './experience/experience-data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workExperience = WorkExperiences;
  education = Education;
  hideNav = false;
  title = 'antonite';

  public ngOnInit()
  {

  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    this.hideNav = true;
    if ($event.currentTarget.pageYOffset === 0) this.hideNav = false;
   }
}
