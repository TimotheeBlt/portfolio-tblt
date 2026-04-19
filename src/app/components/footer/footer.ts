import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  socials = [
    { nom: 'GitHub', url: 'https://github.com/TimotheeBlt/', icon: '🐙' },
    { nom: 'LinkedIn', url: 'https://fr.linkedin.com/in/timothee-bourlet-210523197', icon: '💼' },
  ];
}
