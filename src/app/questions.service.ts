import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private questions: any = [
    {
      question: 'Nouveau Réalisme ?',
      category: 'Art',
      options: ['Niki de Saint Phalle', 'Dora Maar', 'Francis Bacon', 'Yayoi Kusama'],
    },
    {
      question: 'Belgique ?',
      category: "Géographie",
      options: ['Liège', 'Montreux', 'Tourcoing', 'Bâle'],
    },
    {
      question: 'Naomi Osaka ?',
      category: "Sport",
      options: ['Tennis', 'Golf', 'Escrime', 'Patinage artistique'],
    },
    {
      question: 'La Leçon de piano ?',
      category: "Cinéma",
      options: ['Jane Campion', 'Agnès Varda', 'Martin Scorsese', 'David Lynch'],
    },
    {
      question: 'Post-soviétique ?',
      category: "Histoire",
      options: ['Boris Eltsine', 'Mikhaïl Gorbatchev', 'Léonid Brejnev', 'Nikita Khrouchtchev'],
    },
    {
      question: 'Roméo & Juliette ?',
      category: "Littérature",
      options: ['Vérone', 'Milan', 'Venise', 'Rome'],
    },
    {
      question: 'Edit de Nantes ?',
      category: "Histoire",
      options: ['Henri IV', 'Louis XIV', 'François Ier', 'Louis XIII'],
    },
    {
      question: 'Interstellar ?',
      category: "Cinéma",
      options: ['Matthew MacConaughey', 'Léonardo DiCaprio', 'Brad Pitt', 'Tom Cruise'],
    },
    {
      question: 'Drapeau de la Pologne ?',
      category: "Géographie",
      options: ['Blanc et rouge', 'Blanc et bleu', 'Rouge, bleu et blanc', 'Jaune et bleu'],
    },
    {
      question: 'Crabe de Disney ?',
      category: "Cinéma",
      options: ['Sébastien', 'Achille', 'Berlioz', 'Rafiki'],
    },
    {
      question: '10 Oscars ?',
      category: "Cinéma",
      options: ['West Side Story', 'Amadeus', 'Slumdog Millionaire', 'Ben-Hur'],
    },
    {
      question: 'Armstrong sur la Lune ?',
      category: "Histoire",
      options: ['1969', '1989', '1972', '1977'],
    },
    {
      question: '"Je pense, donc je suis." ?',
      category: "Philosophie",
      options: ['Descartes', 'Heidegger', 'Hegel', 'Socrate'],
    },
    {
      question: 'Numismate ?',
      category: "Culture générale",
      options: ['Pièces de monnaie', 'Timbres', 'Figurines', 'Bouteilles'],
    },
    {
      question: 'David Gilmour ?',
      category: "Musique",
      options: ['Pink Floyd', 'King Crimson', 'Nirvana', 'Red Hot Chili Peppers'],
    },
    {
      question: '"Un dimanche après-midi à l\'Île de la Grande Jatte" ?',
      category: "Art",
      options: ['Georges Seurat', 'Claude Monet', 'Paul Cézanne', 'Gustave Caillebotte'],
    },
    {
      question: 'Normandie ?',
      category: "Géographie",
      options: ['Calvados', 'Côtes d\'Armor', 'Ille-et-Vilaine', 'Mayenne'],
    },
    {
      question: 'Notre-Dame de Paris ?',
      category: "Histoire",
      options: ['Gothique', 'Romane', 'Renaissance', 'Baroque'],
    },
    {
      question: 'Chick Corea ?',
      category: "Musique",
      options: ['Piano', 'Guitare', 'Trompette', 'Batterie'],
    },
    {
      question: 'Maldives ?',
      category: "Géographie",
      options: ['Océan Indien', 'Océan Atlantique', 'Océan Pacifique', 'Océan Austral'],
    },
    {
      question: 'Hydravion ?',
      category: "Histoire",
      options: ['Henri Fabre', 'George Eastman', 'Denis Papin', 'Nikola Tesla'],
    },
    // {
    //   question: 'xxxxxxxx ?',
    //   category: "xxxxxx",
    //   options: ['xxxxxxx', 'xxxxxxx', 'xxxxxxx', 'xxxxxxx'],
    // },
  ];
  private questionsSelection: any = [];

  getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  getQuestions() {
    this.questionsSelection = [...this.questions];
    this.shuffleArray(this.questionsSelection);
    this.questionsSelection.forEach((el: any) => {
      el.answer = el.options[0];
      this.shuffleArray(el.options);
    });
    return this.questionsSelection;
  }
}
