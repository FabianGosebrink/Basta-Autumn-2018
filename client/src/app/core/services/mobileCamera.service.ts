import { Observable, Observer } from 'rxjs';
import { AbstractCameraService } from './abstract-camera.service';

declare let window: any;

export class MobileCameraService implements AbstractCameraService {
  private camera;
  init(camera: any) {
    this.camera = camera;
  }

  getPhoto(): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      const options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.CAMERA,
        encodingType: this.camera.EncodingType.PNG,
        pictureSourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: false,
        targetWidth: 640,
        targetHeight: 640,
        correctOrientation: true,
      };

      this.camera.getPicture(
        (imageData: any) => {
          observer.next('data:image/png;base64,' + imageData);
          observer.complete();
        },
        (error: any) => {
          observer.error(error);
          observer.complete();
        },
        options
      );
    });
  }
}
