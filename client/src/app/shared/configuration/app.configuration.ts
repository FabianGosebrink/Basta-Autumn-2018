import { Injectable } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Injectable({ providedIn: 'root' })
export class Configuration {
  constructor() {}

  title = 'eMeal';

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-right',
  });
}
