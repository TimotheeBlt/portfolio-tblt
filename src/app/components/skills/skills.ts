import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  categories = [
    {
      titre: 'Technologies',
      skills: [
        { nom: 'Java / Spring Boot' },
        { nom: 'JEE' },
        { nom: 'Angular' },
        { nom: 'Javascript' },
        { nom: 'PostgreSQL' },
        { nom: 'Python' },
        { nom: 'Docker' }
      ]
    },
  {
        titre: 'Outils',
        skills: [
          { nom: 'Eclipse' },
          { nom: 'IntelliJ' },
          { nom: 'Postman' },
          { nom: 'DBeaver' },
          { nom: 'Gitlab / Git' },
          { nom: 'Jira' },
          { nom: 'Jenkins' },
          { nom: 'MobaXTerm' }
        ]
      },
    {
      titre: 'Méthodologies',
      skills: [
        { nom: 'Agile' }
      ]
    },
    {
      titre: 'Environnements',
      skills: [
        { nom: 'Windows' },
        { nom: 'Linux' }
      ]
    },
    {
      titre: 'Serveurs',
      skills: [
        { nom: 'Tomcat / Apache' }
      ]
    },

  ];
}
