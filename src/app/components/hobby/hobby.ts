import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobby.html',
  styleUrl: './hobby.scss'
})
export class HobbyComponent {
  hobbies = [
    {
      icon: '💻',
      title: 'Informatique',
      description: 'Veille technologique, projets perso et exploration de nouvelles technologies.',
      tags: ['Dev', 'Veille Tech', 'Serveur']
    },
    {
      icon: '🎲',
      title: 'Jeux de société',
      description: 'Amateur de jeux de stratégie et de plateau.',
      tags: ['Stratégie', 'Convivial', 'Jeux de rôle']
    },
    {
      icon: '🏉',
      title: 'Rugby',
      description: 'Pratique en club pendant 4 ans, sport de cohésion et de dépassement de soi.',
      tags: []
    },
    {
      icon: '🤾',
      title: 'Handball',
      description: 'Pratique en club depuis 4 ans, sport collectif et compétitif.',
      tags: []
    },
    {
      icon: '🤝',
      title: 'Associatif',
      description: 'Engagement associatif, bénévolat et projets solidaires.',
      tags: ['Bénévolat', 'Solidarité']
    }
  ];
}
