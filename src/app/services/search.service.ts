import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private readonly baseUrl = 'http://localhost:8080/api/dinatoons/public/search';
    private searchResults: string = "";
    private dinatoon: any;

    constructor(private http: HttpClient) {
    }

    searchManga(title: string): Observable<any> {
        return this.http.get(`${this.baseUrl}?title=${encodeURIComponent(title)}`);
    }

    searchMangaById(id: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${encodeURIComponent(id)}`);
    }

    setResults(results: string) {
        this.searchResults = results;
    }

    setDinatoon(dinatoon: any) {
        this.dinatoon = dinatoon;
    }

    getResults(): string {
        return this.searchResults;
    }

    getDinatoon(): any {
        return this.dinatoon;
    }
}