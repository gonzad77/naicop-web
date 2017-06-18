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
import { CreateCategoryComponent } from './administrator/create-category'
import { AdminLoginComponent } from './login/admin-login'


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
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    ClientUserResolver,
    ClientUserService,
    LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
