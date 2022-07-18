import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teamForm = this.fb.group({
    teams: this.fb.array([this.fb.control('Dream Team')])
  });

  constructor(private fb: FormBuilder) {
  }

  get teams() {
    return this.teamForm.get('teams') as FormArray;
  }

  addTeam() {
    this.teams.push(this.fb.control(''));
  }

  deleteTeam(index: number) {
    this.teams.removeAt(index);
  }
}
