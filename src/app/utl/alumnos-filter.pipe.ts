import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnos';

@Pipe({
  name: 'alumnosFilter',
  standalone: true
})
export class AlumnosFilterPipe implements PipeTransform {
  transform(value: AlumnosUtl[], args: string): AlumnosUtl[] {
    let filter: string = args ? args.toLocaleLowerCase() : '';

    return filter ? value.filter((alumnos: AlumnosUtl) =>
      alumnos.nombre.toLocaleLowerCase().indexOf(filter) != -1
    ) : value
  }
}