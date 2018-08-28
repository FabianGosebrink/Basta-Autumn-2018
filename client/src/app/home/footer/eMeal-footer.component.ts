import { Component, NgZone } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CpuValueService } from '../../core/services/desktop-cpuValue.service';

@Component({
  selector: 'app-emeal-footer',
  templateUrl: 'eMeal-footer.component.html'
})
export class EMealFooterComponent {
  percentage: number;

  get currentEnvironment() {
    return environment;
  }

  constructor(
    private cpuValueService: CpuValueService,
    private ngZone: NgZone
  ) {
    this.cpuValueService.onNewCpuValue.subscribe((cpuValue: number) => {
      this.ngZone.run(() => {
        this.percentage = cpuValue;
      });
    });
  }
}
