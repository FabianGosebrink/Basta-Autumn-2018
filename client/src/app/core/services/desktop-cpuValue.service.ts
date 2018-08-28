import { EventEmitter, Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CpuValueService {
  onNewCpuValue = new EventEmitter<string>();

  constructor(private electronService: ElectronService) {
    if (environment.desktop) {
      this.registerCpuEvent();
    }
  }

  private registerCpuEvent() {
    if (this.electronService.ipcRenderer) {
      this.electronService.ipcRenderer.on(
        'newCpuValue',
        (event: any, data: any) => {
          this.onNewCpuValue.emit(data);
        }
      );
    }
  }
}
