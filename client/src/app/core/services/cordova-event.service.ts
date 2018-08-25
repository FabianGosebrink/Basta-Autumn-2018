import { Injectable } from '@angular/core';
import { AbstractNotificationService } from './abstract-notification.service';
import { MobileCameraService } from './mobileCamera.service';

declare let window: any;

@Injectable({ providedIn: 'root' })
export class CordovaEvent {
  constructor(
    private readonly mobileCameraService: MobileCameraService,
    private readonly notificationService: AbstractNotificationService
  ) {
    document.addEventListener('deviceready', this.onCordovaDeviceReady);
  }

  private onCordovaDeviceReady() {
    this.initCamera();
    document.removeEventListener('deviceready', this.onCordovaDeviceReady);
  }

  private initCamera() {
    if (!window.navigator.camera) {
      this.notificationService.showInfo(
        'Cordova camera',
        'Camera could not be initialised'
      );
      return;
    }
    const camera = window.navigator.camera;
    this.mobileCameraService.init(camera);
  }
}
