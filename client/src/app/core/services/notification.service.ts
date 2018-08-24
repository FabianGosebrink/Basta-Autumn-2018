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

export enum MessageType {
  Error,
  Info,
  Wait,
  Success,
  Warning,
}

export interface INotificationService {
  showNotification(
    type: MessageType,
    title: string,
    message: string,
    icon?: string
  ): void;
}

@Injectable({
  providedIn: 'root',
  useFactory: notificationFactory,
  deps: [ToasterService, PlatformInformationProvider],
})
export abstract class AbstractNotificationService
  implements INotificationService {
  abstract showNotification(
    type: MessageType,
    title: string,
    message: string,
    icon?: string
  ): void;
}
