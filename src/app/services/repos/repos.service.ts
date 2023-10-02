import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  fetchRepos(user: string) {

    const url = `https://api.github.com/users/${user}/repos`

    return this.http
      .get(url)

  }
}
