// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    // Add your authentication logic here
    if (this.username === "your_username" && this.password === "your_password") {
      // Redirect to the dashboard or perform other actions
      alert("Login successful!");
    } else {
      this.errorMessage = "Invalid username or password";
    }
  }
}
