import { ToasterService } from 'angular2-toaster';
import { AbstractNotificationService } from './abstract-notification.service';

export class WebAndMobileNotificationService
  implements AbstractNotificationService {
  constructor(private toasterService: ToasterService) {}

  showError(title: string, message: string, icon?: string) {
    this.showNotification('Error', title, message, icon);
  }

  showInfo(title: string, message: string, icon?: string) {
    this.showNotification('Info', title, message, icon);
  }

  showWait(title: string, message: string, icon?: string) {
    this.showNotification('Wait', title, message, icon);
  }

  showSuccess(title: string, message: string, icon?: string) {
    this.showNotification('Success', title, message, icon);
  }

  showWarning(title: string, message: string, icon?: string) {
    this.showNotification('Warning', title, message, icon);
  }

  private showNotification(
    type: string,
    title: string,
    message: string,
    icon?: string
  ): void {
    this.toasterService.pop(type, title, message);
  }
}
