import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToasterService } from 'angular2-toaster';
import { FoodDataService } from './data-services/food-data.service';
import { HttpWrapperService } from './data-services/httpWrapper.service';
import { IngredientsDataService } from './data-services/ingredient-data.service';
import { StandardHeaderInterceptor } from './interceptors';
import {
  AbstractCameraService,
  cameraFactory,
} from './services/camera.service';
import { CpuValueService } from './services/cpuValue.service';
import { DesktopNotificationService } from './services/desktopNotification.service';
import { AbstractNotificationService } from './services/notification.service';
import { PlatformInformationProvider } from './services/platformInformation.provider';
import { SignalRService } from './services/signalR.service';
import { Sorter } from './services/sort.service';
import { StorageService } from './services/storage.service';
import { WebAndMobileNotificationService } from './services/webAndMobileNotification.service';
import { CoreStoreFacade } from './store/core-store.facade';
import { effects } from './store/effects';
import { reducers } from './store/reducers';

export function notificationFactory(
  toasterService: ToasterService,
  platformProvider: PlatformInformationProvider
): AbstractNotificationService {
  if (platformProvider.isElectron) {
    return new DesktopNotificationService();
  }

  return new WebAndMobileNotificationService(toasterService);
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        FoodDataService,
        IngredientsDataService,
        Sorter,
        HttpWrapperService,
        StorageService,
        SignalRService,
        PlatformInformationProvider,
        CpuValueService,
        {
          provide: AbstractNotificationService,
          useFactory: notificationFactory,
          deps: [ToasterService, PlatformInformationProvider],
        },
        {
          provide: AbstractCameraService,
          useFactory: cameraFactory,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: StandardHeaderInterceptor,
          multi: true,
        },
      ],
    };
  }

  constructor(private facade: CoreStoreFacade) {
    this.facade.establishSignalRConnection();
  }
}
