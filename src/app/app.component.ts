import { Component } from '@angular/core';
import { ReposService } from './services/repos/repos.service';
import { firstValueFrom, map, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repoService: ReposService) { }

  title = 'test';
  repo = '';
  results: any;
  async getRepos() {
    debugger
    this.results = await firstValueFrom(this.repoService.fetchRepos(this.repo).pipe(
      toArray(),
      map((results) => {
        return results.sort()
      }
      )))


  }
}
