import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

import { routing,appRoutingProviders }  from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    FooterComponent,
    HomepageComponent,
    ServicespageComponent,
    PortfoliopageComponent,
    AboutpageComponent,
    BlogpageComponent,
    ContactpageComponent,
    appRoutingProviders
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
