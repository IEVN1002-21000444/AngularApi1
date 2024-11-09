import { Routes } from '@angular/router';
import utlRoutes from './utl/utl.routes';

export const routes: Routes = [

    {
        path: 'utl',
        loadChildren: () => import('./utl/utl.routes')
    }

];

