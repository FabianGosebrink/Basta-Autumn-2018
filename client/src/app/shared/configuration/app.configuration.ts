import { Injectable } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { PlatformInformationProvider } from '../../core/services/platform-information.provider';

@Injectable({ providedIn: 'root' })
export class Configuration {
  constructor(
    private readonly platformInformationProvider: PlatformInformationProvider
  ) {}

  title = 'eMeal';

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: this.platformInformationProvider.isWeb
      ? 'toast-bottom-right'
      : 'toast-bottom-full-width',
  });
}
