import { UploaderService } from './uploder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploder',
  templateUrl: './uploder.component.html',
  styleUrls: ['./uploder.component.css'],
  providers: [UploaderService]
})
export class UploderComponent implements OnInit {
message: string ;
  constructor(private uploadService: UploaderService) { }

  ngOnInit(): void {
  }
onPicked(input: HTMLInputElement){
  const file = input.files[0];
  if (file){
    this.uploadService.upload(file)
    .subscribe(msg => {input.value = null;
                       this.message = msg; });
  }
}
}
