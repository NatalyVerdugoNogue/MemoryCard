import { Component, OnInit } from '@angular/core';
import { GetcardService } from '../getcard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  numberCards: number = 4;
  arrayCards: any = [];
  arrayCards2: any = [];
  card: any;
  num: number = 0;
  compareCard: any = [];
  par: number = 0;

  constructor(private cardsService: GetcardService) {

  }

  ngOnInit() {
    this.getInCads();
  }

  equalCards() {
    const p0 = this.compareCard[0].position;
    const p1 = this.compareCard[1].position;
    setTimeout(() => {
      this.arrayCards2[p0].totalhide = true;
      this.arrayCards2[p1].totalhide = true;
    }, 1000)
    this.num = 0;
    this.compareCard = [];
    this.par++;
    if (this.par === this.numberCards) {
      console.log('fin');
    }
  }

  differentCards() {
    const p0 = this.compareCard[0].position;
    const p1 = this.compareCard[1].position;
    setTimeout(() => {
      this.arrayCards2[p0].hide = true;
      this.arrayCards2[p1].hide = true;
    }, 1000)
    this.num = 0;
    this.compareCard = [];
  }

  comparison() {
    if (this.num === 2) {
      if (this.compareCard[0].number === this.compareCard[1].number && this.compareCard[0].suits === this.compareCard[1].suits) {
        this.equalCards();
      } else {
        this.differentCards();
      }
    }
  }

  arrayToCompare(i) {
    this.num = this.num + 1;
    this.compareCard.push({ ...this.arrayCards2[i], position: i });
    this.comparison();
  }

  show(i) {
    this.arrayCards2[i].hide = !this.arrayCards2[i].hide;
    this.arrayToCompare(i);
  }

  recursiveCards() {
    if (this.arrayCards.length === this.numberCards) {
      return this.arrayCards;
    } else {
      const ran = this.card[Math.floor(Math.random() * this.card.length)];
      this.arrayCards.push(ran);
      this.arrayCards = this.arrayCards.filter((v, i, a) => a.indexOf(v) === i);
      this.recursiveCards();
    }
  }

  getInCads() {
    this.cardsService.getCards().subscribe(
      cards => {
        this.card = cards;
        this.recursiveCards();
        this.arrayCards = this.arrayCards.concat(this.arrayCards);
        // this.arrayCards = [...this.arrayCards, ...this.arrayCards];
        this.arrayCards = this.arrayCards.sort(function () { return Math.random() - 0.5 });
        this.arrayCards2 = JSON.parse(JSON.stringify(this.arrayCards));
      });
  }
}

