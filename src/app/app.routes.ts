import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { ClientUserProfileComponent } from './clientUser/client-user-profile';
import { CreateEventComponent } from './clientUser/create-event';
import { EventsListComponent } from './clientUser/events-list';
import { ClientUserResolver } from './clientUser/client-user-resolver';
import { CreateSecurityClientComponent } from './clientUser/create-security-client';
import { DeleteSecurityClientComponent } from './clientUser/delete-security-client';
import { AdminLoginComponent } from './login/admin-login';
import { CreateClientUserComponent } from './administrator/create-client-user';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ClientUserProfileComponent, resolve: { data: ClientUserResolver} },
  { path: 'createEvent', component: CreateEventComponent },
  { path: 'eventsList', component: EventsListComponent },
  { path: 'createSecurityClient', component: CreateSecurityClientComponent },
  { path: 'deleteSecurityClient', component: DeleteSecurityClientComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'createClientUser', component: CreateClientUserComponent },
];
