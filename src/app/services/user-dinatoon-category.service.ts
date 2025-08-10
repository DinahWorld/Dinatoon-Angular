import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface UserDinatoonCategory {
    id: number;
    name: string;
    userDinatoon: {
        id: number,
        name: string,
        imageUrl: string
    };
    category: {
        id: number;
        name: string;
    };
}

@Injectable({providedIn: 'root'})
export class UserDinatoonCategoryService {

    private readonly API_URL = 'http://localhost:8080/api/categories';
    private readonly token = localStorage.getItem('authToken');

    constructor(private readonly http: HttpClient) {
    }

    getByUser(): Observable<UserDinatoonCategory[]> {
        return this.http.get<UserDinatoonCategory[]>(`${this.API_URL}/user-dinatoon`, {
            headers: {
                Authorization: this.token ? `Bearer ${this.token}` : ''
            }
        });
    }
}