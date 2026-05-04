import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      poste: 'Développeur Full Stack',
      entreprise: 'Logic@l Conseils',
      periode: 'Novembre 2024 - Avril 2025',
      description: 'Développement d\'applications interne.',
      tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'GitLab CI/CD']
    },
    {
      poste: 'Développeur Full Stack',
      entreprise: 'Logic@l Conseils',
      periode: 'Avril 2021 - Novembre 2024',
      description: [
        'Traitement de grands flux de données entre AS400 et PostgreSQL',
        ' Développement de batchs Java pour automatisation de traitements complexes',
        ' Création de web services REST (Java, Spring Boot)',
        ' Mise en place d\'un système de supervision et sécurisation des échanges',
        ' Gestion des accès et authentification des utilisateurs',
        ' Requêtes SQL et gestion des données sous PostgreSQL'
      ],
      tags: ['Java', 'Angular', 'PostgreSQL']
    }
  ];
}
