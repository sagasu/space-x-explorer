import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LaunchDetailsGQL } from '../../services/spacexGraphql.service';
import {Location} from '@angular/common';

@Component({
  selector: 'launch-details',
  templateUrl: './launch-details.component.html',
  styles: [`
  .photo-grid {
    padding-top: 30px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
    private _location: Location
  ) {}

  launchDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );

  backClicked() {
    this._location.back();
  }
}