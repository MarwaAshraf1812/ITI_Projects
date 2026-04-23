import { Component, inject } from '@angular/core';
import { popUpService } from '../../services/popUp.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [NgClass],
  templateUrl: './popUp.html',
  styleUrl: './popUp.css'
})
export class PopUpComponent {
  public popService = inject(popUpService);
}
