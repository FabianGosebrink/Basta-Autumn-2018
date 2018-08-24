import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { DesktopNotificationService } from './desktopNotification.service';
import { PlatformInformationProvider } from './platformInformation.provider';
import { WebAndMobileNotificationService } from './webAndMobileNotification.service';

export function notificationFactory(
  toasterService: ToasterService,
  platformProvider: PlatformInformationProvider
): AbstractNotificationService {
  if (platformProvider.isElectron) {
    return new DesktopNotificationService();
  }
  return new WebAndMobileNotificationService(toasterService);
}

@Injectable({
  providedIn: 'root',
  useFactory: notificationFactory,
  deps: [ToasterService, PlatformInformationProvider]
})
export abstract class AbstractNotificationService
  implements INotificationService {
  abstract showError(title: string, message: string, icon?: string);

  abstract showInfo(title: string, message: string, icon?: string);

  abstract showWait(title: string, message: string, icon?: string);

  abstract showSuccess(title: string, message: string, icon?: string);

  abstract showWarning(title: string, message: string, icon?: string);
}

export interface INotificationService {
  showError(title: string, message: string, icon?: string);

  showInfo(title: string, message: string, icon?: string);

  showWait(title: string, message: string, icon?: string);

  showSuccess(title: string, message: string, icon?: string);

  showWarning(title: string, message: string, icon?: string);
}