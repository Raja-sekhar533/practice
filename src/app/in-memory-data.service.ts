import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb() {
  const heroes = [
    {id: 501, name: 'neeraj'},
    {id: 505, name: 'krishnam raju'},
    {id: 506, name: 'badrinath'},
    {id: 507, name: 'mohan'},
    {id: 508, name: 'mukesh'},
    {id: 524, name: 'pavan kumar'},
    {id: 525, name: 'mourya prabhu'},
    {id: 536, name: 'ganesh'},
    {id: 539, name: 'mahesh'},
    {id: 540, name: 'sagar'}
  ];
  return {heroes};
}
  constructor() { }
 genId(heroes: Hero[]): number{
   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
 }
}
