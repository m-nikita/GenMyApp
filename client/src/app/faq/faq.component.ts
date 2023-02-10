import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent {
  questions: Question[] = [{
    id: 1,
    question: "De quoi s'agit-il ?",
    answer: "Notre application de génération automatisée de contenus pour les réseaux sociaux est conçue pour les agences de communication pour aider à produire rapidement et efficacement du contenu de qualité pour leurs clients."
  },
  {
    id: 2,
    question: "Comment cela fonctionne-t-il ?",
    answer: "L'application utilise des algorithmes de pointe pour générer des idées de contenu en se basant sur les tendances et les sujets pertinents du moment. Vous pouvez personnaliser le contenu pour répondre aux besoins spécifiques de votre client."
  },
  {
    id: 3,
    question: "Est-ce que je peux personnaliser le contenu généré ?",
    answer: "Oui, vous pouvez personnaliser le contenu généré en utilisant des filtres et en ajoutant du contenu manuellement pour répondre aux besoins de votre client."
  },
  {
    id: 4,
    question: "Faut-il être un développeur pour utiliser l'application ?",
    answer: "Non, vous n'avez pas besoin d'avoir des connaissances en programmation pour utiliser notre application. Elle a été conçue pour être facile à utiliser et conviviale pour tous les utilisateurs."
  },
  {
    id: 5,
    question: "Y a-t-il une limite à la quantité de contenu que je peux générer ?",
    answer: "Non, il n'y a pas de limite à la quantité de contenu que vous pouvez générer avec notre application. Vous pouvez générer autant de contenu que vous en avez besoin pour répondre aux besoins de votre client."
  },
  {
    id: 6,
    question: "Où puis-je trouver de l'aide pour utiliser l'application ?",
    answer: "Vous pouvez trouver de l'aide en nous contactant directement via la section Contact. Nous sommes toujours là pour vous aider à tirer le meilleur parti de notre application."
  }];
}

export interface Question {
  id: number,
  question: string,
  answer: string
}
