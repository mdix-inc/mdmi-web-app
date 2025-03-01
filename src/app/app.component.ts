import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DataEnrichmentComponent } from './data-enrichment/data-enrichment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DataEnrichmentComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '<app-create-service></app-create-service>'
})
export class AppComponent {
  title = 'mdmi-web-app';
}
