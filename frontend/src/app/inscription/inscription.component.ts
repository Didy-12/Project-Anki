import { Component } from '@angular/core';
import { InscriptionService } from './inscription.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class InscriptionComponent {
  username: string = '';
  password: string = '';
  registrationMessage: string = '';

  constructor(private inscriptionService: InscriptionService) {}

  register() {
    this.inscriptionService.register(this.username, this.password).subscribe(
      (response: any) => {
        if (response && response.success) {
          this.registrationMessage = `Registration successful for ${response.user.username}`;
        } else {
          this.registrationMessage = 'Enregistrement reussi';
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error during registration:', error);

        if (error.error instanceof ErrorEvent) {
          // Erreur côté client
          this.registrationMessage = `Client error: ${error.error.message}`;
        } else {
          // Erreur côté serveur
          this.registrationMessage = `Server error: ${error.status} - ${error.statusText}`;
        }
      }
    );
  }
}
