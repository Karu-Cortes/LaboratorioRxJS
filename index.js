import {of} from 'rxjs';
import {map, filter} from 'rxjs/operators';

of(0,1,2,3,4,5,6,7,8,9).pipe(
  map(n => n % 2 !== 0 ? n : null),
  filter(n => n !== null)
  ).subscribe(n => {
    console.log(n);
  });
