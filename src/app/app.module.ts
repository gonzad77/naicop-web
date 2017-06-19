import { NgModule } from '@angular/core'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login';
import { ClientUserProfileComponent } from './clientUser/client-user-profile';
import { CreateEventComponent } from './clientUser/create-event';
import { EditEventComponent } from './clientUser/edit-event';
import { EventsListComponent } from './clientUser/events-list';
import { CreateSecurityClientComponent } from './clientUser/create-security-client';
import { DeleteSecurityClientComponent } from './clientUser/delete-security-client';
import { ClientUserResolver } from './clientUser/client-user-resolver';
import { ClientUserService } from './services/client-user-service';
import { LoginService } from './services/login-service';
import { CreateCategoryComponent } from './administrator/create-category';
import { AdminLoginComponent } from './login/admin-login';
import { CreateClientUserComponent } from './administrator/create-client-user';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientUserProfileComponent,
    CreateEventComponent,
    EventsListComponent,
    CreateSecurityClientComponent,
    DeleteSecurityClientComponent,
    CreateCategoryComponent,
    AdminLoginComponent,
    CreateClientUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
    }),
    ImageUploadModule.forRoot()
  ],
  providers: [
    ClientUserResolver,
    ClientUserService,
    LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
