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
import { CategoryService } from './services/category-service';
import { LoginService } from './services/login-service';
import { SecurityClientService } from './services/security-client-service';
import { EventService } from './services/event-service';
import { CreateCategoryComponent } from './administrator/create-category';
import { AdminLoginComponent } from './login/admin-login';
import { CreateClientUserComponent } from './administrator/create-client-user';
import { CategoryListComponent } from './administrator/category-list';
import { ClientUserListComponent } from './administrator/client-user-list';
import { EditCategoryComponent } from './administrator/edit-category';
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
    CreateClientUserComponent,
    CategoryListComponent,
    EditCategoryComponent,
    ClientUserListComponent
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
    LoginService,
    CategoryService,
    SecurityClientService,
    EventService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
