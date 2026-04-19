import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { FooterComponent } from './components/footer/footer';
import { HobbyComponent } from './components/hobby/hobby';
import { EducationComponent } from './components/education/education';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HobbyComponent,
    EducationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
