import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  lightboxOpen = false;
  lightboxImages: { src: string; caption: string }[] = [];
  lightboxIndex = 0;

  openLightbox(images: { src: string; caption: string }[]) {
    this.lightboxImages = images;
    this.lightboxIndex = 0;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  prev() {
    this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxImages.length) % this.lightboxImages.length;
  }

  next() {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxImages.length;
  }

  projects = [
    {
      titre: 'Site vitrine Qb-Renov',
      description: 'Application Spring Boot avec base PostgreSQL pour la création de devis dans le domaine du bâtiment. Front en ReactJS.',
      tags: ['Spring Boot', 'PostgreSQL', 'ReactJS'],
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      github: 'https://github.com/',
      demo: 'https://qb-renov.fr',
      demoImages: [] as { src: string; caption: string }[]
    },
    {
      titre: 'Application Création Match',
      description: 'Bot JavaScript pour la gestion d\'événements au sein d\'une association.',
      tags: ['JavaScript', 'Discord.js'],
      gradient: 'linear-gradient(135deg, #5865F2, #404EED)',
      demo: '',
      demoImages: [
        { src: '/assets/botDiscord/addmatch.png', caption: 'Création de match' },
        { src: '/assets/botDiscord/listmatch.png', caption: 'Liste des matchs' },
      ]
    },
      {
        titre: 'App Statistique Jeu',
        description: 'Recupération de données et de statistiques en jeu via une API disponible en ligne.',
        tags: ['JavaScript', 'Discord.js'],
        gradient: 'linear-gradient(135deg, #586777, #777777)',
        demo: '',
        demoImages: [
          { src: '/assets/botDiscord/commandeRBRS.png', caption: 'commande' },
          { src: '/assets/botDiscord/statRBRS.png', caption: 'statistiques joueur' },
        ]
      },
    {
      titre: 'Serveur Ubuntu + Docker',
      description: 'Mise en place d\'un serveur Ubuntu personnel avec déploiement de différents projets via Docker.',
      tags: ['Ubuntu', 'Docker', 'Linux', 'Nginx'],
      gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
      demo: '',
      demoImages: []
    },
    {
      titre: 'Application Interne',
      description: 'Développement d\'une appli interne avec front Angular et API REST Java. Déploiement via Gitlab CI/CD.',
      tags: ['Angular', 'Java', 'API REST', 'Gitlab'],
      gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
      demo: '',
      demoImages: []
    }
  ];
}
