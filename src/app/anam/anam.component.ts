import { trigger , style, group,  transition , animate, keyframes, query, stagger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anam',
  templateUrl: './anam.component.html',
  styleUrls: ['./anam.component.css'] ,
  animations: [
    trigger('latestanimation' , [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
       query(':enter', stagger('300ms', [
         group([
         animate('2s  ease-in', keyframes([
           style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
           style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.5}),
           style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })

         ])),
        animate('1s ease-out', style({color: 'red'}))])
       ]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('2s 3s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.5 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 })

          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class AnamComponent implements OnInit {


    items = [];
  constructor() {
    this.items = ['raja sekhar', 'naveen', 'prudhvi', 'jaswanth'];

  }

  pushItem(){
    this.items.push('new name!!!');
  }

  deleteItem(){
    this.items.pop();
  }
  ngOnInit(): void {
  }

}
