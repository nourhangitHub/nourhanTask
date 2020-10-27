import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { SecondnavComponent } from './secondnav/secondnav.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MaincrouselComponent } from './maincrousel/maincrousel.component';
import { CardcrouselComponent } from './cardcrousel/cardcrousel.component';
import { BannerComponent } from './banner/banner.component';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';
import { OfficepageComponent } from './officepage/officepage.component';
import { AgmCoreModule} from '@agm/core';
import { FormsModule } from '@angular/forms';
import { TrackerComponent } from './tracker/tracker.component';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SecondnavComponent,
    FooterComponent,
    MainpageComponent,
    MaincrouselComponent,
    CardcrouselComponent,
    BannerComponent,
    AppcomponentComponent,
    OfficepageComponent,
    TrackerComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwhH_vLVoaDpUO7fIXKF1zXgoTwMoljDs'
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
