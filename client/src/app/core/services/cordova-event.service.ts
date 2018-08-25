import { Injectable } from '@angular/core';
import { AbstractNotificationService } from './abstract-notification.service';

declare let window: any;

@Injectable({ providedIn: 'root' })
export class CordovaEvent {
  constructor(
    private readonly notificationService: AbstractNotificationService
  ) {
    document.addEventListener('deviceready', this.onCordovaDeviceReady);
  }

  private onCordovaDeviceReady() {
    this.initCamera();
  }

  private initCamera() {
    if (!window.navigator.camera) {
      this.notificationService.showInfo(
        'Cordova camera',
        'Camera could not be initialised'
      );
      return;
    }
  }
}
