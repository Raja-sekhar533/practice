import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MessagesService } from './../messages.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DownloderService {

  constructor(private http: HttpClient,
              private messageService: MessagesService) { }
              getTextFile(filename: string){
                return this.http.get(filename, { responseType: 'text'})
                .pipe(
                  tap(data => this.log(filename, data),
                  error => this.logError(filename  , error)
                  )
                );
              }
                private log(filename: string , data: string)
{
              const message = `downlode service is downloaded "${filename}" and got "${data}"`;
              this.messageService.add(message);
             }
             private logError(filename: string, error: any){
               const message = `downlode service is failed to download "${filename}"; got error"${error.message}"`;
               this.messageService.add(message);
             }
}
