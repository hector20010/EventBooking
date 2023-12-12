import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from './event';
import {EVENTS} from './mock-event';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEventos(): Observable<Event[]> {
    return of (EVENTS);
  }

  constructor() { }
}
