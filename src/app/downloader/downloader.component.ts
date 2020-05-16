import { DownloderService } from './downloder.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css'],
  providers: [DownloderService]
})
export class DownloaderComponent implements OnInit {
contents: string;
  url = './raj.txt';
  constructor(private downloaderService: DownloderService) { }

  ngOnInit(): void {
  }
  clear(){
    this.contents = undefined;
  }
  download(){
    this.downloaderService.getTextFile(this.url)
    .subscribe(results => this.contents = results);
  }
}
