import { Component } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

// Router 
const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'services', component: ServicespageComponent },
  { path: 'portfolio', component: PortfoliopageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'blog', component: BlogpageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);