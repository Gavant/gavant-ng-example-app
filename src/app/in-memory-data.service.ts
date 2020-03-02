import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 12, firstName: 'Alan', lastName: 'DiTaxio' },
      { id: 13, firstName: 'Adam', lastName: 'Baker' },
      { id: 14, firstName: 'Jimbo', lastName: 'Bronson' },
      { id: 15, firstName: 'Gabriella', lastName: 'Spain' },
      { id: 11, firstName: 'Bill', lastName: 'D.' },
      { id: 16, firstName: 'Bill', lastName: 'M.' },
      { id: 17, firstName: 'Bill', lastName: '$' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 11;
  }
}
