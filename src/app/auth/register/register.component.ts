import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { passwordValidator } from '../login/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      password1: ['', [Validators.required, Validators.minLength(5)]],
      password2: ['', [Validators.required, Validators.minLength(5)]],
    });

    this.registerForm.setValidators(passwordValidator());
  }

  register(): void {
    if (this.registerForm.valid) {
      this.userService.register(
        this.registerForm.get('name')?.value,
        this.registerForm.get('password1')?.value
      );
    }
  }
}
