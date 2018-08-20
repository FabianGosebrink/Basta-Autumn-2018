import { Component } from '@angular/core';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';
import { Configuration } from '../../configuration/app.configuration';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {
  constructor(
    public configuration: Configuration,
    private facade: CoreStoreFacade
  ) {}
}
