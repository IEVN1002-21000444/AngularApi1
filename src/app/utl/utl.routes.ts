import { Route, Routes } from "@angular/router";
export default [
    {
        path: 'alumnos',
        loadChildren: () => import('./alumnos/alumnos.component')
    },
    {
        path: 'agregar',
        loadComponent: () => import('./agregar/agregar.component')
    },
    {
        path: 'eliminar/:matricula',
        loadComponent: () => import('./eliminar/eliminar.component')
    }
]as Routes