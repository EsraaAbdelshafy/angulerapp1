import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AboutComponent,ContactComponent,FreelancerComponent,HomeComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulerapp';
}
