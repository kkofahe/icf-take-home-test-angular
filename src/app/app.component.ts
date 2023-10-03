import { Component, OnInit } from '@angular/core';
import { ReposService } from './services/repos/repos.service';
import { firstValueFrom, tap } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  results: any;
  username = new FormControl('', [Validators.pattern(/^[A-Za-z0-9]{1,15}$/)]);
  constructor(private repoService: ReposService) { }

  ngOnInit(): void {
    this.username.valueChanges.subscribe(() => {
      this.results = undefined;
    })
  }

  async getRepos() {
    if (this.username.valid) {
      this.results = await firstValueFrom(this.repoService.fetchRepos(this.username.value as string)
        .pipe(
          tap((results) => {
            return results.sort((a, b) => { return a['watchers'] - b['watchers'] });
          }
          ))).catch((error) => {
            console.log(error);
          })
    } else {
      this.username.markAsTouched();
      this.username.markAsDirty();
    }
  }
}
