import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SortRequest } from '../interfaces/sort-request';
import { SortResponse } from '../interfaces/sort-response';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  private url = environment.baseUrl + '/numbers'

  constructor(private http: HttpClient) { }

  sortNumbers(SortRequest: SortRequest): Observable<SortResponse> {
    return this.http.post<SortResponse>(`${this.url}/sort-command`, SortRequest);
  }

}
