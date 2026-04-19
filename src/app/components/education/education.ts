import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class EducationComponent {
  formations = [
    {
      periode: '2022 - 2024',
      ecole: 'CESI Lille',
      diplome: 'Master Manager architecture applications logicielles SI'
    },
    {
      periode: '2021 - 2022',
      ecole: 'CESI Lille',
      diplome: 'Bachelor Responsable en ingénierie des logiciels'
    },
    {
      periode: '2019 - 2021',
      ecole: 'IUT A Villeneuve d\'Ascq',
      diplome: 'DUT Informatique'
    }
  ];
}
