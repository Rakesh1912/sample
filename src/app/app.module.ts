import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NameComponent } from './name/name.component';
import {UsernameComponent} from './username/username.component';
import { PeruComponent } from './peru/peru.component';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SigninnavComponent } from './signinnav/signinnav.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NameComponent,
    UsernameComponent,
    PeruComponent,
    PlacesComponent,
    PlaceDetailsComponent,
    StudentComponent,
    StudentDetailsComponent,
    StaffComponent,
    StaffDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SigninnavComponent,
    SigninComponent,
    RegisterComponent,
    ProfileComponent,
    UserComponent,
    ProductComponent,
    //SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
