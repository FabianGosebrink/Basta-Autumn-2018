import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DesktopCameraService } from './desktopCamera.service';
import { MobileCameraService } from './mobileCamera.service';
import { PlatformInformationProvider } from './platformInformation.provider';

export function cameraFactory(
  platformProvider: PlatformInformationProvider
): AbstractCameraService {
  if (platformProvider.isMobileDevice) {
    return new MobileCameraService();
  }

  return new DesktopCameraService();
}

interface ICameraService {
  getPhoto(): Observable<string>;
}

@Injectable({
  providedIn: 'root',
  useFactory: cameraFactory,
  deps: [PlatformInformationProvider],
})
export abstract class AbstractCameraService implements ICameraService {
  abstract getPhoto(): Observable<string>;
}
