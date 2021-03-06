import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    _options = {
        toastTimeout: 1500,
        animate: 'fade',
        position: 'bottom-right',
        newestOnTop: false,
        showCloseButton: false,
        fadeIn: 800,
        fadeOut: 800,
        maxShown: 2,
    };

    constructor(private toastr: ToastrManager) { }

    showSuccess(message: string, title: string) {
        this.toastr.successToastr(message, title, this._options);
    }

    showError(message: string, title: string) {
        this.toastr.errorToastr(message, title, this._options);
    }

    showInfo(message: string, title: string) {
        this.toastr.infoToastr(message, title, this._options);
    }
}
