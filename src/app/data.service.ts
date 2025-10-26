import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    private lambdaUrl = 'https://wrqlyz512m.execute-api.us-east-1.amazonaws.com/default/HockeySiteGoogleSheetsReader';
    private data: any = null;

    constructor(private http: HttpClient) { }

    async loadData(): Promise<void> {
        try {
            const response = await firstValueFrom(this.http.get(this.lambdaUrl));
            this.data = response;
            console.log('Loaded data from Lambda:', this.data);
        } catch (err) {
            console.error('Error loading sheet data:', err);
            throw err;
        }
    }

    getData() {
        return this.data;
    }
}