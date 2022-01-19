/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Phrase {
  id: number;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  first: Phrase[] = [
    {
      id: 1,
      label: 'Hello world!',
    },
    {
      id: 2,
      label: 'See you tomorrow.',
    },
    {
      id: 3,
      label: 'What is your name?',
    },
  ];

  second: Phrase[] = [
    {
      id: 1,
      label: 'Hola mundo!',
    },
    {
      id: 2,
      label: 'Hasta luego.',
    },
    {
      id: 3,
      label: 'Como te llamas?',
    },
  ];

  phrases: Phrase[] = this.first;

  selectedPhrase: Phrase = this.phrases[0];

  isFirst = true;

  ngOnInit() {
    this.selectedPhrase = this.phrases[0];
  }

  changeLabels() {
    if (this.isFirst) {
      this.phrases = this.second;
      this.isFirst = false;
    } else {
      this.phrases = this.first;
      this.isFirst = true;
    }

    const id = this.selectedPhrase.id - 1;
    this.selectedPhrase = this.phrases[id];
  }
}
