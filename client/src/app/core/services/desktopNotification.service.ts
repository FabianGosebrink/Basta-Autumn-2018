import { Injectable } from '@angular/core';
import { INotificationService, MessageType } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class DesktopNotificationService implements INotificationService {
  showNotification(
    type: MessageType,
    title: string,
    message: string,
    icon?: string
  ): void {
    if (!Notification) {
      alert(
        'Desktop notifications not available in your browser. Try Chromium.'
      );
      return;
    }

    const messageBody: NotificationOptions = {};

    messageBody.body = message;

    if (icon) {
      messageBody.icon = icon;
    }

    const titleToShow = MessageType[type] + ': ' + title;

    Notification.requestPermission().then(() => {
      const myNotification = new Notification(titleToShow, messageBody);
    });
  }
}
