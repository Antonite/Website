import { Component } from '@angular/core';
import { WorkExperiences, Education } from './experience/experience-data';
import * as $ from 'jquery';

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
    // $("#toolsTitle").hide();
    // $("#languageTitle").hide();

    // $("#manlanguage").hover(function(){
    //   $("#toolsTitle").show();
    //   $("#languageTitle").show();
    // },
    // function() {
    //   $("#toolsTitle").hide();
    //   $("#languageTitle").hide();
    // });
  }
}
