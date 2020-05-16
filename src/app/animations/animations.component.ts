import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger( 'openClose', [state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
state('close', style({
  height: '100px',
  opacity: 0.5 ,
  backgroundColor: 'green'
})),
      transition('open <=> close', [animate('3s')]),
      transition('open => close', [animate('1s')]),


      transition('close => open', [animate('2s')])
    ]),
  trigger('animation', [
state('enter', style({backgroundColor: 'blue'})),
state('leave', style({backgroundColor: 'yellow'})),
    transition('* => enter', [
      animate('3s', keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'orange'}),
        style({backgroundColor: 'pink'}),
        style({backgroundColor: 'red'})
      ]))
    ]),
    transition('* => leave', [
      animate('3s', keyframes([
        style({ backgroundColor: 'blue' }),
        style({ backgroundColor: 'yellow' }),
        style({ backgroundColor: 'orange' }),
        style({ backgroundColor: 'pink' }),
        style({ backgroundColor: 'red' })
      ]))
    ])
  ])],
})
export class AnimationsComponent implements OnInit {
isOpen = true;
raj = true;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }
  Toggle(){
    this.raj = ! this.raj;
  }
}
