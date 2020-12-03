import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private geturl = 'http://localhost:3001/posts';
  constructor(
    private http: HttpClient
  ) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public getHeroes(): Observable<Hero> {
   return this.http.get<Hero>(this.geturl)
    .pipe(
      retry(1),
      catchError(this.errorHandl));
    /* map((hero: any) => ({
      user: hero.user,
      title: hero.title,
    })), tap(console.log)  */
  }
  getSingleHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`http://localhost:3001/posts/${id}`);

  }
  addHero() {
    const hero = this.getSingleHero<[Hero]>(id);
  }
  // tslint:disable-next-line: typedef
  public errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
