import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    standalone: true,
    imports: [
        MatCardContent,
        MatFormField,
        MatInput,
        ReactiveFormsModule,
        MatButton,
        MatCardActions,
        MatCardHeader,
        MatCard,
        MatLabel,
        MatCardTitle,
        MatError,
        NgIf,
        FormsModule,
    ],
    styleUrls: ['./login-register.component.scss']
})

export class LoginRegisterComponent {
    loginForm: FormGroup;
    registerForm: FormGroup;
    isLoginMode: boolean = true;

    constructor(private readonly fb: FormBuilder, private readonly authService: AuthService, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(2)]]
        });

        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]]
        });
    }

    redirectToHome() {
        this.router.navigate(['/home']);
    }

    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmitLogin() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value)
                .subscribe({
                    next: (response) => {
                        const token = response.token;
                        this.authService.saveToken(token);
                        console.log('Login successful:', response);
                        this.router.navigate(['/home']);
                    },
                    error: (error) => {
                        console.error('Login error:', error);
                    }
                });
        }
    }

    onSubmitRegister() {
        if (this.registerForm.valid) {
            const {name, email, password} = this.registerForm.value;
            let username = name;
            this.authService.register({username, email, password}).subscribe({
                next: (response) => {
                    console.log('Registration successful:', response);
                    this.toggleMode();
                },
                error: (error) => {
                    console.error('Registration error:', error);
                }
            });
        }
    }
}