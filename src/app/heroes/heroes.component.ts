import { MessagesService } from './../messages.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate} from '@angular/animations';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {
  showUploader = true;
  showDownloader = true;

    heroes: Hero[];
    selectedHero: Hero;
  constructor(private heroService: HeroService, private messageservice: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
getHeroes(): void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageservice.add(`the selected hero is ${hero.name}`);
  }

  toggleUploader() { this.showUploader = !this.showUploader; }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
