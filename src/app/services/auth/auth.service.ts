import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly API_URL = 'http://localhost:8080/api/auth';
    private readonly TOKEN_KEY = 'authToken';

    constructor(private readonly http: HttpClient) {
    }

    saveToken(token: string): void {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    clearToken(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http.post(`${this.API_URL}/login`, credentials);
    }

    register(user: { username: string; email: string; password: string }): Observable<any> {
        return this.http.post(`${this.API_URL}/register`, user);
    }
}