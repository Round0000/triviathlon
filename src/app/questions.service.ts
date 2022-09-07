import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private sampleData = {
    qcm: [
      {
        question: 'Nouveau Réalisme ?',
        category: 'Art',
        options: [
          'Niki de Saint Phalle',
          'Dora Maar',
          'Francis Bacon',
          'Yayoi Kusama',
        ],
      },
      {
        question: 'Belgique ?',
        category: 'Géographie',
        options: ['Liège', 'Montreux', 'Tourcoing', 'Bâle'],
      },
      {
        question: 'Naomi Osaka ?',
        category: 'Sport',
        options: ['Tennis', 'Golf', 'Escrime', 'Patinage artistique'],
      },
      {
        question: 'La Leçon de piano ?',
        category: 'Cinéma',
        options: [
          'Jane Campion',
          'Agnès Varda',
          'Martin Scorsese',
          'David Lynch',
        ],
      },
      {
        question: 'Post-soviétique ?',
        category: 'Histoire',
        options: [
          'Boris Eltsine',
          'Mikhaïl Gorbatchev',
          'Léonid Brejnev',
          'Nikita Khrouchtchev',
        ],
      },
      {
        question: 'Roméo & Juliette ?',
        category: 'Littérature',
        options: ['Vérone', 'Milan', 'Venise', 'Rome'],
      },
      {
        question: 'Edit de Nantes ?',
        category: 'Histoire',
        options: ['Henri IV', 'Louis XIV', 'François Ier', 'Louis XIII'],
      },
      {
        question: 'Interstellar ?',
        category: 'Cinéma',
        options: [
          'Matthew MacConaughey',
          'Léonardo DiCaprio',
          'Brad Pitt',
          'Tom Cruise',
        ],
      },
      {
        question: 'Drapeau de la Pologne ?',
        category: 'Géographie',
        options: [
          'Blanc et rouge',
          'Blanc et bleu',
          'Rouge, bleu et blanc',
          'Jaune et bleu',
        ],
      },
      {
        question: 'Crabe de Disney ?',
        category: 'Cinéma',
        options: ['Sébastien', 'Achille', 'Berlioz', 'Rafiki'],
      },
      {
        question: '10 Oscars ?',
        category: 'Cinéma',
        options: [
          'West Side Story',
          'Amadeus',
          'Slumdog Millionaire',
          'Ben-Hur',
        ],
      },
      {
        question: 'Armstrong sur la Lune ?',
        category: 'Histoire',
        options: ['1969', '1989', '1972', '1977'],
      },
      {
        question: '"Je pense, donc je suis." ?',
        category: 'Philosophie',
        options: ['Descartes', 'Heidegger', 'Hegel', 'Socrate'],
      },
      {
        question: 'Numismate ?',
        category: 'Culture générale',
        options: ['Pièces de monnaie', 'Timbres', 'Figurines', 'Bouteilles'],
      },
      {
        question: 'David Gilmour ?',
        category: 'Musique',
        options: [
          'Pink Floyd',
          'King Crimson',
          'Nirvana',
          'Red Hot Chili Peppers',
        ],
      },
      {
        question: '"Un dimanche après-midi à l\'Île de la Grande Jatte" ?',
        category: 'Art',
        options: [
          'Georges Seurat',
          'Claude Monet',
          'Paul Cézanne',
          'Gustave Caillebotte',
        ],
      },
      {
        question: 'Normandie ?',
        category: 'Géographie',
        options: ['Calvados', "Côtes d'Armor", 'Ille-et-Vilaine', 'Mayenne'],
      },
      {
        question: 'Notre-Dame de Paris ?',
        category: 'Histoire',
        options: ['Gothique', 'Romane', 'Renaissance', 'Baroque'],
      },
      {
        question: 'Chick Corea ?',
        category: 'Musique',
        options: ['Piano', 'Guitare', 'Trompette', 'Batterie'],
      },
      {
        question: 'Maldives ?',
        category: 'Géographie',
        options: [
          'Océan Indien',
          'Océan Atlantique',
          'Océan Pacifique',
          'Océan Austral',
        ],
      },
      {
        question: 'Hydravion ?',
        category: 'Histoire',
        options: [
          'Henri Fabre',
          'George Eastman',
          'Denis Papin',
          'Nikola Tesla',
        ],
      },
      {
        question: 'Marseille ?',
        category: 'Sport',
        options: [
          'Stade Vélodrome',
          'Stade Pierre Mauroy',
          'Parc des Princes',
          'Stade Geoffroy-Guichard',
        ],
      },
      {
        question: '"Avant que l\'ombre..." ?',
        category: 'Musique',
        options: [
          'Mylène Farmer',
          'Céline Dion',
          'Jeanne Mas',
          'Patricia Kaas',
        ],
      },
      {
        question: 'HBO ?',
        category: 'Séries',
        options: ['Les Soprano', 'Breaking Bad', 'Twin Peaks', 'Fargo'],
      },
      {
        question: 'Frères Coen ?',
        category: 'Cinéma',
        options: [
          'Joel & Ethan',
          'David & Stanley',
          'Alain & Quentin',
          'Jim & Paul',
        ],
      },
      {
        question: "Bataille d'Alésia ?",
        category: 'Histoire',
        options: [
          '52 av. J.-C.',
          '134 av. J.-C.',
          '28 ap. J.-C.',
          '193 ap. J.-C.',
        ],
      },
      {
        question: 'Samus Aran ?',
        category: 'Jeux vidéo',
        options: [
          'Metroid',
          'Final Fantasy',
          'Bioshock',
          'The Legend of Zelda',
        ],
      },
      {
        question: 'SEGA ?',
        category: 'Jeux vidéo',
        options: ['Dreamcast', 'GameCube', 'PlayStation', 'Jaguar'],
      },
      {
        question: 'Première vidéo sur YouTube ?',
        category: 'Internet',
        options: [
          '23 avril 2005',
          '27 juin 2006',
          '12 mai 2004',
          '16 janvier 2003',
        ],
      },
      {
        question: 'Navigateur ?',
        category: 'Internet',
        options: ['Opera', 'Avast', 'Skype', 'Outlook'],
      },
    ],
    pictures: [
      {
        question: 'Guy de Maupassant',
        category: 'Littérature',
        options: [
          'https://cdn1.booknode.com/author_picture/6/guy-de-maupassant-5506-330-540.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Victor_Hugo_001.jpg/260px-Victor_Hugo_001.jpg',
          'http://www.theophilegautier.fr/wp-content/uploads/2010/05/Balzac-1842.jpg',
          'https://www.repro-tableaux.com/kunst/gaspardfelixtournachon_nadar/gustave_flaubert_1821_1880_bw.jpg',
        ],
      },
      {
        question: 'Berlin',
        category: 'Géographie',
        options: [
          'https://www.mda-brest.fr/wp-content/uploads/2021/05/berlin.jpg',
          'https://www.okvoyage.com/wp-content/uploads/2020/02/tokyo.jpg',
          'https://www.australia-australie.com/wp-content/uploads/2017/01/melbourne-05.jpg',
          'https://www.ebrdgreencities.com/policy-tool/wp-content/uploads/2021/01/iStock-1148711252-2-1000x1000.jpg',
        ],
      },
      {
        question: 'Pieter Brueghel l\'Ancien',
        category: 'Peinture',
        options: [
          'https://www.francetvinfo.fr/pictures/i2zqSd7pL-wk3JEjHSbYapUN7uI/fit-in/720x/2019/04/11/bruegel_8.jpg',
          'https://www.aparences.net/wp-content/uploads/2017/06/botticelli-adoration-des-mages.jpg',
          'https://www.connaissancedesarts.com/wp-content/uploads/2020/04/cda20_bio_bosch_3.jpg',
          'https://lesyeuxdargus.files.wordpress.com/2013/04/noces-de-cana-vc3a9ronc3a8se.jpg',
        ],
      },
      {
        question: 'xxxxxxxxx',
        category: 'xxxxxxxxx',
        options: [
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
        ],
      },
      {
        question: 'xxxxxxxxx',
        category: 'xxxxxxxxx',
        options: [
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
        ],
      },
      {
        question: 'xxxxxxxxx',
        category: 'xxxxxxxxx',
        options: [
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
        ],
      },
      {
        question: 'xxxxxxxxx',
        category: 'xxxxxxxxx',
        options: [
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
        ],
      },
      {
        question: 'xxxxxxxxx',
        category: 'xxxxxxxxx',
        options: [
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
          'xxxxxxxxx',
        ],
      },
    ],
  };

  private questions: any = [];
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

  fetchQuestions(type: any) {
    if (type === 'qcm') {
      return this.sampleData.qcm;
    } else if (type === 'pictures') {
      return this.sampleData.pictures;
    } else {
      return null;
    }
  }

  getQuestions(type: any) {
    this.questions = this.fetchQuestions(type);
    this.questionsSelection = [...this.questions];
    this.shuffleArray(this.questionsSelection);
    this.questionsSelection.forEach((el: any) => {
      el.answer = el.options[0];
      this.shuffleArray(el.options);
    });
    return this.questionsSelection;
  }
}
