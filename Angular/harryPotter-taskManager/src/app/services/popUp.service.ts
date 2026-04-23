import { Injectable, signal } from "@angular/core";
import { PopUpState, popUpTypes } from "../types";

@Injectable({
  providedIn: 'root'
})

export class popUpService {
  popUp = signal<PopUpState >({
    type: 'success',
    message: '',
    show: false,
  })

  showPopUp(type: popUpTypes, message: string) {
    this.popUp.set({ type, message, show: true });
    setTimeout(() => {
      this.popUp.set({ type, message, show: false });
    }, 3000);
  }
}