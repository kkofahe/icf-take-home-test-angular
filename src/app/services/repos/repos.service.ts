import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  fetchRepos(user: string): Observable<Array<any>> {
    const url = `https://api.github.com/users/${user}/repos`
    return this.http.get(url) as Observable<Array<any>>
  }
}
