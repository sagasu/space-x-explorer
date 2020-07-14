import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { PastLaunchesListGQL } from '../../services/spacexGraphql.service';

@Component({
  selector: 'launch-list',
  templateUrl: './launch-list.component.html',
  styles: [`
  .container {
    padding-top: 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 350px);
    justify-content: center;
  }
  
  .mat-card {
    cursor: pointer;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent {
  constructor(private readonly pastLaunchesService: PastLaunchesListGQL) {}

  pastLaunches$ = this.pastLaunchesService
    .fetch({ limit: 30 })
    .pipe(map((res) => res.data.launchesPast));
}